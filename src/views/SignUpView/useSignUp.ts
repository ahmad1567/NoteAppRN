import {useNavigation} from "@react-navigation/native";
import {useCallback, useReducer} from "react";
import {Framework} from "../../Framework/Framework";

interface LoginState {
  email?: string;
  password?: string;
}

interface LoginStateAction {
  type: LoginStateActionTypes;
  payload: string;
}

enum LoginStateActionTypes {
  "UPDATE_EMAIL",
  "UPDATE_PASSWORD",
}

const reducer = (state: LoginState, action: LoginStateAction) => {
  switch (action.type) {
    case LoginStateActionTypes.UPDATE_EMAIL:
      return {...state, email: action.payload};
    case LoginStateActionTypes.UPDATE_PASSWORD:
      return {...state, password: action.payload};
    default:
      return state;
  }
};

const initialState = {
  email: undefined,
  password: undefined,
};

export function useSignUp(): {
  state: LoginState;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  signUp: () => void;
} {
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const signUp = useCallback(async () => {
    try {
      if (state.email && state.password) {
        await Framework.getInstance().AuthenicationService.createUser(
          state.email,
          state.password,
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [state.email, state.password]);

  const onEmailChange = (payload: string) =>
    dispatch({type: LoginStateActionTypes.UPDATE_EMAIL, payload});
  const onPasswordChange = (payload: string) =>
    dispatch({type: LoginStateActionTypes.UPDATE_PASSWORD, payload});

  return {state, onEmailChange, onPasswordChange, signUp};
}
