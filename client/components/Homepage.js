import React from 'react'
import { Link } from 'react-router-dom';

export default function Homepage() {

  return (
    <div>
      <div className="bigPicture" >
        <img src="/homepageImages/banner2.jpeg" />
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
          <Link to={`/products/${6}`}>
            <div className="col-xs-10">
              <img src="http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw803eb0ee/images/large_gray/44-6375B.jpg" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>Blue Hydrangea</b></h3>
              <h3><b>$99.00</b></h3>
            </div>
          </Link>

        </div>
        <div className="card">
          <Link to={`/products/${24}`}>
            <div className="col-xs-10">
              <img src="https://cdn.shopify.com/s/files/1/0150/6262/products/Succulent_1.jpg?v=1492714852" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>Mini Succulents</b></h3>
              <h3><b>$20.00</b></h3>
            </div>
          </Link>

        </div>
        <div className="card">
          <Link to={`/products/${7}`}>
            <div className="col-xs-10">
              <img src="http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw86fcdc90/images/large_gray/44-6383A.jpg" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>Tall Peony</b></h3>
              <h3><b>$99.00</b></h3>
            </div>
          </Link>

        </div>
                <div className="card">
          <Link to={`/products/${32}`}>
            <div className="col-xs-10">
              <img src="https://cdn.shopify.com/s/files/1/0350/5665/products/Echeveria-Lola-3.5_web_grande.jpg?v=1500089887" alt="Avatar" style={{ width: 90 + '%' }}></img>
              <h3><b>Lola Succulent</b></h3>
              <h3><b>10.00</b></h3>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

