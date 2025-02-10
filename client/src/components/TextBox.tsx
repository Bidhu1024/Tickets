import { Stack, TextField, Typography } from "@mui/material";
import { FC, memo } from "react";
interface TextBoxProps {
  title: string;
  onChange: (val: string) => void;
  value: string;
  placeholder: string;
  type: string;
  error?: boolean;
  helperText?: string | boolean | undefined;
}
const TextBox: FC<TextBoxProps> = ({
  error,
  helperText,
  type,
  title,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <Stack sx={{ gap: ".4rem", mt: "2.5rem" }}>
      <Typography>{title}</Typography>
      <TextField
        sx={{ height: "1rem", width: "20rem", borderRadius: "5px" }}
        value={value}
        placeholder={placeholder}
        type={type}
        size="small"
        error={error}
        helperText={helperText}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChange(e.target.value as string)}
      />
    </Stack>
  );
};

export default memo(TextBox);
