"use client";
import { useRouter } from "next/navigation";
const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-[20] flex h-screen w-screen flex-col items-center justify-center bg-black/[.54] text-white">
      {children}
      <button
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Modal;
