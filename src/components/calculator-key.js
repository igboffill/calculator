import { useDispatch } from "react-redux";
import { keyClick } from "../redux/actions";

function CalculatorKey({id=0, action=null, value=null, type=null, className=null, handleClick=null}){
    let myClassName = (type ? type : '') + (className ? (' ' + className) : '');
    const dispatch = useDispatch();
    
    return <button id={id} value={value} className={'key ' + myClassName} onClick={()=>{dispatch(keyClick(action, value))}}>{value}</button>
}

export default CalculatorKey;