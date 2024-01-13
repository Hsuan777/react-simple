export interface IReactHookFormInput {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  options: {
    required?: {
      value: boolean;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
}
