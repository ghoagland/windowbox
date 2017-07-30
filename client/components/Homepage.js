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
        <Link to={`/products/${5}`} >
          <img src="/homepageImages/coloredflowers.jpg" />
        </Link>
        <Link to={`/products/${6}`} >
          <img src="/homepageImages/succulents.jpg" />
        </Link>
        <Link to={`/products/${7}`} >
          <img src="/homepageImages/droopingplant.jpg" />
        </Link>
      </div>
      <div className="textBar" >
        <div className="textTextBar" >
          <span> BEST SELLERS</span>
        </div>
      </div>
      <div className="flex-container-2" >
        <div className="card">
          <Link to={`/products/${2}`}>
            <div className="col-xs-10">
              <img src="http://www.tropical-plants-flowers-and-decor.com/images/vanorc.jpg" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>VANILLA ORCHID</b></h3>
              <h3><b>$30.00</b></h3>
            </div>
          </Link>

        </div>
        <div className="card">
          <Link to={`/products/${1}`}>
            <div className="col-xs-10">
              <img src="https://maxpull-gdvuch3veo.netdna-ssl.com/wp-content/uploads/2010/01/jade-plants1.jpg" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>JADE PLANT</b></h3>
              <h3><b>$9.00</b></h3>
            </div>
          </Link>

        </div>
        <div className="card">
          <Link to={`/products/${8}`}>
            <div className="col-xs-10">
              <img src="http://s7d1.scene7.com/is/image/terrain/42446963_010_a?$zoom2$" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>WHITE HYDRANGEA</b></h3>
              <h3><b>$45.00</b></h3>
            </div>
          </Link>

        </div>
                <div className="card">
          <Link to={`/products/${4}`}>
            <div className="col-xs-10">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/cc/cf/ec/cccfec02f5f027e0b6e2f4a895e8c304--monkey-orchid-rare-flowers.jpg" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>MONKEY ORCHID</b></h3>
              <h3><b>40.00</b></h3>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

