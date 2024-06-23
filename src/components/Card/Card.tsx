import React from "react";
import "./Card.css"
export const Card: React.FC = ()=>{
    return <div className="card-container">
        <div className="card">
        <div className="card-front">
            front
        </div>

        <div className="card-back">
            back
        </div>

        </div>
    </div>
}