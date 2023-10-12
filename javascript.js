let calculatorObject = {
  operand1: null,
  operand2: null,
  operator: null,
  sum: function() {
    this.operand1 = this.operand1 + this.operand2;
    return this.operand1;
  },
  diff: function(){
    this.operand1 = this.operand1 - this.operand2;
    return this.operand1;
  },
  mul: function() {
    this.operand1 = this.operand1 * this.operand2;
    return this.operand1;
  },
  mod: function() {
    this.operand1 = this.operand1 % this.operand2;
    return this.operand1;
  },
  div: function() {
    this.operand1 = this.operand1 / this.operand2;
    return this.operand1;
  },
  destruct: function() {
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;
  },
  operation: function()  {
    switch (this.operator) {
      case "+":
        return this.sum();
        break;
      case "-":
        return this.diff();
        break;
      case "*":
        return this.mul();
        break;
      case "%":
        return this.mod();
        break;
        case "/":
            return this.div();
            break;
      case "AC":
        this.destruct();
        break;
      case "=":
        return this.operand1;
        break;
      default:
        break;
    }
  },
  isArithmetic:function(){
     return '+-/%*'.indexOf(this .operator) > -1;
  }
};
let Display = "0";

const isNumber = (str) => Number(str) <= Number.MAX_SAFE_INTEGER &&
(Display.indexOf(".") === -1 ||
  (Display +e.target.textContent).split(".")[1].length <= 9);
const DisplayOnConsole = (display) => {
    if(display ==="Infinity" || display ==="NaN")
    {document.querySelector(".display").textContent = "Math Error"
return "0"}
    else 
  document.querySelector(".display").textContent = display;
return display;
};
const Calculate = ()=>{
    calculatorObject.operand2 = Number(Display);
    calculatorObject.operation();
    calculatorObject.operator = "=";
    Display = "" + calculatorObject.operation();
    Display=DisplayOnConsole(Display);
}
document.querySelector(".container.f-r").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_display")) {
    switch (e.target.textContent) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
       
        if(calculatorObject.isArithmetic() )
        Display='0';

        if (
          isNumber(Display + e.target.textContent) 
        ) {
          Display = (Display === "0" ? "" : Display) + e.target.textContent;
          DisplayOnConsole(Display);
        }
        
        break;
      case ".":
        Display = Display + (Display.indexOf(".") === -1 ? "." : "");
        DisplayOnConsole(Display);
        break;
      case "AC":
        calculatorObject.operator = "AC";
        calculatorObject.operation();
        Display = "0";
        DisplayOnConsole(Display);
        calculatorObject.destruct();
        break;

      case "DEL":
        if (Display !== "0" || Display.length > 0)
          {Display = Display.slice(0, -1);
         if(Display.length ===0) Display="0";}
        DisplayOnConsole(Display);
        break;

      case "+/-":
        Display = Display[0] === "-" ? Display.slice(1) : ((Display==='0')?"0":"-" + Display);
        DisplayOnConsole(Display);
        break;
      case "=":
        calculatorObject.operand2 = Number(Display);
        calculatorObject.operation();
        calculatorObject.operator = "=";
        Display = "" + calculatorObject.operation();
        Display=DisplayOnConsole(Display);
      case "%":
      case "/":
      case "*":
      case "-":
      case "+":
        if(calculatorObject.isArithmetic())
        {calculatorObject.operand2 = Number(Display);
            Display=calculatorObject.operation();
        calculatorObject.operator = "=";
        Display=DisplayOnConsole(Display);}
        calculatorObject.operator = e.target.textContent;
        calculatorObject.operand1 = Number(Display);
    }
  }
});
