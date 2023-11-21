"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../styles/Bootstrap.module.css";
import { Shows } from "../media/page";

interface Props {
  show: Shows;
}

export default function BootstrapCarousel(props: Props) {
  const { show } = props;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <div>{show.title}</div>
      {Object.keys(show.photos).map(function (photoIndex) {
        var photo = show.photos[photoIndex];
        return (
          <Carousel.Item key={photo.id} interval={4000}>
            <img src={photo.src} alt="slides" />
            <Carousel.Caption>
              <h3>{photo.title}</h3>
              <button className="btn btn-danger">Visit Docs</button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      {/* {.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))} */}
    </Carousel>
  );
}
