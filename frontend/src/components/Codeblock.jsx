import React from "react";

import { useNavigate } from 'react-router-dom';
const Codeblock = ({ id_ ,assignment}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/coderoom/${id_}`);
  };

  return (
    <div className="card sm:w-60 md-lg:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">CodeRoom #{id_}</h2>
        <p>{assignment}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Enter room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Codeblock;
