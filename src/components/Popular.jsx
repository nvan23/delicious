import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';

import mockData from '../mockData.json'

function Popular() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        // const data = await api.json();
        setPopular(mockData)
        console.log(mockData)
    }
  return (
    <div>
      <Wrapper>
      <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {
            popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              )
            })
          }
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styledComponents.div`
  margin: 4rem 0rem;
`

const Card = styledComponents.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
  }
`

export default Popular