import React,{Fragment} from 'react';


import mobileApp1 from '../asset/image/mobileApp.png'
import mobileApp2 from '../asset/image/mobileApp2.png'

import Zoom from 'react-reveal/Zoom';


const MobileApplication = () => {
    return (
        <Fragment>
            <section className='mobile-application-section'>
                <Zoom>
                <div className='row'>
                    <h2>Application Development</h2>
                    <p className='des'>If you are looking for custom mobile app or want responsive web app, then we gives solutions for all of your app development requirements. If you have an innovative app idea, then come to us. We will develope app as per your requirements to ensure maximum Return Of Investment (ROI).</p> 
                    <p className='des2'>We develope mobile apps for multiple platforms like ios, android and windows OS as per requirements. Through mobile app development, we ensure our customers for their brand growth and attract more and more customers.</p>

                    <div className='mobile-app-grid'>
                        <div className='col'>
                            <div className='image'>
                                <img className="img" src={mobileApp2} />
                            </div>
                            <h3>Android App Development</h3>
                            <p>Android is an open source and Linux-based Operating System for mobile devices such as smartphones and tablet computers. Android was developed by Open Handset Alliance and other companies. Shonod, now entered into Android app development.</p>
                        </div>
                        <div className='col'>
                            <div className='image'>
                                <img className="img" src={mobileApp1} />
                            </div>
                            <h3>IOS App Development</h3>
                            <p>Now a days, as there is huge crowd of similar apps on google play store, your apps cannot reach to consumers. To overcome this situation, Shonod expert development team build not only great android mobile app but is also functional and customized to your requirements.</p>
                        </div>
                    </div>
                </div>
                </Zoom>
            </section>
        </Fragment>
    );
};

export default MobileApplication;