import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import matt from "../assets/matthew.jpg";
import ryan from "../assets/ryan.png";
import eldrin from "../assets/eldrin.png";
import jon from "../assets/jon.jpg";
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
         backgroundColor: "#36393F",
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
                  <p>Frontend Developer | UX/UI Designer</p>
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
                  <p>Senior Staff Full-Stack Engineer | Project Manager</p>
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
                     Full Stack Engineer
          </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={jon}
                  alt="Jonathan Galon"
               />

               <Carousel.Caption>
                  <h3>Jonathan Galon</h3>
                  <p>
                     Frontend Engineer
          </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div >
   );
}

//render(<ControlledCarousel />);

export default ControlledCarousel;