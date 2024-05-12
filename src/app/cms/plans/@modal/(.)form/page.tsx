"use client";
import { useSearchParams } from "next/navigation";
import Modal from "~/app/_components/Modal";
import Form from "../../form";

type TPlanForm = {
  name: string;
  points: string[];
};

const FormModalPage = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const parseData: TPlanForm = data
    ? (JSON.parse(data) as TPlanForm)
    : {
        name: "",
        points: [],
      };
  return (
    <Modal>
      <Form name={parseData.name} points={parseData.points} />
    </Modal>
  );
};

export default FormModalPage;
