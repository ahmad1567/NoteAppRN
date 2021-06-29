export interface AuthProvider {
    acquireToken: (forceRefresh?: boolean) => Promise<string> | undefined;
}

export interface HttpClientConfig {
    authProvider: AuthProvider
}