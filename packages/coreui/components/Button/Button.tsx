interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }
  
  function Button({ children, ...props }: Props) {
    return <button {...props}>{children} 12345</button>;
  }
  
  export default Button;