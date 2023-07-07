import React,{Fragment} from 'react';


import { BiWorld,BiRocket } from "react-icons/bi";
import { AiOutlineShoppingCart,AiFillHtml5,AiOutlineSound,AiOutlineMail,AiOutlineCodeSandbox,AiFillIdcard } from "react-icons/ai";
import { MdSettingsApplications,MdOutlineDesignServices,MdAnimation } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { TiFlashOutline } from "react-icons/ti";
import { BsGraphUp,BsLink45Deg,BsFillPencilFill,BsBrush } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const GraphicDesign = () => {
    return (
        <Fragment>
            <section className='graphics-design-section'>
                <Zoom>
                <div className='row'>
                    <h2>Graphic Design</h2>
                    <p className='des'>Graphic design is the applied art of arranging images and text to communicate a message, or facilitate understanding. It may be applied in any media, such as print, digital media, motion pictures, animation, product design, packaging, and information signs.</p>
                    <h3 className='title'>We provide following Graphic Design Services:</h3>

                    <div className='services-grid'>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BsFillPencilFill/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Logo Design</h3>
                                <p>The logo is not just an image, it is the embodiment of an organization. Because logos are meant to represent companies and faster...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiOutlineCodeSandbox/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Software Box Design</h3>
                                <p>Your software box is the deciding factor for many potential customers. We help you to create professional software boxes with the...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide top>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><FaLeaf/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Greetings Design</h3>
                                <p>Greeting cards are usually given on special occasions such as birthdays, Christmas or other holidays, they are also sent on...</p>
                            </div>
                        </div>
                        </Slide>
                        
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiFillIdcard/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Visiting Card Design</h3>
                                <p>The Business Card / Business cards many of us use it more than any other single marketing item, yet it very often demonstrates the...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BsBrush/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Banner Design</h3>
                                <p>Web banners can be a form of branding for the associated website or a navigation tool for that website. A web banner is a graphical...</p>
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

export default GraphicDesign;