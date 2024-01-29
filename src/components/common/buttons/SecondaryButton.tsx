interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const SecondaryButton = ({ className = '', children, ...props }: SecondaryButtonProps) => {
  return (
    <button className={`border border-borderPrimary px-4 py-2 text-sm rounded-2xl ${className}`} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
