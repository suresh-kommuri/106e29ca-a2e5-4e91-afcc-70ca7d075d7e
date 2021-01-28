import React, { useRef, useState }  from "react";
import "./index.css";

export default function Calculator (props) {

  const [selectedOperator,setOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [count,setTotalOpearation] = useState(0);
  const inputRef = useRef({});

  const operate = (opt) => {

    let inputRef1 = parseInt(inputRef.current['input1'].value);
    let inputRef2 = parseInt(inputRef.current['input2'].value);
    let resultVal = "";

    setTotalOpearation(()=>{
      let optCount = count;
      return ++optCount;
    });
    
    setOperator(opt);

    if(opt == "+"){
      resultVal = inputRef1 + inputRef2;
      setResult(resultVal);
      return resultVal;
    }else if(opt == "-"){
      resultVal = inputRef1 - inputRef2;
      setResult(resultVal);
      return resultVal;
    }else if(opt == "*"){
      resultVal = inputRef1 * inputRef2;
      setResult(resultVal);
      return resultVal;
    }else if(opt == "/"){
      resultVal = inputRef1 / inputRef2;
      setResult(resultVal);
      return resultVal;
    }else{
      alert("Please select a valid operation!")
    }
  }

  const reset = () => {
    inputRef.current['input1'].value = null;
    inputRef.current['input2'].value = null;
    setResult(null);
    setOperator(null);
    setTotalOpearation(0);
  }

  // const add = () => {
  //   let a = operate("+");
  //   console.log(a)
  // };

  // const subtract = () => {
  //   let a = operate("-");
  //   console.log(a)
  // };

  // const multiply = () => {
  //   let a = operate("*");
  //   console.log(a)
  // };

  // const divide = () => {
  //   let a = operate("/");
  //   console.log(a)
  // };

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {count}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1" name="input1" ref={e => inputRef.current['input1'] = e}/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{selectedOperator}</label>
            <input type="number" ref={e => inputRef.current['input2'] = e} data-testid="app-input2" autoComplete="off" className="ml-3 mr-3" placeholder="Eg: 2" name="input2"/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" onClick={()=>{operate("+")}} type="submit" data-testid="addButton">+</button>
            <button className="operationFont" onClick={()=>{operate("-")}} type="submit" data-testid="subtractButton">-</button>
            <button className="operationFont" onClick={()=>{operate("*")}} type="submit" data-testid="multiplyButton">*</button>
            <button className="operationFont" onClick={()=>{operate("/")}} type="submit" data-testid="divideButton">/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" onClick={()=>{reset("reset")}} data-testid="resetButton" className="outline danger">Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div data-testid="result" className="result-value ma-0 slide-up-fade-in">{!result ? null : "Result: "+result }</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}