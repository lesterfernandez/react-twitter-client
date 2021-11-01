import { useState } from "react";

const useForm = initialValues => {
  const [values, setValues] = useState(() => initialValues);

  return [
    values,
    e => {
      setValues(c => ({ ...c, [e.target.name]: e.target.value }));
    },
    init => {
      setValues(init);
    },
  ];
};

export default useForm;
