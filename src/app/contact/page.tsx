"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    window.location.href = `mailto:ashwathama2108@gmail.com?subject=${data.subject}&body=Hey Yash, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <main className="flex h-[92vh] flex-col px-8 py-3">
      <h1 className="flex justify-center p-1 text-2xl font-bold">
        Contact Me!
      </h1>
      <section className="space-y- flex flex-grow flex-col items-center justify-center gap-3">
        <h2 className="text-lg font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-blue-400">Let's Talk</span>
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[20rem] flex-col gap-2"
        >
          <input
            placeholder="Name"
            className="rounded-lg border bg-blue-200 px-2 py-3"
            type="text"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            className="rounded-lg border bg-blue-200 px-2 py-3"
            type="email"
            {...register("email")}
          />

          <input
            placeholder="Subject"
            className="rounded-lg border bg-blue-200 px-2 py-3"
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            className="rounded-lg border bg-blue-200 px-2 py-3"
            {...register("message")}
          />
          <button className="rounded-lg bg-blue-400 py-5 hover:bg-blue-500">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};
export default Contact;
