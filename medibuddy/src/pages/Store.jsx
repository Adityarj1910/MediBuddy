import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../css/store.css';

function Store(){

  return(
    <>
     <div className="header-store">
            <div className="home-name">
              <p>MediBuddy</p>
            </div>

        <div className="image-container">
            <img src="images/store-wave.png" className="image" />
            <div>
                <img src="images/pharmacy.jpg" className="pharmacy-image" />
            </div>
            <div className="note-seller">
                <p className="become">
                    Locate your Store at <u>MediBuddy </u>
                </p>
            </div>
            <div className="promoter">
                <p className="popular">
                    List your Store on MediBuddy and go popular
                </p>
            </div>
            <div className="register">
                <button className="register-button">
                    Register Now
                </button>
            </div>

            <div className="add-product">
                <button className="add-button">
                    Add Product
                </button>
            </div>
        </div>

        <div className="lower-half">
            <div className="inventory"> 
                <p className="your-inventory">   |  YOUR INVENTORY |  </p>
            </div>
                <div className="container-meds">
                    
                    <div className="meds-store">
                        <div className="meds-image">
                            <img src="images/saridon.webp" className="thumbnail-Store" />
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
            
                    <div className="meds-store">
                        <div className="meds-image">
                            <img src="images/ors.webp" className="thumbnail-Store" />
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
            
                    <div className="meds-store">
                        <div className="meds-image">
                            <img src="images/retoz.jpg" className="thumbnail-Store" />
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

                    <div className="meds-store">
                        <div className="meds-image">
                            <img src="images/crepe.webp" className="thumbnail-Store" />
                        </div>
                            <div className="info">
                                <br />
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

                    <div className="meds-store">
                        <div className="meds-image">
                            <img src="images/sugar.webp" className="thumbnail-Store" />
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

                    <div className="meds-store">
                        <div className="meds-image">
                            <img src="images/sanitary-pad.webp" className="thumbnail-Store" />
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
        </div>
    </>
  );
  };

export default Store;
