import { Image } from "react-bootstrap"
import GuyHoldingCard from "../assets/card.jpg"
import React from 'react'
import Quote from "../components/Quote"
import { css } from "@emotion/css"


const Homepage = () => {
  return (
    <div>
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <Image class="img-fluid rounded mb-4 mb-lg-0" src={GuyHoldingCard} />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Business cards are our business.</h1>
              <p>
                Here at ACME, we take your business cards to the next level. With our
                easy-to-use interface, you can create business cards that makes impressions
                and wows customers.
            </p>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 40px auto;
                max-width: 700px;
            `}
            >
              <h3>Don't just take it from us.</h3>
              <h4>Here's what our customers have to say.</h4>
              <Quote />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage