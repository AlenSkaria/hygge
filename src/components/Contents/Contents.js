import React from "react";
import "./Contents.css";
import content from "../../jsons/category.json";
function Contents() {
  return (
    <div className="contents__main  classalen">
      <div className="contents__title">
        <h3>Browse by Category</h3>
      </div>
      <div className="category__alenmain">
        {content &&
          content.map((c) => {
            return (
              <div className="category__list" key={c.id}>
                <img className="category__icon" src={c.icon} alt="" />
                <p className="category__title">{c.title}</p>
              </div>
            );
          })}
      </div>
      <div className="contents__title">
        <h3>New Arrivals</h3>
      </div>
      <div className="newarrivals__main">
        {content &&
          content.map((a) => {
            return (
              <div className="newarrivals__list classalen" key={a.id}>
                <div className="newarrivals__img">
                  <img src={a.img} alt="" />
                  <p className={a.offer ? "offer__overlay" : ""}>
                    {a.offer && a.offer}
                  </p>
                </div>
                <p className="newarrivals__pname">{a.pname}</p>
                <div className="category__prices">
                  <p className="newarraivals__category">{a.title}</p>
                  <div className="newarrivals__prices">
                    <p className="newarrivals__rate">{a.rate && a.rate}</p>
                    <p className="newarrivals__price">
                      {a.ogprice && a.ogprice}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="newarraivals__button">
        <button className="newarrivals__viewmore">View All</button>
      </div>
    </div>
  );
}

export default Contents;
