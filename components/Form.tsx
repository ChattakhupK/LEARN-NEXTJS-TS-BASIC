"use client";
import { createCamps } from "@/utils/action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useActionState(createCamps, null);

  return (
    <>
      {message && <h1>{message}</h1>}
      <form action={formAction}>
        Form
        <input
          defaultValue="Udonthani 2024"
          className="border"
          placeholder="Camping Name"
          name="title"
        />
        <input
          defaultValue="Udonthani"
          className="border"
          placeholder="location"
          name="location"
        />
        <SubmitButton />
      </form>
    </>
  );
};
export default Form;
