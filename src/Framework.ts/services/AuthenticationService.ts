import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FrameworkConfig } from "../FrameworkConfig";

export class AuthenticationService {
    public constructor(private readonly config: FrameworkConfig) { }

    public async login(email?: string, password?: string): Promise<FirebaseAuthTypes.UserCredential> {
        try {
            if (!email || !password) {
                throw new Error("Password or Email is either empty");
            }

            return this.config.authProvider.login(email, password);
        } catch (error) {
            throw error;
        }
    }

    public async logout(): Promise<void> {
        try {
            return this.config.authProvider.logout();
        } catch (error) {
            throw error;
        }
    }

    public async createUser(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
        try {
            return this.config.authProvider.createUser(email, password);
        } catch (error) {
            throw error;
        }
    }
}