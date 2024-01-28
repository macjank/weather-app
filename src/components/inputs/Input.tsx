import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={twMerge(
        `outline outline-1 outline-borderPrimary focus:outline focus:outline-2 rounded-md px-4 py-3 text-sm text-textSecondary  disabled:text-textDisabled font-medium w-full placeholder:text-textDisabled`,
        className,
      )}
      {...props}
    />
  );
};
