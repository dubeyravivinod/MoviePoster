import React from 'react'
import './Card.css'
// import poster from '../src/Images/ph1_small.png'
// import poster1 from '../src/Images/ph1_big1.png'


const Card = ({poster,h2,p,button,span,p1,poster1}) => {
  return (
    <>
    <div className="carddiv">
        <div className="leftside">
            <div className="st1-left">
                <div className="st1-left-img">
                    <img src={poster} alt="" />
                </div>
                <div className="st1-left-containe">
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    <button>{button}</button> <span>{span}</span>
                </div>
            </div>
            <div className="nd2-left">
                <p>{p1}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, neque cupiditate. Omnis alias voluptatibus molestiae iure, tempora tenetur modi aliquam.</p> */}
            </div>
           
        </div>
        <div style={{backgroundImage: `url(${poster1})`,backgroundRepeat: "no-repeat",backgroundSize:'cover'}} className="rightside">
            {/* <img src={poster1} alt="" /> */}
        </div>
    </div>
    </>
  )
}

export default Card