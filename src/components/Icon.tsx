export const Icon = ({
  children,
  handleClick,
}: {
  children: string;
  handleClick?: (() => void) | undefined;
}) => {
  return (
    <button
      onClick={handleClick}
      className="mt-auto p-[6px] max-h-[36px] border-3 border-[#464b61] rounded-xl cursor-pointer"
    >
      <img src={children} alt="icon" />
    </button>
  );
};
