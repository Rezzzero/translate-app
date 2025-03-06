export interface TranslateFormProps {
  isInput: boolean;
  inputText?: string;
  outputText?: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetTranslated?: () => void;
}
