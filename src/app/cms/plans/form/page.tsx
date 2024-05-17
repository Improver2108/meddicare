"use client";

import { useSearchParams } from "next/navigation";
import Form from "../form";
type TPlanForm = {
  name: string;
  price: number;
  points: string[];
  highlight: string;
  id: number;
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
        id: -1,
        highlight: "",
      };
  return (
    <Form
      name={parseData.name}
      points={parseData.points}
      price={parseData.price}
      id={parseData.id}
      highlight={parseData.highlight}
    />
  );
};

export default FormPage;
