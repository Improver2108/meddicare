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
      <section className="flex flex-grow items-center justify-center">
        <h2 className="text-lg font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-orange-500">Let's Talk</span>
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-fit flex-col space-y-3"
        >
          <div className="space-x-2">
            <input
              placeholder="Name"
              className="contact-input"
              type="text"
              {...register("name")}
            />
            <input
              placeholder="E-mail"
              className="contact-input"
              type="email"
              {...register("email")}
            />
          </div>
          <input
            placeholder="Subject"
            className="contact-input"
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            className="contact-input"
            {...register("message")}
          />
          <button className="rounded-lg bg-yellow-500 py-5 hover:bg-yellow-700">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};
export default Contact;
