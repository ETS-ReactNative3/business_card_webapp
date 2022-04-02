import React, { useState } from 'react'
import { css, cx } from "@emotion/css"

const Quote = () => {

   const quotes = {
      0: {
         client: "Jeff",
         quote: "Super easy to use! Team was super friendly when I reached out through their contact form!"
      },
      1: {
         client: "Bob",
         quote: "Loved it. Made marketing super easy for my small business!"
      },
      2: {
         client: "Nancy",
         quote: "Extremely convenient AND free? Sign me up!"
      },
      3: {
         client: "Jill",
         quote: "Just what I needed for my new position at work."
      }
   }

   const [current, setCurrent] = useState(quotes[0]);

   const [active, setActive] = useState(0);

   const handleSetClick = (event) => {
      setCurrent(quotes[event.target.getAttribute("data-quote")])
      setActive(event.target.getAttribute("data-quote"))
   }

   return (
      <div
         className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px auto;
            max-width: 700px;

            p {
               text-align: center;
               margin-bottom: 20px;
               color: #45454d;
            }
         `}
      >
         <p>{current.quote}</p>
         <p>{current.client}</p>
         <div
            className={css`
               display: flex;

               span {
                  height: 20px;
                  width: 20px;
                  margin: 0 3px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
               }

               span::before {
                  content: "";
                  height: 6px;
                  width: 6px;
                  background-color: #d4d4d4;
                  border-radius: 50%;
                  transition: background-color 0.3s ease;
               }

               span:hover::before {
                  background-color: #45454d;
               }

               span[data-quote="${active}"]::before {
                  background-color: #45454d;
               }
         `}
         >
            {Object.keys(quotes).map(index => (
               <span
                  onClick={event => handleSetClick(event)}
                  data-quote={index}
                  key={index}
               />
            ))}
         </div>
      </div>
   )
}

export default Quote;