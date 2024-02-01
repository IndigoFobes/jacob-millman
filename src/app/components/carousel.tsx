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
    <div className="">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {/* <div className="text-2xl text-center py-4">{show.title}</div> */}
        {Object.keys(show.photos).map(function (photoIndex) {
          var photo = show.photos[photoIndex];
          return (
            <Carousel.Item
              key={photo.id}
              className="max-h-[17rem] md:max-h-[50rem]"
              interval={null}
            >
              <div className="h-[20rem] md:h-[80vh] md:max-h-[80vh]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  key={photo.id}
                  width={1200}
                  height={500}
                />
              </div>
              {/* <Carousel.Caption>
                <h3>{photo.title}</h3>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
