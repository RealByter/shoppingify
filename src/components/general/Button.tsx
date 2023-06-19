import Ripple from "./Ripple";

interface Props {
  color?: string;
  textColor?: string;
  rippleColor?: string;
  rippleDuration?: number;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?(): any;
}

const Button: React.FC<Props> = ({
  color,
  textColor,
  rippleColor,
  rippleDuration,
  disabled,
  type,
  onClick,
  children,
}) => (
  <button
    disabled={disabled}
    type={type ? type : "button"}
    onClick={onClick}
    className={`${
      textColor ? textColor : "text-white"
    } relative overflow-hidden rounded-xl px-6 py-5 text-base font-bold ${
      color ? color : "bg-primary"
    }`}
  >
    {children}
    <Ripple
      duration={rippleDuration ? rippleDuration : 750}
      color={rippleColor ? rippleColor : "#FFF0DE"}
    />
  </button>
);

export default Button;
