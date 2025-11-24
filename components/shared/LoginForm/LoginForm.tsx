"use client";
import { InputField } from "@/components/ui";
import SubmitButton from "@/components/ui/SemiButton/SemiButton";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: undefined,
    },
  });

  const { push } = useRouter();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    push("/dashboard");
    console.log(data);
  };

  const commonStyle =
    "my-2 outline-none border-none bg-gray-200 rounded-md p-2";

  return (
    <form
      className="border border-indigo-400 p-6 rounded-2xl w-full h-full flex flex-col justify-between gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        className={commonStyle}
        id="firstName"
        label="First Name"
        register={register}
        errors={errors}
        validation={{
          required: "First name is required",
          maxLength: { value: 20, message: "Max length is 20 characters" },
        }}
      />

      <InputField
        className={commonStyle}
        id="lastName"
        label="Last Name"
        register={register}
        errors={errors}
        validation={{
          required: "Last name is required",
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Only letters are allowed",
          },
        }}
      />

      <InputField
        className={commonStyle}
        id="age"
        label="Age"
        type="number"
        register={register}
        errors={errors}
        validation={{
          required: "Age is required",
          min: { value: 18, message: "Minimum age is 18" },
          max: { value: 99, message: "Maximum age is 99" },
        }}
      />

      <SubmitButton
        className="disabled:cursor-not-allowed disabled:bg-indigo-300 outline-none border-none bg-indigo-400 rounded-md p-2 text-white my-3 cursor-pointer"
        disabled={!!errors.firstName || !!errors.lastName || !!errors.age}
        label="Submit"
      />
    </form>
  );
};

export default LoginForm;
