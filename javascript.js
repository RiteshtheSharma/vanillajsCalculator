let calculatorObject = {
  operand1: null,
  operand2: null,
  operator: null,
  sum: function () {
    this.operand1 = this.operand1 + this.operand2;
    return this.operand1;
  },
  diff: function () {
    this.operand1 = this.operand1 - this.operand2;
    return this.operand1;
  },
  mul: function () {
    this.operand1 = this.operand1 * this.operand2;
    return this.operand1;
  },
  mod: function () {
    this.operand1 = this.operand1 % this.operand2;
    return this.operand1;
  },
  div: function () {
    this.operand1 = this.operand1 / this.operand2;
    return this.operand1;
  },
  destruct: function () {
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;
  },
  operation: function () {
    let result;
    switch (this.operator) {
      case "+":
        result = this.sum();
        break;
      case "-":
        result = this.diff();
        break;
      case "*":
        result = this.mul();
        break;
      case "%":
        result = this.mod();
        break;
      case "/":
        result = this.div();
        break;

      default:
        break;
    }
    
    return result;
  },
};
let Display = "0";
let nextOperator=null;
const MAX_PRECISION = 9;
const MAX_Integer_DIGITS = 15;
const isNumber = (str) =>
  Number(str) <= Number.MAX_SAFE_INTEGER && str.split('.')[0].length <=MAX_Integer_DIGITS;
const maintainMaxPrecision =(str)=>{
if(str.indexOf('.') >-1 && str.split('.')[1].length >MAX_PRECISION)
return str.split('.')[0]+'.'+str.split('.')[1].slice(0,9);
return str
}  
const DisplayOnConsole = (display) => {
  if (display === "Infinity" || display === "NaN") {
    document.querySelector(".display").textContent = "Math Error";
    return "0";
  } else document.querySelector(".display").textContent = display;
  return display;
};
const Calculate = () => {
  calculatorObject.operand2 = Number(Display);
  calculatorObject.operation();
  calculatorObject.operator = "=";
  Display = "" + calculatorObject.operation();
  Display = DisplayOnConsole(Display);
};
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
      
        if (isNumber(Display + e.target.textContent)) {  
          Display = maintainMaxPrecision((Display === "0" ? "" : Display) + e.target.textContent);
          DisplayOnConsole(Display);
        }
      
        break;
      case ".":
        Display = Display + (Display.indexOf(".") === -1 ? "." : "");
        DisplayOnConsole(Display);
        break;
      case "AC":
        Display = "0";
        DisplayOnConsole(Display);
        calculatorObject.destruct();
        nextOperator=null;
        break;

      case "DEL":
        if (Display !== "0" || Display.length > 0) {
          Display = Display.slice(0, -1);
          if (Display.length === 0) Display = "0";
        }
        DisplayOnConsole(Display);
        break;

      case "+/-":
        Display =
          Display[0] === "-"
            ? Display.slice(1)
            : Display === "0"
            ? "0"
            : "-" + Display;
        DisplayOnConsole(Display);
        break;
      case "=":
        if(nextOperator)
        {calculatorObject.operator= nextOperator;
        calculatorObject.operand2 = Number(Display);
        Display = "" + calculatorObject.operation();
        Display = DisplayOnConsole(Display);
        nextOperator = null;}
       
        break;
      case "%":
      case "/":
      case "*":
      case "-":
      case "+":
        if (nextOperator!== null) {
          calculatorObject.operator= nextOperator;
          calculatorObject.operand2 = Number(Display);
          Display = ""+calculatorObject.operation();
          nextOperator = e.target.textContent;
           DisplayOnConsole(Display);
           Display="0";
        } else {
          nextOperator = e.target.textContent;
          calculatorObject.operand1 = Number(Display);
          Display = "0";
        }
        break;
    }
  }
});
