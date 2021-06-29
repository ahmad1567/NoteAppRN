import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Tab } from "../../../components/tab";
import { Icons } from "../../../../resources/icons";
import { LocaleUtils } from "../../../utilities";

interface BottomTabNavigationProps {
    iconName: Icons,
    labelKey: string
}

export function createBottomTabNavigationOptions(props: BottomTabNavigationProps): Partial<BottomTabNavigationOptions> {
    const { iconName, labelKey } = props;

    return {
        tabBarIcon: (props) => Tab({
            iconColor: props.color,
            iconSize: props.size,
            iconName: iconName
        }),
        tabBarLabel: LocaleUtils.getLocalizedString(labelKey),
        title: LocaleUtils.getLocalizedString(labelKey),
    }
}