import {useEffect, useCallback, useMemo} from "react";
import {Framework} from "../Framework.ts/Framework";
import {useAuthenication} from "../hooks/AuthenicationHook";
import {HttpClient} from "../http/HttpClient";
import auth from '@react-native-firebase/auth';

export function useInitialization() {
  const {user, initializing} = useAuthenication();
  const login = useCallback(
    (email: string, password: string) =>
      auth().signInWithEmailAndPassword(email, password),
    [auth],
  );
  const logout = useCallback(() => auth().signOut(), [auth]);
  const createUser = useCallback(
    (email: string, password: string) =>
      auth().createUserWithEmailAndPassword(email, password),
    [auth],
  );
  const acquireToken = useCallback(
    () => auth().currentUser?.getIdToken(),
    [auth],
  );

  useEffect(() => {
    const httpClient = HttpClient.initialize({authProvider: {acquireToken}});
    Framework.initialize({
      authProvider: {login, logout, createUser},
      httpClient,
    });
  }, [auth, login]);

  return {user, initializing};
}
