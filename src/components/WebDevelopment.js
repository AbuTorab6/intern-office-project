import React,{Fragment} from 'react';

import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart,AiFillHtml5 } from "react-icons/ai";
import { FaDigitalOcean } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { MdSettingsApplications,MdOutlineDesignServices,MdAnimation } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { SiDatocms } from "react-icons/si";
import { BsCardImage } from "react-icons/bs";
import { HiCode } from "react-icons/hi";


import { TiFlashOutline } from "react-icons/ti";

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const WebDevelopment = () => {
    return (
        <Fragment>
            <section className='web-design-section'>
                <Zoom >
                <div className='row' >
                <h2>Web Development</h2>
                    <div className='web-design-content'>
                    <p>
                    As a leading web development company, We have extensive web design and web development skills blended with the quality essence of expertise must have element to help you establish your Internet presence or take it to the next level. This involves developing the functionality and navigation of the basic site, graphics and finally, formatting and loading the content to the actual site. 
                    <br/><br/>
                    Shonod offers a diverse, best products and services, flexible options that enable you to utilize your own strengths and in-house capabilities to build custom sites. We can also enhance your capabilities to fulfill projects, if needed at any point of time, but our level of involvement and commitment with a web development project is always a decision left up to you</p>
                    </div>

                    <div className='services-grid'>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiOutlineShoppingCart/></span>
                            </div>
                            <div className='services-content'>
                                <h3>E-Commerce</h3>
                                <p>Shonod is specialized in database driven and interactive E-commerce Development. Present day online search for current information needs higher level of personalization...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><MdOutlineDesignServices/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Application Development</h3>
                                <p>As a leading web development company, We have extensive web design and web development skills blended with the quality essence of expertise must have element to help you establish your Internet...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide top>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><HiCode/></span>
                            </div>
                            <div className='services-content'>
                                <h3>PHP Development</h3>
                                <p>Shonod is one of the leading software service providers in India that offers outsourcing for PHP development in India. Our team of experienced PHP developers has enabled us to ...</p>
                            </div>
                        </div>
                        </Slide>
                        
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BiWorld/></span>
                            </div>
                            <div className='services-content'>
                                <h3>ASP Development</h3>
                                <p>Shonod was an early adapter of the .NET framework. We were perhaps the first to present a paper on the .NET framework in a conference hosted by Wire trade and Microsoft in Mauritius...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><TiFlashOutline/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Java Development</h3>
                                <p>Shonod was an early adapter of the .NET framework. We were perhaps the first to present a paper on the .NET framework in a conference hosted by Wire trade and Microsoft in Mauritius...</p>
                            </div>
                        </div>
                        </Slide>
                        
                    </div>
                </div>
                </Zoom>
            </section>
        </Fragment>
    );
};

export default WebDevelopment;