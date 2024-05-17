"use client";
import { FaMinusCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";

type TFromProp = {
  name: string;
  price: number;
  points: string[];
  id: number;
};

type TPlanForm = {
  name: string;
  price: number;
  points: string[];
};

const Form = ({ name, price, points, id }: TFromProp) => {
  const [pointsInput, setPointsInput] = useState<number>(
    Math.max(points.length, 1),
  );
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TPlanForm>();
  const setPlan = api.plan.post.useMutation();
  const updatePlan = api.plan.update.useMutation();

  const handlePointDelete = (i: number) => {
    if (i > points.length - 1) {
      setPointsInput((prev) => prev - 1);
      return;
    }
  };

  const handleFormSubmit = (formData: TPlanForm) => {
    console.log(formData);
    if (id !== -1) {
      updatePlan.mutate({
        ...formData,
        price: Number(formData.price),
        id: id,
      });
      return;
    }
    setPlan.mutate({
      ...formData,
      price: Number(formData.price),
    });
    console.log("plan posted!!!");
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Edit the post</h1>
      <form
        className="flex max-w-[20rem] flex-col gap-3"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter the Plan name"
          className="rounded-lg bg-[#c8e1e2] px-2 py-3"
          defaultValue={name}
          required
          {...register(`name`, { required: true })}
        />
        <input
          type="number"
          placeholder="Enter the Plan Price"
          className="rounded-lg bg-[#c8e1e2] px-2 py-3"
          min={0}
          defaultValue={price !== -1 ? price : NaN}
          required
          {...register(`price`, { required: true })}
        />
        {[...Array<null>(pointsInput)].map((e, i) => (
          <div className="flex items-center gap-3" key={i}>
            <textarea
              placeholder="Enter the point"
              className="rounded-lg bg-[#c8e1e2] px-2 py-3"
              defaultValue={points[i]}
              required
              {...register(`points.${i}`, { required: true })}
            />
            <button
              type="button"
              onClick={(e) => i > 0 && handlePointDelete(i)}
            >
              <FaMinusCircle color="red" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            pointsInput < 5
              ? setPointsInput((prev) => prev + 1)
              : console.log("cant add more button")
          }
        >
          Add more button
        </button>
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
