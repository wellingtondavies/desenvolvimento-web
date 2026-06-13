import "../styles/button.css";

interface IButtonProps {
  text: string;
  secondary?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  text,
  secondary,
  disabled = false,
  type = "button",
  onClick,
}: IButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={secondary ? "btn-secondary" : "btn-primary"}
    >
      {text}
    </button>
  );
}