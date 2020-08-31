# CUSEC 2021 Website

## Notes

The `@firebase/testing` dev dependency is set to an older version due to a bug with the current ones.
Please see https://github.com/firebase/firebase-js-sdk/issues/3096 and https://stackoverflow.com/a/61934298 for more details.

## Testing

To run the Firestore security rules unit tests, first, start the emulator with the Firebase CLI.
Make sure it is installed beforehand.

```bash
firebase emulators:start --only firestore
```

Execute unit tests with:

```bash
npm run test
```
