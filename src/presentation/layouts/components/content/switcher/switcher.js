import { Component } from "react";
import { useState } from "react";
import Style from "./switcher.module.scss";
import { changeTheme, themes , changecolor,color2,color3, color4, color5} from "../../../../../logic/shared/theming";
function Switcher() {
  const [styleSwitcher, setstyleSwitcher] = useState(false);
  const [sicon, setSicon] = useState(false);
  const [green, setgreen] = useState(false);
  const [orange , setorange] = useState(false);
  const [red,setred] = useState(false);
  const [blue,setblue] = useState(false);
  const [pink,setpink] = useState(false);
  const [isDark, setTheme] = useState(false);

  function handleclick() {
    setstyleSwitcher((styleSwitcher) => !styleSwitcher);
    setSicon((sicon) => !sicon);
  }

  function daynight() {
    setTheme(!isDark);
    changeTheme(isDark ? "lightTheme" : "darkTheme");
  }

  function colors (){
    setgreen(!green);
    changecolor("greenThem")
  }

  function colors2(){
    setorange(!orange);
    color2("orangeThem")
  }
  function colors3(){
    setred(!red);
    color3("redThem")
  }
  function colors4(){
    setblue(!blue);
    color4("blueThem")
  }
  function colors5(){
    setpink(!pink);
    color5("pinkThem")
  }

  return (
    <div className={Style.switcherContainer}>
      <div className={`${Style.sicon}`}>
        <i className={`Style.fas fa-cog fa-spin`}>
          <button
            onClick={handleclick}
            className={`${Style.buttonSwitcher} ${Style.sicon} ${
              sicon ? Style.sicon2 : Style.sicon3
            }`}
          >
            <span className={Style.gear}>colors theme</span>
          </button>
        </i>
        <button
          onClick={daynight}
          className={`${Style.sicon} ${Style.buttonSwitcher2} ${Style.sicon} ${
            sicon ? Style.sicon2 : Style.sicon3
          } `}
        >
          <span className={Style.daynight}>mode</span>
        </button>
      </div>
      <div
        className={`${Style.styleSwitcher} ${
          styleSwitcher ? Style.open : Style.by
        }`}
      >
        <h4>theme colors</h4>
        <div className="colors">
          <span
            className={`${Style.color3} ${Style.spn}`}
            onClick={colors}
          ></span>
          <span
            className={`${Style.color2 } ${Style.spn}`}
            onClick={colors2}
          ></span>
          <span
            className={`${Style.color1} ${Style.spn}`}
            onClick={colors3}
          ></span>
          <span
            className={`${Style.color4} ${Style.spn}`}
            onClick={colors4}
          ></span>
          <span
            className={`${Style.color5} ${Style.spn}`}
            onClick={colors5}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Switcher;
