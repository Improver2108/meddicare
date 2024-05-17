"use client";

import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";

type TContactForm = {
  location: string;
  email: string;
  phone: string;
};

const ContactFormPAge = () => {
  const trpcUtils = api.useUtils();
  const { data: contact, isLoading, isError } = api.contact.get.useQuery();
  const createContact = api.contact.upsert.useMutation({
    onSuccess: async () => await trpcUtils.contact.get.invalidate(),
  });
  const { register, handleSubmit, reset } = useForm<TContactForm>();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const contactSubmit = (formData: TContactForm) => {
    console.log(formData);
    createContact.mutate(formData);
  };

  return (
    <section className="flex flex-col items-center gap-2 p-4">
      <h1 className="text-xl font-bold">Modify your contact info</h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(contactSubmit)}
      >
        <input
          type="tel"
          placeholder="Phone number"
          defaultValue={contact?.phone}
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
          required
          {...register("phone", { required: true })}
        />
        <input
          type="email"
          placeholder="Enter your mail here"
          defaultValue={contact?.email}
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
          required
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Enter your location"
          defaultValue={contact?.location}
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
          required
          {...register("location", { required: true })}
        />
        <button className="rounded-lg bg-[#66a1aa] px-2 py-3">
          Submit the Details
        </button>
      </form>
    </section>
  );
};

export default ContactFormPAge;
