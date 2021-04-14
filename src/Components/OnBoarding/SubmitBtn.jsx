import React from "react";

const SubmitBtn = ({ text }) => (
    <div className="my-4 text-center">
    <button type="submit" className="form-btn text-white">
      {text}
    </button>
  </div>
);

export default SubmitBtn;
