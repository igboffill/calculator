import { CLEAR, DECIMAL, DIGIT, EQUEALS, OPERATOR } from "./redux/actions";

export const Keys=[
    {id:'seven', value:'7', type:'digit', action:DIGIT},
    {id:'eight', value:'8', type:'digit', action:DIGIT},
    {id:'nine', value:'9', type:'digit', action:DIGIT},
    {id:'clear', value:'AC', type:'function', action:CLEAR},
    {id:'four', value:'4', type:'digit', action:DIGIT},
    {id:'five', value:'5', type:'digit', action:DIGIT},
    {id:'six', value:'6', type:'digit', action:DIGIT},
    {id:'multiply', value:'×', type:'operator', action:OPERATOR},
    {id:'divide', value:'÷', type:'operator', action:OPERATOR},
    {id:'one', value:'1', type:'digit', action:DIGIT},
    {id:'two', value:'2', type:'digit', action:DIGIT},
    {id:'three', value:'3', type:'digit', action:DIGIT},
    {id:'add', value:'+', type:'operator', action:OPERATOR},
    {id:'subtract', value:'-', type:'operator', action:OPERATOR},
    {id:'zero', value:'0', type:'digit', action:DIGIT},
    {id:'decimal', value:'.', type:'digit', action:DECIMAL},
    {id:'equals', value:'=', type:'operator', action:EQUEALS},
];