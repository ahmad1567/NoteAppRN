import { FrameworkConfig } from "./FrameworkConfig";
import { AuthenticationService } from "./services/AuthenticationService";
import { NotesService } from "./services/NotesService";

export class Framework {
    private static instance: Framework;
    private readonly authenicationService: AuthenticationService;
    private readonly notesService: NotesService;

    private constructor(config: FrameworkConfig) {
        this.authenicationService = new AuthenticationService(config);
        this.notesService = new NotesService(config);
    }

    public static getInstance() {
        if (!Framework.instance) {
            throw new Error("Framework is not initialized");
        }

        return Framework.instance;
    }

    public static initialize(config: FrameworkConfig) {
        Framework.instance = new Framework(config);
    }

    public get AuthenicationService(): AuthenticationService {
        return Framework.instance.authenicationService;
    }

    public get NotesService(): NotesService {
        return Framework.instance.notesService;
    }
}