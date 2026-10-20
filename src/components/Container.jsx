function Container({ children, className = "" }) {
  return <div className={`max-w-334.5 mx-auto px-6 lg:px-29.25 ${className}`}>{children}</div>;
}

export default Container;
