import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import imgOne from '../images/img-9.jpg'
import imgTwo from '../images/img-2.jpg'
import imgThree from '../images/img-3.jpg'
import imgFour from '../images/img-4.jpg'
import imgFive from '../images/img-8.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem  src={imgOne}
                          text="Explore the hidden waterfall deep
                          inside the Amazon Jungle"
                          label="Adventure"
                          path="/services"
                        />
                         <CardItem  src={imgTwo}
                          text="Travel through the Islans of Bali
                          in Private Cruise"
                          label="Luxury"
                          path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem  src={imgThree}
                          text="Explore the hidden waterfall deep
                          inside the Amazon Jungle"
                          label="Adventure"
                          path="/services"
                        />
                         <CardItem  src={imgFour}
                          text="Travel through the Islans of Bali
                          in Private Cruise"
                          label="Luxury"
                          path="/services"
                        />
                         <CardItem  src={imgFive}
                          text="Travel through the Islans of Bali
                          in Private Cruise"
                          label="Luxury"
                          path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
