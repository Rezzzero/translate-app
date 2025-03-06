export const InputComponent = ({
  text,
  onChange,
}: {
  text: string | undefined;
  onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}) => {
  return (
    <div className="w-full h-[170px] relative">
      <input
        type="text"
        placeholder=""
        className="w-full outline-none"
        onChange={onChange}
        value={text}
      />
      <p className="absolute bottom-2 right-2 text-gray-300 text-xs">
        {text?.length}/500
      </p>
    </div>
  );
};
