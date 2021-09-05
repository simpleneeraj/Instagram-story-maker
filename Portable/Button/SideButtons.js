import React from "react";
import css from "../styles/SideButtons.module.scss";
import {
  Arrow_Right_Icon as Right,
  Arrow_Left_Icon as Left,
} from "../Constent/Icons";

const SideButtons = () => {
  return (
    <>
      <div className={css.NextPreButtons}>
        <div>
          <button>
            <Left />
          </button>
          <button>
            <Right />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideButtons;
