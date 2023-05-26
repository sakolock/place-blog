import { classNames } from'../../utils/index';
export const getButtonClasses = (className, reverse) => {
  return classNames(
    "block py-2 rounded-md opacity-80 hover:opacity-100 transition-all",
    reverse ? "bg-transparent underline px-0 text-blue-600" : " px-5 bg-blue-600 text-white",
    className
  )
}

export default function Button(props) {
  const {children, onClick, className, reverse = false, type } = props;
  return (
    <button
      className={getButtonClasses(className, reverse)}
      type={type}
      onClick={onClick}>{children}
    </button>
  )
}
