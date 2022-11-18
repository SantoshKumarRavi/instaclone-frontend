import React from 'react'

const Card = ({personDetails:{name,location,likes,postImage,description,date}}) => {
    console.log("date",date)
  return (
    <div className='Card-container'>
    <div className='Card-top-bar'>
        <div className='top-left'>
            <h4 className='text'>{name}</h4>
            <p className='text'>{location}</p>
        </div>
        <div className='top-right'>
            <div className='series-dot-button-container'>
                <div className='series-btn-child'></div>
                <div className='series-btn-child'></div>
                <div className='series-btn-child'></div>
            </div>
        </div>
    </div>
    <div className='image-container'>
       <img  alt="images" src={postImage}/>
    </div>
    <div className='emoji-logo-container'>
        <div className='heart-comment-container'>
            <div className='bottom-logo heart'>♡</div>
            <div className='bottom-logo'><img alt="logo" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-rocket-project-planing-flatart-icons-outline-flatarticons-1.png"/></div>
        </div>
        <div className='date'>{new Date(date).getDate()} {new Date(date).toDateString().slice(4,7)} {new Date(date).getFullYear()}</div>
    </div>
    <div className='likes'>
            <h5  className='text'>{likes} Likes</h5>
    </div>
    <div  className='likes description'>
        <p className='text'>{description}</p>
    </div>
    </div>
  )
}

export default Card