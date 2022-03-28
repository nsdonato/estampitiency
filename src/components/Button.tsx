type Props = {
  onClick?: () => void;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  styles?: React.CSSProperties;
};

export const Button: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
};
