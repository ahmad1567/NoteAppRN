export class Urls {
  public static getBaseUrl(): string {
    return "https://us-central1-notesapp-a316b.cloudfunctions.net/api";
  }

  public static getNotesUrl(): string {
    return `${Urls.getBaseUrl()}/notes`;
  }

  public static getNoteUrl(noteId: string): string {
    return `${Urls.getNotesUrl()}/${noteId}`;
  }

  public static getOCRUrl(): string {
    return `${Urls.getBaseUrl()}/ocr/image`;
  }
}
