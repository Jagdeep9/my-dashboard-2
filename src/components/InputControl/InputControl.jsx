import React from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {// this is ainput type module which is being used in both login and signup
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;