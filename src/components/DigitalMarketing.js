import React,{Fragment} from 'react';

import { BiWorld,BiRocket } from "react-icons/bi";
import { AiOutlineShoppingCart,AiFillHtml5,AiOutlineSound,AiOutlineMail } from "react-icons/ai";
import { MdSettingsApplications,MdOutlineDesignServices,MdAnimation } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { TiFlashOutline } from "react-icons/ti";
import { BsGraphUp,BsLink45Deg } from "react-icons/bs";

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


const DigitalMarketing = () => {
    return (
        <Fragment>
            <section className='digital-marketing-section'>
                <Zoom>
                <div className='row'>
                <h2>Digital Marketing</h2>
                <p className='des'>Digital marketing stands for Online Marketing for the company products or services. It is mostly used for promoting all advertising to company products.</p>
                <h3 className='title'>We provide following Digital Marketing Services:</h3>
                <div className='services-grid'>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BsGraphUp/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Search Engine Optimization</h3>
                                <p>We are providing Website Maintenance Services professional in this field. We had seen many like doing this that updating...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiOutlineSound/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Social Media Marketing</h3>
                                <p>Social media is all about establishing huge user network, sharing their content, opinions, views and encouraging interaction...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide top>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BiRocket/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Pay Per Click</h3>
                                <p>PPC Program search engines guarantee top listings for selected keywords. These keywords or search phrases are the ones relevant...</p>
                            </div>
                        </div>
                        </Slide>
                        
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BsLink45Deg/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Link Building</h3>
                                <p>Your link popularity is one of the factors that determine the ranking of your site and Search engines find your website through...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiOutlineMail/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Email Marketing</h3>
                                <p>Marketing' in simpler terms is defined as the management process for identifying, anticipating, and satisfying customer...</p>
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

export default DigitalMarketing;