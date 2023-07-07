import React,{Fragment} from 'react';


import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart,AiFillHtml5 } from "react-icons/ai";
import { FaDigitalOcean } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { MdSettingsApplications,MdOutlineDesignServices,MdAnimation } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { SiDatocms } from "react-icons/si";
import { BsCardImage } from "react-icons/bs";

import { TiFlashOutline } from "react-icons/ti";

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const WebDesign = () => 
{
    return (
        <Fragment>
            <section className='web-design-section'>
                <Zoom >
                <div className='row'>
                    <h2>Web Design</h2>
                    <div className='web-design-content'>
                    <p>Shonod enables to communicate their ideas, products and services to clients effectively. In digital and dynamic world, when more organizations providing products and services to go online, professional web design services using improper study and complex technologies are difficult for web spiders to comprehend. With custom web design and having expertise in affordable web design services – we deliver professional web design services through programming, animating and artistic styling. <br/><br/>
                    Shonod offers the advantage of single-source support that covers a wide range of custom web design solutions that meets your organization specific requirements and assists you in achieving success at the e-marketplace. We provide various web page design, professional web design template, web layout design, web design software, affordable web design and hosting services, best web design software, professional web site design, small business web design, web site design development, affordable web design layouts, flash web design, business web site design services at affordable prices in India.</p>
                    </div>

                    <div className='services-grid'>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><MdOutlineDesignServices/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Custom Web Design</h3>
                                <p>With our custom web designers, creative artists and new media engineers, we help you..</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide top>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BsCardImage/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Web Template Design</h3>
                                <p>We have great expertise in professional web design templates and all resources to provide</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiOutlineShoppingCart/></span>
                            </div>
                            <div className='services-content'>
                                <h3>E-Commerce Website</h3>
                                <p>Banking and finance, insurance, department store or car rental, pharmaceutical, media..</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><FaDigitalOcean/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Website Re-Designing</h3>
                                <p>Website Re-designing, improvement and timely changes are essential for every website.</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><TiFlashOutline/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Flash Website Design</h3>
                                <p>By perfectly blending programming expertise, market skills and artistic talent, we are..</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiFillHtml5/></span>
                            </div>
                            <div className='services-content'>
                                <h3>PSD to HTML</h3>
                                <p>PSD to HTML5 conversion service providers, Shonod has acquired influential position.</p>
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

export default WebDesign;