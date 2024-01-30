"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Shows } from "../media/page";

interface Props {
  show: Shows;
}

export default function BootstrapCarousel(props: Props) {
  const { show } = props;

  const [index, setIndex] = useState(1);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // console.log(show.photos);
  };
  return (
    <div className="h-1/2">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* <div className="text-2xl text-center py-4">{show.title}</div> */}
        {Object.keys(show.photos).map(function (photoIndex) {
          var photo = show.photos[photoIndex];
          return (
            <Carousel.Item key={photo.id} interval={4000} className="">
              <div className="">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  key={photo.id}
                  width={1200}
                  height={1000}
                />
              </div>
              <Carousel.Caption>
                <h3>{photo.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
