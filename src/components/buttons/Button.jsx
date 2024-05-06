const Button = ({content, className, ...props}) => {
    return ( 
        <button className={className} {...props}>{content}</button>
    );
}
 
export default Button;