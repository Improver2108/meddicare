const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 z-[22] my-0 flex h-screen w-screen flex-col items-center justify-center bg-black/[.54]">
      <div className="z-[40] flex flex-col items-center justify-center gap-3 rounded-lg bg-white px-7 py-5">
        {children}
      </div>
    </div>
  );
};

export default Modal;
