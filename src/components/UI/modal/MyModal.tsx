import React, { Dispatch } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  visible: boolean;
  setVisible: Dispatch<boolean>;
};

const MyModal = ({ children, visible, setVisible }: Props) => {
  const classes: string[] = ["modal_container"];

  if (visible) {
    classes.push("modal_active");
  }

  return (
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="close_modal" onClick={() => setVisible(false)}>
          <p>+</p>
        </button>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
