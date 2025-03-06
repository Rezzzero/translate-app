export const Icon = ({ children }: { children: string }) => {
  return (
    <button className="mt-auto p-[6px] max-h-[36px] border-3 border-[#464b61] rounded-xl">
      <img src={children} alt="icon" />
    </button>
  );
};
