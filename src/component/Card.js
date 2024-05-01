import React from "react";
const Card = (props) => {
    return (
      <div className="card" style={{ width: "20rem", padding: 10, margin: 10 }}>
        <img src={`${props.imgUrl}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.details}</p>
          <a href="/#" className="btn btn-primary">
            {props.b_title}
          </a>
        </div>
      </div>
    );
  };

  export default Card;