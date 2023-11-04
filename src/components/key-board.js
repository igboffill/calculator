import { Keys } from "../keys";
import CalculatorKey from "./calculator-key";

function KeyBoard(){
    
    return <div className='keyboard'>{Keys.map(k=><CalculatorKey id={k.id} value={k.value} action={k.action} type={k.type}></CalculatorKey>)}</div>
}

export default KeyBoard;