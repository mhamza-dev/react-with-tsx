interface ButtonProps {
    type?: string
    children: string
}
 
const Button = ({ type = "primary", children }: ButtonProps) => {
  return (
    <>
      <button className={`btn btn-${type}`}>{children}</button>
    </>
  );
};
 
export default Button;