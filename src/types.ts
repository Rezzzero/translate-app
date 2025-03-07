export interface TranslateFormProps {
  isInput: boolean;
  inputText?: string;
  outputText?: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetTranslated?: () => void;
  translateFrom?: string;
  translateTo?: string;
  handleSwitchLanguages?: () => void;
  handleSelectLanguage: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SelectLanguageProps {
  isInput: boolean;
  translateFrom?: string;
  translateTo?: string;
  handleSwitchLanguages?: () => void;
  handleSelectLanguage: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
