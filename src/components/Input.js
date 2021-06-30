export default function Input({
  type,
  name,
  value,
  onChange,
  label_name,
  className,
}) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label_name}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
}
