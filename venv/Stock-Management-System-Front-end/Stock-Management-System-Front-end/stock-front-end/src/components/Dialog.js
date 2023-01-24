import React from "react";
import { Dialog as Modal } from "primereact/dialog";
// import { AiOutlineFontSize } from "react-icons/ai";

const Dialog = ({ heading, children, trigger, prompt, open, setOpen }) => {
  const hide = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      {trigger ?? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block  bg-gray-50 text-green p-2 border rounded  w-full "
        >
          {prompt}
        </button>
      )}

      <Modal
        header={heading}
        visible={open ?? false}
        // style={{ width: "50vw" }}
        onHide={() => hide()}
        className="text-green w-4/5 lg:w-1/2 "
      >
        {children}
      </Modal>
    </div>
  );
};

export default Dialog;
