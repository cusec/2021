const firebase = require("@firebase/testing");
const fs = require("fs");
const { setup, teardown } = require("./firestore.utils");

describe("Firestore security rules", () => {
  const projectId = `rules-spec-${Date.now()}`;
  const rules = fs.readFileSync(".firebase/firestore.rules", "utf8");
  let collection;

  beforeAll(async () => {
    const db = await setup(projectId, rules);
    collection = db.collection("emails");
  });

  beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId });
  });

  afterAll(teardown);

  const invalidEmails = [
    "a",
    "a@a.a",
    "test%@test.com",
    "test@test.c_a",
    "test+@test.com",
    " test@test.com",
    "test @test.com",
    "test@ test.com",
    "test@test .com",
    "test@test.com ",
  ];
  const validEmails = [
    "test@test.com",
    "a@a.b.cd",
    "test_ing-email@domain-with_under.dot.four",
  ];

  const validTimestamp = {
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  const invalidTimestampValues = [
    "",
    1,
    Date.now(),
    new Date(),
    1.5,
    [],
    {},
    new Date().getTime(),
  ];
  const invalidTimestampKeys = ["created", "timestamp", "time", " ", "''"];
  const invalidTimestamps = invalidTimestampValues
    .map((val) => ({
      createdAt: val,
    }))
    .concat(
      invalidTimestampKeys.map((key) => ({
        [key]: validTimestamp.createdAt,
      }))
    );

  describe("Write/Input validation", () => {
    it("should deny creating an invalid email", async () => {
      await Promise.all(
        invalidEmails.map((email) =>
          expect(collection.doc(email).set(validTimestamp)).toDeny()
        )
      );
    });

    it("should allow creating valid emails that have a valid timestamp", async () => {
      await Promise.all(
        validEmails.map((email) =>
          expect(collection.doc(email).set(validTimestamp)).toAllow()
        )
      );
    });

    it("should deny creating valid emails that have an invalid timestamp", async () => {
      await Promise.all(
        invalidTimestamps.map((timestamp) =>
          expect(collection.doc(validEmails[0]).set(timestamp)).toDeny()
        )
      );
    });

    it("should deny creating valid emails that have invalid fields", async () => {
      await Promise.all(
        invalidTimestampValues.map((timestamp) =>
          expect(
            collection.doc(validEmails[0]).set({ createdAt: timestamp })
          ).toDeny()
        )
      );
    });

    it("should deny updating existing emails", async () => {
      await Promise.all(
        validEmails.map((email) =>
          expect(collection.doc(email).set(validTimestamp)).toAllow()
        )
      );

      await Promise.all(
        validEmails.map((email) =>
          expect(collection.doc(email).set(validTimestamp)).toDeny()
        )
      );

      await Promise.all(
        validEmails.map((email) =>
          expect(
            collection.doc(email).set(validTimestamp, { merge: true })
          ).toDeny()
        )
      );

      await Promise.all(
        validEmails.map((email) =>
          expect(collection.doc(email).update(validTimestamp)).toDeny()
        )
      );

      await Promise.all(
        validEmails.map((email) =>
          expect(collection.doc(email).delete()).toDeny()
        )
      );
    });
  });

  describe("Read/Access validation", () => {
    it("should deny reading of emails that don't exist", async () => {
      await Promise.all(
        [...invalidEmails, ...validEmails].map((email) =>
          expect(collection.doc(email).get()).toDeny()
        )
      );
    });

    it("should deny reading of emails that do exist", async () => {
      await Promise.all(
        validEmails.map((email) =>
          expect(collection.doc(email).set(validTimestamp)).toAllow()
        )
      );

      await Promise.all(
        [...invalidEmails, ...validEmails].map((email) =>
          expect(collection.doc(email).get()).toDeny()
        )
      );
    });
  });
});
