"use client";

import { useSearchParams } from "next/navigation";
import Form from "../form";
type TPlanForm = {
  name: string;
  price: number;
  points: string[];
};
const FormPage = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const parseData: TPlanForm = data
    ? (JSON.parse(data) as TPlanForm)
    : {
        name: "",
        price: -1,
        points: [],
      };
  return (
    <Form
      name={parseData.name}
      points={parseData.points}
      price={parseData.price}
    />
  );
};

export default FormPage;
