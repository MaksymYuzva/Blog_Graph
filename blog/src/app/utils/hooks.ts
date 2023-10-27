import { useState, ChangeEvent, FormEvent } from "react";

export const useForm = (callback: () => void, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    callback();
  };
  return {
    onChange,
    onSubmit,
    values,
  };
};
