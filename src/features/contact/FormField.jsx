function FormField({ label, htmlFor, required, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-medium text-sm leading-5 text-[#364153]">
        {label}
        {required && <span className="text-[#FB2C36]"> *</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default FormField;
