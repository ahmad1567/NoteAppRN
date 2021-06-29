import {useState, useEffect} from "react";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";

export function useAuthenication() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<undefined | FirebaseAuthTypes.User>();

  function onAuthStateChanged(user: any) {
    if (user) {
      setUser(user);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [auth]);

  return {user, initializing};
}
