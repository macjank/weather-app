import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={twMerge(
        `outline outline-1 outline-borderPrimary bg-inherit focus:outline focus:outline-2 rounded-2xl px-4 py-3 text-sm text-textPrimary  disabled:text-textDisabled font-medium w-full placeholder:text-textDisabled`,
        className,
      )}
      {...props}
    />
  );
};
