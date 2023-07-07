import React,{Fragment} from 'react';


import graphics from '../asset/image/graphics-content.jpg'

import Zoom from 'react-reveal/Zoom';

const Animation = () => {
    return (
        <Fragment>
            <section className='animation-section'>

                <Zoom>
                <div className='row'>
                    <h2>3D  Animation, AR VR Content development</h2>

                    <div className='ar-vr-content'>
                        <h3> The VR/AR Industry Is Ringing in The Future Of Technology.</h3>
                        <h4>Its applications can tackle a variety of challenges and goals. It can also be integrated into versatile business models and organizations.</h4>
                        <p>While Virtual Reality and Augmented Reality technology has been around for some time, we have barely scratched the surface of all its uses. This sector is evolving at a rapid and exciting pace, bringing with it more clients, consumers, and companies.</p>
                        <p>The VR/AR industry is used to moving quickly and effectively, churning out new ideas and turning them into reality. Companies need to equip themselves with a marketing strategy that is just as robust and efficient. Our high quality content writing services for Virtual Reality and Augmented Reality businesses can help your product hit the ground running.</p>
                        <p><b>Virtual and augmented reality development is our core competency.</b> We offer full-stack solutions and software development services at the highest quality, on all existing platforms and devices. We believe that various experiences of all team members may improve the process of <b>AR / VR content development,</b>  and each of us can contribute our own, creative element.</p>
                        <p>Modern tools enable us to manage projects created for customers from around the world. 4Experience is a team of passionate, experienced, and self-driven software experts, as well as engineers, who can extend your team or independently deliver custom-tailored solutions.</p>
                    </div>

                    <h2 className='bottom-h2'>Amazing 3D graphic services at your fingertips.</h2>
                    <div className='graphics-content-grid'>
                        <div>
                            <div className='image'>
                                <img className="img" src={graphics} />
                            </div>
                        </div>
                        <div>
                            <p>We create amazing 3D graphics and animations for various industries and products. From architecture, objects and realistic characters, to whole scenes that offer full immersion thanks to their ultra-realistic look.</p>
                            <p><b>We treat each project as an individual challenge that requires a tailor-made solution.</b> Experience in many areas of 3D modeling services and 3D animation means the materials and scenes we create are simply unique.<br/>
                            Need realistic 3D human avatars? Want to create futuristic space characters? <b>Our artists will be happy to take up the challenge according to your vision.</b>  You can easily hire an entire team to lead your project to excellence.
                            </p>
                        </div>
                    </div>
                </div>
                </Zoom>
            </section>
        </Fragment>
    );
};

export default Animation;