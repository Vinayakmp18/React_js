import React from 'react'

const Course = (props) => {
    console.log(props);
  return (
    <div className='parentBlock'>
        <div className='mainBlock'>
            <img src={props.payload[0].trainerPhoto} alt="" />
            <h2>{props.payload[0].StudentName}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[1].trainerPhoto} alt="" />
            <h2>{props.payload[1].StudentName}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[2].trainerPhoto} alt="" />
            <h2>{props.payload[2].StudentName}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[3].trainerPhoto} alt="" />
            <h2>{props.payload[3].StudentName}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[4].trainerPhoto} alt="" />
            <h2>{props.payload[4].StudentName}</h2>
        </div>
    </div>
  )
}

export default Course