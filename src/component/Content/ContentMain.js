import React from "react";
import carousel_1 from "../../images/carousel_1.jpg";
import carousel_2 from "../../images/carousel_2.jpg";
import carousel_3 from "../../images/carousel_3.jpg";
import carousel_4 from "../../images/carousel_4.jpg";
import carousel_5 from "../../images/carousel_5.jpg";
import carousel_6 from "../../images/carousel_6.jpg";
import carousel_7 from "../../images/carousel_7.jpg";
const ContentMain = (props) => {
  return (
    <main className="col-12 bg-info">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active w-100" style={{height: '500px'}}>
            <img src={carousel_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item w-100" style={{height: '500px'}}>
            <img src={carousel_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item w-100" style={{height: '500px'}}>
            <img src={carousel_3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item w-100" style={{height: '500px'}}>
            <img src={carousel_4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item w-100" style={{height: '500px'}}>
            <img src={carousel_5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item w-100" style={{height: '500px'}}>
            <img src={carousel_6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item w-100" style={{height: '500px'}}>
            <img src={carousel_7} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default ContentMain;
