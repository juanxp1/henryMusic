import React from 'react'
import styled from 'styled-components';


const Hardcode = ({ name, image, id}) => {
   
    return (
        <Container>

            <div>
              
                <div className="generos">

                    <div className="cards">
                        <div className='cards-info'>
                        <div ><img className="card_imagen"key={id} src={image}alt={name} /></div>
                        <div className="card_text">
                            <h4>{name}</h4>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="yellow" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                            </a>
                        </div>    
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </Container>
    )
}
export default Hardcode;
const Container = styled.div`
.generos{
    flex-wrap: wrap;
    width: 100%;  
    margin-bottom: 10px;
}
.cards{
    width: 300px;
    height: 80px;
    transition: var(--efecto);
    flex-basis: calc((100% / 3) - 20px);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 1rem;
    margin: 10px;
    --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
    padding: 5px;
    overflow: visible;
    background: #f7ba2b;
    background: var(--background);
    position: relative;
    z-index: 1;

}
.cards::after {
    position: absolute;
    content: "";
    top: 30px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(100px);
    background: #f7ba2b;
    background: var(--background);
    transition: opacity .5s;
}
.cards-info {
    --color: #181818;
    background: var(--color);
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
}
.cards:hover::after {
    opacity: 0;
}   
.cards:hover .card-info {
    color: #f7ba2b;
    transition: color 1s;
}

.card_imagen{
    
    width: 80px;
    height: 70px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card_text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: calc(100% - 80px);
}
`