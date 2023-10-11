let calculatorObject = {
operand1:null,
operand2: null,
operator :null,
sum: ()=>{this.operand1=this.operand1+this.operand2 ; return this.operand1},
diff :()=>{this.operand1=this.operand1-this.operand2 ; return this.operand1},
mul : ()=>{this.operand1=this.operand1*this.operand2 ; return this.operand1},
mod :()=>{this.operand1=this.operand1%this.operand2 ; return this.operand1},

operation : ()=>{
    switch(this.operator){
   case '+':
    return sum();
    break;
    case '-':
    return diff();
    break;
    case '*':
    return mul();
    break;
    case '%':
    return mod();
    break;
    case 'AC':
    this.operand1=null;
    this.operand2=null;
    this.operation=null;
    return undefined;
    break;
    default:
        return undefined;
    }
}

} 

let btnEventManager = {

    
}
