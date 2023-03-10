import React from "react";
import Sdata from "./Sdata";
import "./index.css";
function Card() {
  return (
    <>
    <h1 className="heading_style"> List of top Netflix Series </h1>
      <div className="cards">
      <div className="cards_container">
        {
          Sdata.map((props , index) => {
            return (
              <div className="card" key={index}>
                <img src={props.imgsrc} alt="mypic" className="card_img" />
                <div className="card_info">
                  <span className="card_category"> {props.title} </span>
                  <h3 className="card_title"> {props.sname} </h3>
                  <a href={props.links} target="_blank">
                    <button> Watch Now </button>
                  </a>
                </div>
              </div>
            
            )
          })
        }
        </div>
      </div>
    </>
  );
}


export default Card;