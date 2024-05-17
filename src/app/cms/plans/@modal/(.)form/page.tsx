"use client";
import { useSearchParams } from "next/navigation";
import Modal from "~/app/_components/Modal";
import Form from "../../form";

type TPlanForm = {
  name: string;
  price: number;
  points: string[];
  id: number;
};

const FormModalPage = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const parseData: TPlanForm = data
    ? (JSON.parse(data) as TPlanForm)
    : {
        name: "",
        price: -1,
        points: [],
        id: -1,
      };
  return (
    <Modal>
      <Form
        name={parseData.name}
        points={parseData.points}
        price={parseData.price}
        id={parseData.id}
      />
    </Modal>
  );
};

export default FormModalPage;
