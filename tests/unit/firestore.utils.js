const firebase = require("@firebase/testing");

module.exports.setup = async (projectId, rules, auth, data) => {
  const app = await firebase.initializeTestApp({
    projectId,
    auth,
  });
  const db = app.firestore();

  // Write mock documents before rules
  if (data) {
    for (const key in data) {
      const ref = db.doc(key);
      await ref.set(data[key]);
    }
  }

  // Apply rules
  await firebase.loadFirestoreRules({
    projectId,
    rules,
  });

  return db;
};

module.exports.teardown = async () => {
  Promise.all(firebase.apps().map((app) => app.delete()));
};

expect.extend({
  async toAllow(x) {
    let pass = false;
    let error = "";
    try {
      await firebase.assertSucceeds(x);
      pass = true;
    } catch (err) {
      error = err;
    }

    return {
      pass,
      message: () => error,
    };
  },
});

expect.extend({
  async toDeny(x) {
    let pass = false;
    let error = "";
    try {
      await firebase.assertFails(x);
      pass = true;
    } catch (err) {
      error = err;
    }
    return {
      pass,
      message: () => error,
    };
  },
});
