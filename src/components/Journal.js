import React from 'react'


export const Journal = (props) => {
  return (
    <div className='container diana'>
        <div className='content'>
        <img src={props.mountimg}  alt='big'className='jimages'/>
        </div>
        <div className='content-text'>

          <div className='location'>
            <div className='mapscontent'>
            <img src={props.img} alt='location'/> 
            <p className='country'>{props.details.location} </p>
            <a className='viewonmap' href={props.details.googlemaps}>View on Google Maps</a>


            </div>
          

            <h1 className='title'>{props.details.title}</h1>
            <h2 className='date'>{props.details.startdate}- {props.details.enddate}</h2>
            <p className='discription'>{props.details.description}</p>

          </div>

          <div>

          </div>

        </div>
        <div>
            
        </div>
    </div>
  )
}
