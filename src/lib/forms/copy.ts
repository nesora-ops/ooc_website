/**
 * The editable words around a form: its success message (from the page's
 * module) and the messages every form shares (from Site-wide settings). Field
 * labels and dropdown options stay in each form's code.
 */
export type FormCopy = {
  successTitle: string;
  /** May carry {key} tokens, for example {response time}. */
  successMessage: string;
  notConnectedNote: string;
  errorTitle: string;
  errorFallback: string;
  consent: string;
  /** Values for the {key} tokens, resolved on the server. */
  values: Record<string, string>;
};
