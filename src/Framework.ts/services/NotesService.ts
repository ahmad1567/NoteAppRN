import { HttpMethod } from "../../http/HttpMethod";
import { FrameworkConfig } from "../FrameworkConfig";
import { Note } from "../models";
import { Urls } from "../Urls";

export class NotesService {
    public constructor(private readonly config: FrameworkConfig) { }

    public async addNote(note: Note): Promise<Note> {
        try {
            return await this.config.httpClient.performRequest(Urls.getNotesUrl(), HttpMethod.Post, note)
        } catch (error) {
            throw error;
        }
    }

    public async deleteNote(noteId: string): Promise<void> {
        try {
            return await this.config.httpClient.performRequest(Urls.getNoteUrl(noteId), HttpMethod.Delete)
        } catch (error) {
            throw error;
        }
    }

    public async getAllNotes(): Promise<Note[]> {
        try {
            return await this.config.httpClient.performRequest(Urls.getNotesUrl(), HttpMethod.Get)
        } catch (error) {
            throw error;
        }
    }

    public async updateNote(noteId: string, note: Partial<Note>) {
        try {
            return await this.config.httpClient.performRequest(Urls.getNoteUrl(noteId), HttpMethod.Patch, note);
        } catch (error) {
            throw error;
        }
    }

    public async getNote(noteId: string): Promise<Note> {
        try {
            return await this.config.httpClient.performRequest(Urls.getNoteUrl(noteId), HttpMethod.Get)
        } catch (error) {
            throw error;
        }
    }

    public async extractNote(image: string): Promise<string> {
        try {
            return await this.config.httpClient.performRequest(Urls.getOCRUrl(), HttpMethod.Post, { base64: image });
        } catch (error) {
            throw error;
        }
    }
}