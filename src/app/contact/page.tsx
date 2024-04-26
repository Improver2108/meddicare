"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: number;
};

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    window.location.href = `mailto:muskan2208@gmail.com?subject=${data.subject}&body=Hey Muskan, my name is ${data.name}. (${data.message}) (${data.phone})`;
  };

  return (
    <main className="flex h-[92vh] flex-col px-8 py-3">
      <h1 className="flex justify-center p-1 text-2xl font-bold">
        Contact Me!
      </h1>
      <section className="space-y- flex flex-grow flex-col items-center justify-center gap-3">
        <h2 className="text-lg font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#629ea7]">{`Let's Talk`}</span>
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[20rem] flex-col gap-2"
        >
          <input
            placeholder="Name"
            className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
            type="text"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
            type="email"
            {...register("email")}
          />
          <input
            placeholder="Phone Number"
            className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
            type="tel"
            {...register("phone")}
          />

          <input
            placeholder="Subject"
            className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
            {...register("message")}
          />
          <button className="hover:from rounded-lg bg-gradient-to-r from-[#9dcfd3] to-[#629ea7] py-5 hover:from-[#9dcfd3] hover:to-[#28b5c2]">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};
export default Contact;
