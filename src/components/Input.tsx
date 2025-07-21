import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value: string | number;
  name: string;
  type?: "text" | "password" | "email" | "tel" | "url" | "number" | "date";
  errorMessage?: string;
  disabled?: boolean;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  inputClass?: string;
  note?: string;
}

export const Input = ({
  label,
  placeholder,
  value,
  name,
  required = false,
  type = "text",
  onChange,
  onBlur,
  errorMessage,
  touched,
  disabled = false,
  className,
  inputClass,
  note,
}: InputProps) => {
  const [hide, setHide] = useState(true);

  const showpassword = () => {
    setHide(!hide);
  };

  const EyeIcon = LuEye as React.FC<{ size: number }>;
  const EyeSlashIcon = LuEyeOff as React.FC<{ size: number }>;
  return (
    <div className={`flex flex-col relative ${className ? className : ""}`}>
      {label ? (
        <label
          htmlFor={name}
          className="text-sm text-gray-900 dark:text-white mb-1.5"
        >
          {label}
        </label>
      ) : (
        ""
      )}
      <div className="flex relative items-center">
        <input
          type={type === "password" ? (hide ? "password" : "text") : type}
          id={name}
          name={name}
          placeholder={`${placeholder || `Enter ${label}`}`}
          required={required}
          value={value === 0 ? "" : value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={twMerge(
            `h-10 px-3 py-2 border outline-none border-gray-200 focus:border-gray-900 dark:focus:border-white rounded-md focus-visible:border-gray-900  dark:focus-visible:border-white text-inherit appearance-none w-full 
          [&::-webkit-outer-spin-button]:appearance-none 
          [&::-webkit-inner-spin-button]:appearance-none 
          [&::-moz-appearance]:textfield`,
            touched && errorMessage ? "border-red-500" : "border-gray-200 ",
            inputClass
          )}
        />
        {type === "password" ? (
          <span
            className="absolute right-3 cursor-pointer "
            onClick={showpassword}
          >
            {!hide ? <EyeIcon size={16} /> : <EyeSlashIcon size={16} />}
          </span>
        ) : (
          ""
        )}
      </div>
      {note ? <p className="text-sm  mt-1">{note}</p> : null}
      {touched && errorMessage ? (
        <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Input;
