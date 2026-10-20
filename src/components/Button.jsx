// components/Button.jsx
import { Link } from "react-router";

const variants = {
  dark: "bg-[#111111] text-white hover:bg-black",
  outline: "border-[1.5px] border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white",
  orange: "bg-[#FF5F22] text-[#111111] hover:bg-[#e5541d]",
};

function Button({ variant = "dark", to, children, ...props }) {
  const className = `inline-block rounded-lg py-3.5 px-7 font-semibold text-base leading-6 text-center transition-colors ${variants[variant]}`;
  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
