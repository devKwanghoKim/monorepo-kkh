interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
declare function Button({ children, ...props }: Props): import("react").JSX.Element;
export default Button;
