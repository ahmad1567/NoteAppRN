import {Alert} from "react-native";
import {LocaleUtils} from "./LocaleUtilities";

export class AlertUtils {
  public static alert(titleKey: string, messageKey: string) {
    Alert.alert(
      LocaleUtils.getLocalizedString(titleKey),
      LocaleUtils.getLocalizedString(messageKey),
    );
  }
}
