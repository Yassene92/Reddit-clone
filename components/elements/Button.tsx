export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'ring-primary' | 'orange-btn';
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
        return 'bg-white border text-blackl hover:bg-gray-100';

      case 'ring-primary':
        return ' ring-1  hover:ring-blue-500  font-semibold border text-blue-500  rounded-full transition-all duration-300 ease-in-out ';

      case 'orange-btn':
        return 'bg-orange-700 hover:bg-orange-600 text-white ';

      default:
        return ' bg-blue-500 hover:bg-blue-600 font-semibold border border-blue-500 text-white rounded-full transition-all duration-300 ease-in-out';
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
{
  /**
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
    | 'orange'
    | 'purple'
    | 'red'
    | 'green'
    | 'blue'
    | 'gray';
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
        return 'bg-indigo-500 hover:bg-indigo-600 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white ';
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white ';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white ';
      case 'outline-danger':
        return 'bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-500  ';
      case 'outline-success':
        return 'bg-white text-green-500 border border-green-500 hover:text-white hover:bg-green-500  ';
      case 'outline-warning':
        return 'bg-white text-yellow-400 border border-yellow-500 hover:text-white hover:bg-yellow-500  ';
      case 'outline-primary':
        return 'bg-white text-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-500  ';
      case 'ring-primary':
        return 'ring-1 hover:ring-indigo-500 font-semibold border text-indigo-500 rounded-full transition duration-300 ease-in-out ';
      case 'orange':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'purple':
        return 'bg-purple-500 hover:bg-purple-600 text-white';
      case 'red':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'green':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'gray':
        return 'bg-gray-500 hover:bg-gray-600 text-white';

      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 ease-in-out';
    }
  };

  return (
    <button
      {...props}
      type={type}
      className={`
        ${getVariant()} transition duration-500 ${
        !circular && 'rounded-full'
      } active:scale-95 ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

*/
}
