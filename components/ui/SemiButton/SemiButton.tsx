"use client";

type SubmitButtonProps = {
  disabled?: boolean;
  label: string;
  className: string;
};

const SubmitButton = ({
  disabled = false,
  label = "Submit",
  className,
}: SubmitButtonProps) => {
  return (
    <input
      disabled={disabled}
      type="submit"
      value={label}
      className={` ${className}`}
    />
  );
};

export default SubmitButton;
