import React, { Context } from "react";
import { Duration } from ".";

/**
 * Interface for the mapped arguments of the snackbar context
 *
 * @param textArg - snackbar text
 *
 * @param durationArg -  snackbar duration
 *
 * @param iconArg - snackbar icon
 *
 * @param onStartCBArg - onStart snackbar callback
 *
 * @param onFinishCBArg - onFinish snackbar callback
 *
 * @param onPressCBArg - onPress snackbar callback
 *
 * @param onPressSectionTextArg - text for the onPress section
 *
 *  @param isErrorSnackbarArg - is error snackbar
 *
 * @remarks all of the arguments are optional so that the snackbar could be as modular as possible
 *
 * @remarks it's not recommended to leave out the text argument, may result in an empty snackbar
 *
 */
export interface SnackbarContextArgs {
  textArg?: string;
  durationArg?: Duration;
  iconArg?: JSX.Element;
  onStartCBArg?: () => void;
  onFinishCBArg?: () => void;
  onPressCBArg?: () => void;
  onPressActionTextArg?: string;
  isErrorSnackbarArg?: boolean;
}
/**
 * An interface of callback which will be accessible via the SnackbarContext
 */
export interface SnackbarContext {
  /**
   * A snackbar component
   */
  Snackbar: () => JSX.Element | null;

  /**
   * Displays the snackbar.
   * Clears the previous context, and accepts new arguments as an object literal
   *
   * @param snackbarContextArgs - snackbar context arguments of type SnackbarContextArgs
   * @returns the uuid of the current snackbar usage instance
   */
  display: (snackbarContextArgs?: SnackbarContextArgs) => string;

  /**
   * Cancels the execution of the snackbar's onFinish callback
   * @param id - uuid of the relevant snackbar usage instance (which was given by display)
   */
  abort: (id: string) => void;

  /**
   * Hides the snackbar.
   * @param id - uuid of the relevant snackbar usage instance (which was given by display)
   */
  hide: (id: string) => void;

  /**
   * Hides the snackbar async, waits for the animation to get over.
   * @param id - uuid of the relevant snackbar usage instance (which was given by display)
   */
  hideAsync: (id: string) => Promise<void>;

  /**
   * A boolean represents the visibility of the snackbar
   */
  isVisible: boolean;
}

/**
 * Creates an empty snackbar context
 */
export function createSnackbarContext(): Context<SnackbarContext> {
  return React.createContext<SnackbarContext>({
    Snackbar: () => null,
    display: () => {
      return "";
    },
    abort: (_id: string) => {
      return;
    },
    hide: (_id: string) => {
      return;
    },
    hideAsync: async (_id: string) => {
      await Promise.resolve();
    },
    isVisible: false,
  });
}
