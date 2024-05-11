const ContactFormPAge = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Modify your contact info</h1>
      <form className="flex flex-col gap-3">
        <input
          type="tel"
          placeholder="Phone number"
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
          required
        />
        <input
          type="email"
          placeholder="Enter your mail here"
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
          required
        />
        <input
          type="text"
          placeholder="Enter your location"
          className="rounded-lg border bg-[#c8e1e2] px-2 py-3"
          required
        />
        <button className="rounded-lg bg-[#66a1aa] px-2 py-3">
          Submit the Details
        </button>
      </form>
    </>
  );
};

export default ContactFormPAge;
