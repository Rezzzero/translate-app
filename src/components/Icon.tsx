export const Icon = ({ children }: { children: string }) => {
  return (
    <button className="p-[6px] border-3 border-[#464b61] rounded-xl">
      <img src={children} alt="icon" />
    </button>
  );
};
