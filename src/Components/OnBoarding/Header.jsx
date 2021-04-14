import React from "react";

const Header = ({ text, a, href }) => (
  <div className="row">
    <div className="col-4 fs-1 blue-text fw-bold d-flex align-items-center justify-content-start">
      <span className="align-middle">Beeper</span>
    </div>
    <div className="col-8 fs-6 d-flex align-items-center justify-content-end">
      <span className="align-middle">
        {text}
        <a href={href}>{a}</a>
      </span>
    </div>
  </div>
);

export default Header;
