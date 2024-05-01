import React from "react";
import { Data } from "../controllers.js/data";
import Card from "../component/Card";

const Home = () => {
  return (
    <div className="Main-container">
      <div className="row space-between">
        {Data.map((item, index) => {

          return  <Card
            title={item.title}
            details={item.details}
            b_title={item.b_title}
            imgUrl={item.imgUrl}
          />   
        })}
        </div>
  
    </div>
  );
};

export default Home;


