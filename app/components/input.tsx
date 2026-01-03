type Props = {
  title: string;
  className: string;
  placeholder: string;
  inputProps: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "capture" | "id" | "placeholder"
  > & {
    capture?: boolean | "user" | "environment";
  };
};

const AppInput = ({ className, title, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={title} className="block text-sm font-medium mb-2">
        {title}
      </label>
      <input
        id={title}
        placeholder={props.placeholder}
        className={`w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${className}`}
        {...props.inputProps}
      />
    </div>
  );
};

export default AppInput;
