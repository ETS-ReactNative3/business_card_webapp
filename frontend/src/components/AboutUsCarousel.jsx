import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import matt from "../assets/matthew.png";
import ryan from "../assets/ryan.png";
import eldrin from "../assets/eldrin.png";
import jon from "../assets/jon.png";
//import { autocompleteClasses, formHelperTextClasses } from "@mui/material";

function ControlledCarousel() {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <div style={{
         display: 'block',
         //width: 100,
         padding: 30,
      }} class="rounded">
         <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={matt}
                  alt="Matthew Alcasabas"
               />
               <Carousel.Caption>
                  <h3>Matthew Alcasabas</h3>
                  <p>I made this page and i have a massive penis</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={ryan}
                  alt="Ryan Peji"
               />

               <Carousel.Caption>
                  <h3>Ryan Peji</h3>
                  <p>Had sexual intercourse with your mother</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={eldrin}
                  alt="Eldrin Pile"
               />

               <Carousel.Caption>
                  <h3>Eldrin Pile</h3>
                  <p>
                     Based
          </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={jon}
                  alt="Jonathan Nickalus Galon"
               />

               <Carousel.Caption>
                  <h3>Jonathan Nickalus Galon</h3>
                  <p>
                     React specialist. Also had sexual intercourse with your mother
          </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div >
   );
}

//render(<ControlledCarousel />);

export default ControlledCarousel;