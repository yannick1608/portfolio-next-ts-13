export enum ContactFormStates{
   Initial,
   Loading,
   Success,
   Error
}

export type ContactFormState = {
   state: ContactFormStates;
   errorMsg?: string;
}

export type ContactBody = {
   email? : string;
   fullname? : string;
   message? : string;
}