import React from "react";

const renderBody= (body)=>{
  if(body!= ""){
    return(<div className="col-md-6 col-lg-4">
    <p className="text-center fs-6">{body}</p>
  </div>);
  }
  else{
    return("");
  }
}

const Title = ({ title, body }) => (
  <div className="row my-3 d-flex justify-content-center">
    <div className="col-12">
      <h1 className="display-5 fw-bold text-center blue-text">{title}</h1>
    </div>
    {renderBody(body)}    
  </div>
);

export default Title;
