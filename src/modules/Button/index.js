import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, className, variant }) => {
  return (
    <button
      className={
        variant === "light"
          ? `pa12 pa16-ns br-pill mt12 fw6 f16 ${styles.button} ${
              styles.light
            } ${className}`
          : `pa12 pa16-ns br-pill mt12 fw6 f16 ${styles.button} ${className} `
      }
    >
      {label}
    </button>
  );
};

export default Button;
