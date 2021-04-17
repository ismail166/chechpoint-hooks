import React from 'react'

const Movies = (props) => {
    return (
        
        <div className='container dib pa2 bw2'>
            <div className='overlay'>
            <h1 className="text">{props.title}</h1>
            <h1 className="rating">{props.rate}</h1>
            </div>               
              <img style={{width: "400px",height:"400px"}} className ='hover-shadow-5 ba grow  mw5' src={`./images/movie-${props.id}.jpg`} alt=''/>
                
            </div>
            
        
    )
}

export default Movies
