import moment from "moment";

export class MomentUtils {
    public static getFormattedDate(date: string){
        return moment.utc(date).local().format('YYYY-MM-DD HH:mm')
    }
}