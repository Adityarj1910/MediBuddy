import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'; 
import '../css/user.css';




function Home(){

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/Login')
      }

    return ( 
    <>
    <div className="header">
      <div className="home-name">
        <p>MediBuddy</p>
      </div>
      <span className="log">
        <a href="signuppage.html">
          <button className="sign-up">
          <p>Sign Up</p>
          </button>
        </a>
      </span>
      <span className="log">
          <button className="login" onClick={()=> goToLogin()}>Log In</button>
      </span>
    </div>
    <div className="image-container">
      <img src="images/Medicine-(1).jpg" className="image" />
      <div className="text-container">
        <p className="text-search">
          STOP LOOKING FOR A MEDICINE - FIND IT.
        </p>
      </div>
      <div className="search-box">
        <input type="search" placeholder="Search for a Medicine" className="search-input" />
        <div className="dropdown">
          <select name="Select Location" id="Select Location" className="dropdown-container">
            <option value="Patia">Patia</option>
            <option value="Chandrashekharpur">Chandrashekharpur</option>
            <option value="Nandankanan">Nandankanan</option>
            <option value="Infocity">Infocity</option>
          </select>
          <div className="div-search-button">
            <a href="search.html">
              <button className="search-button">
              <p>Search</p>
              </button>
            </a>
          </div>
        </div>
        <span className="log1"><a href="store-homepage.html"><p className="store-page">Have a Store?</p></a></span>
      </div>
    </div>
    
      

    <div className="center-page">

      <div className="product-info">
          <div className="suggest">
            <p className="style-items-product"> &#9679;&#9679;&#9679;  |  SUGGESTED ITEMS | &#9679;&#9679;&#9679;  </p>
          </div>

{/* <!-- row1 --> */}
          <div className="product">
            <div className="head">
              <div className="meds">
                  <img src="images/dolo.jpg" className="thumbnail" />
              </div>
                <div className="info">
                <p className="title">
                  Dolo-650
                </p>
        
                <p className="composition">
                    Paracetamol Tablets IP
                </p>
        
                <p className="manufacturer">
                    MICROLABS LIMITED
                </p>
                </div>
            </div>

            <div className="head">
              <div className="meds">
                  <img src="images/saridon.webp" className="thumbnail" />
              </div>
                <div className="info">
                <p className="title">
                  Saridon
                </p>
        
                <p className="composition">
                    Paracetamol & Caffeine Tablets IP
                </p>
        
                <p className="manufacturer">
                    BAYER
                </p>
                </div>
            </div>

            <div className="head">
              <div className="meds">
                  <img src="images/ors.webp" className="thumbnail" />
              </div>
                <div className="info">
                <p className="title">
                  ORS
                </p>
        
                <p className="composition">
                    Oral Rehydration Salts
                </p>
        
                <p className="manufacturer">
                    CIPLA
                </p>
                </div>
            </div>

            <div className="head">
              <div className="meds">
                  <img src="images/retoz.jpg" className="thumbnail" />
              </div>
                <div className="info">
                <p className="title">
                  Retoz-90
                </p>
        
                <p className="composition">
                  Etoricoxib Tablets IP 90mg
                </p>
        
                <p className="manufacturer">
                    DR. Reddy's
                </p>
                </div>
            </div>
        </div>

  {/* <!-- row2 --> */}
        
        <div>
          <div className="head">
            <div className="meds">
                <img src="images/pudin-hara.webp" className="thumbnail" />
            </div>
              <div className="info">
              <p className="title">
                Pudin Hara
              </p>

              <p className="composition">
                  
              </p>

              <p className="manufacturer">
                  Dabur
              </p>
              </div>
          </div>

          <div className="head">
            <div className="meds">
                <img src="images/crepe.webp" className="thumbnail" />
            </div>
              <div className="info">
              <p className="title">
                Crepe Bandage
              </p>
      
              <p className="composition">
                  Cotton Crepe bandage BP
              </p>
      
              <p className="manufacturer">
                  HANDIPLAST
              </p>
              </div>
          </div>

          <div className="head">
            <div className="meds">
                <img src="images/sugar.webp" className="thumbnail" />
            </div>
              <div className="info">
              <p className="title">
                Accu-Chek Glucometer
              </p>
      
              <p className="composition">
                Instant S Blood Glucose Glucometer
              </p>
      
              <p className="manufacturer">
                  Roche Diabetes care
              </p>
              </div>
          </div>

          <div className="head">
            <div className="meds">
                <img src="images/sanitary-pad.webp" className="thumbnail" />
            </div>
              <div className="info">
              <p className="title">
                Whisper Ultra 
              </p>
      
              <p className="composition">
                sanitary Pad
              </p>
      
              <p className="manufacturer">
                  P&G Pvt. Ltd.
              </p>
              </div>
          </div>
        </div>

      </div>

      <div className="store-info">
        <div className="suggest">
          <p className="style-items-store"> &#9679;&#9679;&#9679;  |  NEARBY STORES | &#9679;&#9679;&#9679;  </p>
        </div>
        <div className="maps">
          <a href="https://shorturl.at/ceIR4"><img src="images/current.png" className="image-map" /></a>

        </div>
        <div className="store-box">
          <div className="head-store">
            <div className="med-store-info">
              <p className="store">
                MEDKART 24
              </p>
      
              <p className="location">
                350M from KIIT Campus-6
              </p>
      
              <p className="status">
                  Open 24 hours
              </p>
            </div>
            <div className="direction">
              <a href="https://shorturl.at/uADGI"><img src="images/maps-2.png"
                  className="direction-icon" /></a>
            </div>
          </div>

          <div className="head-store">
            <div className="med-store-info">
              <p className="store">
                APOLLO PHARMACY PATIA
              </p>
      
              <p className="location">
                400M from KIIT Campus-6
              </p>
      
              <p className="status">
                  Open 24 hours
              </p>
            </div>
            <div className="direction">
              <a href="https://shorturl.at/kyFH3"><img src="images/maps-2.png"
                  className="direction-icon" /></a>
            </div>
          </div>

          <div className="head-store">
            <div className="med-store-info">
              <p className="store">
                KIMS MEDICINE STORE
              </p>
      
              <p className="location">
                650M from KIIT Campus-6
              </p>
      
              <p className="status">
                  Open 24 hours
              </p>
            </div>
            <div className="direction">
              <a href="https://shorturl.at/mvy57"><img src="images/maps-2.png"
                  className="direction-icon" /></a>
            </div>

          </div>
        </div>
      </div>

    </div>
    </>

);
};

export default Home;