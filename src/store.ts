import create from "zustand";

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const useStore = create((set, get) => ({
  analytics: undefined,
  firestore: firebase.firestore(),
  initAnalytics: async () => {
    if (!get().analytics) {
      let isSupported: boolean;

      try {
        isSupported = await firebase.analytics.isSupported();
      } catch (error) {
        isSupported = false;
      }

      if (firebaseConfig.measurementId && isSupported) {
        set({ analytics: firebase.analytics() });
      }
    }
  },
}));

export default useStore;
