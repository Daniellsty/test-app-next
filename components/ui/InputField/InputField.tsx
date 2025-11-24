"use client";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  type?: string;
  validation?: any;
  className?: string;
};

const InputField = <T extends FieldValues>({
  id,
  label,
  register,
  errors,
  type = "text",
  validation,
  className = "",
}: InputFieldProps<T>) => {
  return (
    <div className="flex flex-col">
      <label className="text-[13px] text-gray-700" htmlFor={String(id)}>
        {label}
      </label>
      <input
        id={String(id)}
        type={type}
        className={`outline-none border-none bg-gray-200 rounded-md p-2 ${className}`}
        {...register(id, validation)}
      />
      {errors[id] && (
        <p className="text-red-500 text-sm">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;
