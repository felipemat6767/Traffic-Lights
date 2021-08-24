import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
export const Semaforocuerpo = (props) => {

const [Color, setColor] = useState("false");

return  (
        <div className ="Trafficcuerpo bg-dark mx-auto d-flex flex-column justify-content-evenly align-items-center" style ={{width: "10rem", height: "20rem"}}> 
          <div 
          onClick={() => setColor("red")}
          className = {"bg-danger" + (Color === "red" ? " sombra" : "")} style ={{width: "8rem", height: "6rem", borderRadius: "50%"}} > 
          </div>


          <div 
          onClick={() => setColor("yellow")}
          className ={"bg-warning" + (Color === "yellow" ? " sombra" : "")} style ={{width: "8rem", height: "6rem", borderRadius: "50%"}}>
          </div>

          <div 
           onClick={() => setColor("green")}
           className ={"bg-success" + (Color === "green" ? " sombra" : "")}
          style ={{width: "8rem", height: "6rem", borderRadius: "50%"}}>
          </div>
        </div>
        
        );
}