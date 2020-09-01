# CUSEC 2021 Website

## Preview

The website is deployed to two different Firebase projects.
They are separate production and staging environments, based off the `master` and `develop` branches respectively.

They can be visited through the following links.

Production:

- https://cusec-2021-production.web.app/
- https://cusec-2021-production.firebaseapp.com/

Staging:

- https://cusec-2021-staging.web.app/
- https://cusec-2021-staging.firebaseapp.com/

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
