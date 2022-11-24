import React from "react";
import "./style.css";
export const MovieComponent = ({ title, description, linkVideo, imageUrl }) => {
  return (
    <div class="card myCard">
      <img src={imageUrl} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={linkVideo} target="_blank" class="btn btn-primary">
          Watch Movie
        </a>
      </div>
    </div>
  );
};
