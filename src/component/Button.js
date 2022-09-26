function Button(props){
    console.log(props);
    return <button className={`btn ${props.otherclass}`}>{props.btnValue}</button>;
}
export default Button;