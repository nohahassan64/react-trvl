import React from 'react'
import { dataCardsOne , dataCardsTwo } from './data'
import {CardsSection,CardsContainer,CardsWrapper,CardsItems,CardItem,CardLink} from "./CardsStyle"

function Cards() {
    return (
        <CardsSection>
            <h2>Check Out These Epic Destinations!</h2>
            <CardsContainer>
                <CardsWrapper>
                    <CardsItems>
                        {dataCardsOne.map (item => {
                          const { id , img , path , label , text } = item
                          return(
                            <CardItem key={id}>
                              <CardLink to={path}>
                                <figure data-category={label}>
                                  <img src={img} alt="Travel" />
                                </figure>
                                <div className="info">
                                  <h5>{text}</h5>
                                </div>
                              </CardLink>
                            </CardItem>  
                          );
                        })}
                    </CardsItems>

                    <CardsItems>
                        {dataCardsTwo.map (item => {
                          const { id , img , path , label , text } = item
                          return(
                            <CardItem key={id}>
                              <CardLink to={path}>
                                <figure data-category={label}>
                                  <img src={img} alt="Travel" />
                                </figure>
                                <div className="info">
                                  <h5>{text}</h5>
                                </div>
                              </CardLink>
                            </CardItem>  
                          );
                        })}
                    </CardsItems>
                </CardsWrapper>
            </CardsContainer>
        </CardsSection>
    )
}

export default Cards
