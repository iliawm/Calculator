import { useEffect, useState } from "react";

function Calc() {
  const [calc, setCalc] = useState("");
  const [newcalc, setnewcalc] = useState();
  const [operator, setOperator] = useState("");
  const [themeindex, setThemeIndex] = useState(0);

  return (
    <div className="wholepage">
      <div className="CalcCont">
        <div className="conTop">
          <div className="Ttop">
            <h1 className="title">calc</h1>
            <div className="togglestyle">
              <h2 className="TextTHEME">THEME</h2>
              <button
                className="theme"
                onClick={() => {
                  const nextIndex = themeindex < 2 ? themeindex + 1 : 0;
                  setThemeIndex(nextIndex);
                  const background = document.querySelector(".wholepage");
                  const firstcont = document.querySelector(".Ttop");
                  const screen = document.querySelector(".Tbottom");
                  const screentext = document.querySelector(".calcfun");
                  const keypad = document.querySelector(".conBot");
                  const delbtn = document.querySelector("#btn-del");
                  const resetbtn = document.querySelector("#btn-reset");
                  const equalsbtn = document.querySelector("#btn-equals");
                  const keys = document.querySelectorAll(".btn");
                  const redball = document.querySelector(".redind");
                  if (nextIndex === 0) {
                    document.querySelector(".theme").classList.remove("end");
                    document.querySelector(".theme").classList.add("start");
                    background.style.animation =
                      "org 1s ease-in-out 0s 1 normal forwards";
                      keys.forEach((key) => {
                        key.style.backgroundColor = " hsl(0, 0%, 90%)";
                        key.style.color = "hsl(221, 14%, 31%)";
                    });
                    firstcont.style.color = "hsl(0, 100%, 100%)";
                    screen.style.backgroundColor = "hsl(224, 36%, 15%)";
                    screentext.style.color = "hsl(0, 100%, 100%)";
                    keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
                    delbtn.style.backgroundColor = "hsl(268, 47%, 21%)";
                    resetbtn.style.backgroundColor = "hsl(268, 47%, 21%) ";
                    redball.style.backgroundColor="hsl(6, 63%, 50%)"



                  } else if (nextIndex === 1) {
                    document.querySelector(".theme").classList.remove("start");
                    document.querySelector(".theme").classList.add("mid");
                    background.style.animation =
                      "one 1s ease-in-out 0s 1 normal forwards";
                    firstcont.style.color = "hsl(60, 10%, 19%)";
                    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
                    screentext.style.color = "hsl(60, 10%, 19%)";
                    keypad.style.backgroundColor = "hsl(0, 0%, 90%)";
                    delbtn.style.backgroundColor = " hsl(185, 42%, 37%)";
                    resetbtn.style.backgroundColor = " hsl(185, 42%, 37%)";
                    equalsbtn.style.backgroundColor = "  hsl(25, 98%, 40%)";
                  } else if (nextIndex === 2) {
                    document.querySelector(".theme").classList.remove("mid");
                    document.querySelector(".theme").classList.add("end");
                    background.style.animation =
                      "second 1s ease-in-out 0s 1 normal forwards";
                      keys.forEach((key) => {
                        key.style.backgroundColor = "hsl(281, 89%, 26%)";
                        key.style.color = "hsl(52, 100%, 62%)";
                    });
                    firstcont.style.color = "hsl(52, 100%, 62%)";
                    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
                    screentext.style.color = "hsl(52, 100%, 62%)";
                    keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
                    delbtn.style.backgroundColor = "hsl(268, 47%, 21%)";
                    resetbtn.style.backgroundColor = "hsl(268, 47%, 21%) ";
                    equalsbtn.style.backgroundColor = "hsl(176, 100%, 44%)";
                    redball.style.backgroundColor="hsl(176, 100%, 44%)";

                  }
                }}
              >
                <div className="redind"></div>
              </button>
            </div>
          </div>
          <div className="Tbottom">
            <h1 className="calcfun">{calc}</h1>
          </div>
        </div>
        <div className="conBot">
          <button
            className="btn"
            id="btn-7"
            onClick={() => {
              setCalc(calc + "7");
            }}
          >
            7
          </button>

          <button
            className="btn"
            id="btn-8"
            onClick={() => {
              setCalc(calc + "8");
            }}
          >
            8
          </button>

          <button
            className="btn"
            id="btn-9"
            onClick={() => {
              setCalc(calc + "9");
            }}
          >
            9
          </button>

          <button
            className="btn"
            id="btn-del"
            onClick={() => {
              setCalc(calc.slice(0, -1));
            }}
          >
            DEL
          </button>

          <button
            className="btn"
            id="btn-4"
            onClick={() => {
              setCalc(calc + "4");
            }}
          >
            4
          </button>

          <button
            className="btn"
            id="btn-5"
            onClick={() => {
              setCalc(calc + "5");
            }}
          >
            5
          </button>

          <button
            className="btn"
            id="btn-6"
            onClick={() => {
              setCalc(calc + "6");
            }}
          >
            6
          </button>

          <button
            className="btn"
            id="btn-plus"
            onClick={() => {
              setOperator("+");
              Number(calc) ? setnewcalc(Number(calc)) + setCalc("") : null;
            }}
          >
            +
          </button>

          <button
            className="btn"
            id="btn-1"
            onClick={() => {
              setCalc(calc + "1");
            }}
          >
            1
          </button>

          <button
            className="btn"
            id="btn-2"
            onClick={() => {
              setCalc(calc + "2");
            }}
          >
            2
          </button>

          <button
            className="btn"
            id="btn-3"
            onClick={() => {
              setCalc(calc + "3");
            }}
          >
            3
          </button>

          <button
            className="btn"
            id="btn-minus"
            onClick={() => {
              setOperator("-");
              Number(calc) ? setnewcalc(Number(calc)) + setCalc("") : null;
            }}
          >
            -
          </button>

          <button
            className="btn"
            id="btn-dot"
            onClick={() => {
              if (calc.includes(".")) {
                null;
              } else {
                setCalc(calc + ".");
              }
            }}
          >
            .
          </button>

          <button
            className="btn"
            id="btn-0"
            onClick={() => {
              setCalc(calc + "0");
            }}
          >
            0
          </button>

          <button
            className="btn"
            id="btn-divide"
            onClick={() => {
              setOperator("/");
              Number(calc) ? setnewcalc(Number(calc)) + setCalc("") : null;
            }}
          >
            /
          </button>

          <button
            className="btn"
            id="btn-multiply"
            onClick={() => {
              setOperator("*");
              Number(calc) ? setnewcalc(Number(calc)) + setCalc("") : null;
            }}
          >
            x
          </button>

          <button
            className="btn"
            id="btn-reset"
            onClick={() => {
              setCalc("");
              setOperator("");
            }}
          >
            RESET
          </button>

          <button
            className="btn"
            id="btn-equals"
            onClick={() => {
              if (operator === "+") {
                setCalc(Number(newcalc) + Number(calc));
              } else if (operator === "-") {
                setCalc(Number(newcalc) - Number(calc));
              } else if (operator === "*") {
                setCalc(Number(newcalc) * Number(calc));
              } else if (operator === "/") {
                setCalc(Number(newcalc / Number(calc)).toFixed(2));
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calc;
