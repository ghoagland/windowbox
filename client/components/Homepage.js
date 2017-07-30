import React from 'react'
import { Link } from 'react-router-dom';

export default function Homepage() {

  return (
    <div>
      <div className="bigPicture" >
        <img src="/homepageImages/banner.jpg" />
      </div>
      <div className="textBar" >
        <div className="textTextBar" >
          <span> GREEN IS GOOD</span>
        </div>
      </div>
      <div className="flex-container-1" >
        <Link to={`/products/${4}`} >
          <img src="/homepageImages/coloredflowers.jpg" />
        </Link>
        <Link to={`/products/${6}`} >
          <img src="/homepageImages/succulents.jpg" />
        </Link>
        <Link to={`/products/${7}`} >
          <img src="/homepageImages/droopingplant.jpg" />
        </Link>
      </div>
    </div>
  )
}

