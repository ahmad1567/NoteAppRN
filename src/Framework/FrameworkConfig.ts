import {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {HttpClient} from "../http/HttpClient";

export interface AuthProvider {
  login: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.UserCredential>;
  createUser: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.UserCredential>;
  logout: () => Promise<void>;
}

export interface FrameworkConfig {
  httpClient: HttpClient;
  authProvider: AuthProvider;
}
