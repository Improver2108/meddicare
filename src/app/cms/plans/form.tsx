type TPlanForm = {
  name: string;
  points: string[];
};
import { useRouter } from "next/navigation";
const Form = ({ name, points }: TPlanForm) => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-2xl font-bold">Edit the post</h1>
      <form className="flex max-w-[20rem] flex-col gap-3">
        <input
          type="text"
          className="rounded-lg bg-[#c8e1e2] px-2 py-3"
          defaultValue={name}
        />
        {points.map((e, i) => (
          <textarea
            defaultValue={e}
            key={i}
            className="rounded-lg bg-[#c8e1e2] px-2 py-3"
          />
        ))}
        <button className="rounded-lg bg-green-600 p-2 text-white hover:bg-green-800">
          Apply the changes
        </button>
      </form>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
    </>
  );
};
export default Form;
