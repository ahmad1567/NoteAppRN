import { LocaleUtils } from "../../../utilities";
import { StackNavigationOptions } from "@react-navigation/stack";

interface StackNavigationOptionsProps {
    headerShown: boolean,
    titleKey?: string
}

export function createStackNavigationOptions(props: StackNavigationOptionsProps): Partial<StackNavigationOptions> {
    const { titleKey, headerShown } = props;

    return {
        headerShown,
        title: titleKey ? LocaleUtils.getLocalizedString(titleKey) : undefined
    }
}