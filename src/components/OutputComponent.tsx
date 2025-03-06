export const OutputComponent = ({ text }: { text: string | undefined }) => {
  return (
    <div className="w-full h-[160px]">
      <p>{text}</p>
    </div>
  );
};
