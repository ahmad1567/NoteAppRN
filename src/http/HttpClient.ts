import { AuthProvider, HttpClientConfig } from "./HttpClientConfig";
import { HttpMethod } from "./HttpMethod"

export class HttpClient {
    private static instance: HttpClient;
    private readonly authProvider: AuthProvider;

    private constructor(config: HttpClientConfig) {
        this.authProvider = config.authProvider;
    }

    public static initialize(config: HttpClientConfig): HttpClient {
        HttpClient.instance = new HttpClient(config);
        return HttpClient.instance;
    }

    public static getInstance() {
        if (!HttpClient.instance) {
            throw new Error("HttpClient is not initialized");
        }

        return HttpClient.instance;
    }


    public async performRequest<TInput, TResult>(
        url: string,
        method: HttpMethod,
        payload?: TInput,
        additionalHeaders?: Record<string, string>,
    ) {
        try {
            const token = await this.authProvider.acquireToken(true);
            const headers = new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
                ...additionalHeaders
            });

            const request: RequestInit = {
                method,
                body: method != HttpMethod.Get ? JSON.stringify(payload) : undefined,
                headers
            }

            const response = await fetch(url, request);
            const parsedResponse = await response.json();
            return parsedResponse as TResult;
        } catch (error) {
            throw error;
        }
    }


}