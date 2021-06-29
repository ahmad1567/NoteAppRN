export interface Note {
  id: string;
  title: string;
  body: string;
  isReminder: boolean;
  reminderTime: number;
  createdOn: string;
}
