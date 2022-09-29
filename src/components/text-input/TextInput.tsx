import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import './TextInput.css';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  validation?: (val: string) => boolean
}

const TextInput = (props: TextInputProps) => {''
  const { validation, onChange, className, ...rest } = props;
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (validation) {
      const isValid = validation(value);
      setError(!isValid)
    }
    if (onChange) onChange(e);
  }

  return (
    <input {...rest} onChange={handleChange} className={`${className} ${error ? 'input--error' : ''}`}/>
  );
};

export default TextInput;