export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?:
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-success'
    | 'outline-primary'
    | 'ring-primary'
    | 'orange-btn';
  circular?: boolean;
  paddingLess?: boolean;
}
const Button = ({
  className,
  children,
  variant,
  circular,
  paddingLess,
  type = 'button',
  ...props
}: IButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case 'primary':
        return 'bg-violet-500 hover:bg-violet-700 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-700 text-white ';
      case 'success':
        return 'bg-green-500 hover:bg-green-700 text-white ';
      case 'warning':
        return 'bg-amber-500 hover:bg-amber-700 text-white ';
      case 'outline-danger':
        return 'bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ';
      case 'outline-danger':
        return 'bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ';
      case 'outline-success':
        return 'bg-white text-green-500 border border-green-500 hover:text-white hover:bg-green-700  ';
      case 'outline-warning':
        return 'bg-white text-amber-400 border border-amber-500 hover:text-white hover:bg-amber-500  ';
      case 'outline-primary':
        return 'bg-white text-violet-500 border border-violet-500 hover:text-white hover:bg-violet-700  ';
      case 'ring-primary':
        return ' ring-1  hover:ring-blue-500  font-semi-bold  border-solid  text-blue-500   rounded-5xl ';
      case 'orange-btn':
        return 'bg-orange-700 hover:bg-orange-600 text-white ';

      default:
        return 'bg-blue-500 hover:bg-blue-600 font-semi-bold border-solid text-white rounded-5xl';
    }
  };
  return (
    <button
      {...props}
      type={type}
      className={`
 
        ${getVariant()}  transition duration-500    ${
        !circular && 'rounded-full'
      } active:scale-95 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
