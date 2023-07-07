import React,{Fragment} from 'react'


import pic1 from '../asset/image/web-app.png'
import pic2 from '../asset/image/web-app2.png'

import Zoom from 'react-reveal/Zoom';

const ApplicationDev = () => {
    return (
        <Fragment>
            <section className='application-dev-dection'>
                <Zoom>
                <div className='row'>
                    <h2>Web Based Application</h2>
                    <div className='application-dev-top-grid'>
                        <div className='image'>
                            <img className="img" src={pic1} />
                        </div>
                        <div>
                            <p>
                            A Web based application is a program, which is accessed over a network connection using HTTP. This application can be run inside the web browser. Web based applications are the ultimate way to take advantage of today's technology to enhance your organizations productivity & efficiency. Web based application gives you an opportunity to access your business information from anywhere in the world at anytime. It also facilitates you to save time & money and improve the interactivity with your customers and partners. The website having the similar functionality to a desktop software application, are known as web applications.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <p>
                    Web-based applications are easy to use and can be implemented without interrupting your existing work process. Whether you need a content managed solution or an e-commerce system, we can develop a customized web application that fulfills your business requirements. The web based software that Netsity creates, enables you to interact with the application and data in a fluid and highly responsive manner. Our designers and multimedia experts ensure that your solution gives you an edge over your competitors.
                    </p>
                    <br/>
                    <p>
                    The web based application has become the default choice for many enterprise processes. From sales orders and customer support to supply chain management and online extranets, the web based application provides customers, employees and partners with business-critical information and connections. User have come to expect instant, secure and reliable access to every web based application, even from their mobile devices.
                    </p>
                    <div className='application-dev-bottom-grid'>
                        <p>
                            A Web based application is a program, which is accessed over a network connection using HTTP. This application can be run inside the web browser. Web based applications are the ultimate way to take advantage of today's technology to enhance your organizations productivity & efficiency. Web based application gives you an opportunity to access your business information from anywhere in the world at anytime. It also facilitates you to save time & money and improve the interactivity with your customers and partners. The website having the similar functionality to a desktop software application, are known as web applications.
                        </p>
                        <div className='image'>
                            <img className="img" src={pic2} />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                </Zoom>
            </section>
        </Fragment>
    );
};

export default ApplicationDev;