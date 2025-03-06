export const OutputComponent = ({ text }: { text: string | undefined }) => {
  return (
    <div className="w-full h-[170px] mb-3">
      <p>{text}</p>
    </div>
  );
};
