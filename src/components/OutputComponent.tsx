export const OutputComponent = ({ text }: { text: string | undefined }) => {
  return (
    <div className="w-full h-[170px]">
      <p>{text}</p>
    </div>
  );
};
