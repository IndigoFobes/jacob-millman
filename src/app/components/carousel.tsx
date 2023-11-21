"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
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
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
