import React,{Fragment} from 'react';

import team1 from '../asset/image/team1.jpg'
import team2 from '../asset/image/team2.jpg'
import team3 from '../asset/image/team3.jpg'
import team4 from '../asset/image/team4.jpg'
import team5 from '../asset/image/team5.PNG'
import team6 from '../asset/image/team6.JPG'
import team7 from '../asset/image/team7.jpeg'
import team8 from '../asset/image/team8.png'
import team9 from '../asset/image/team9.jpg'
import team10 from '../asset/image/10.JPG'

import team11 from '../asset/image/team11.jpg'
import team12 from '../asset/image/team12.jpg'
import team13 from '../asset/image/team13.jpg'
import team14 from '../asset/image/team14.jpg'
import team15 from '../asset/image/team15.jpg'
import team16 from '../asset/image/team16.png'
import team17 from '../asset/image/team17.png'


import { FaLinkedinIn } from "react-icons/fa";

import Slider from "react-slick"
import Slide from 'react-reveal/Slide';

const Team = () => 
{

    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <Fragment>
            <section className='team-section-top'>
                <div className='row'>
                    <Slide left>
                        <h2>Meet Our Dynamic Team</h2>
                    </Slide>
                </div>
            </section>

            <section className='team-section-bottom'>
                <div className='row'>
                <Slider {...settings}>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team4} />
                            </div>
                            <h4>Abdullah Kamal</h4>
                            <h5>Trainee HR</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team3} />
                            </div>
                            <h4>Bijoy Roy</h4>
                            <h5>Manager (Admin and Accounts)</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team2} />
                            </div>
                            <h4>Saydujjaman Shamim</h4>
                            <h5>CEO</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team9} />
                            </div>
                            <h4>Robiul Islam Tarafder</h4>
                            <h5>Chairman</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team5} />
                            </div>
                            <h4>Hridoy Ahmed</h4>
                            <h5>HR Officer</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team10} />
                            </div>
                            <h4>Mahmudur Rahman</h4>
                            <h5>Software Developer Android</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team6} />
                            </div>
                            <h4>Bashir Ahmed</h4>
                            <h5>Web Developer</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team1} />
                            </div>
                            <h4>Abu Torab Ibnul Baki</h4>
                            <h5>Trainee, Web Developer</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team7} />
                            </div>
                            <h4>Mridul Ahmed</h4>
                            <h5>Digital Marketing Executive</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team8} />
                            </div>
                            <h4>Asaduzzaman</h4>
                            <h5>Senior Web Developer</h5>
                        </div>
                        


                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team11} />
                            </div>
                            <h4>MD. MONZURUL ISLAM</h4>
                            <h5>Head of digital Content development</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team12} />
                            </div>
                            <h4>Mehedi Hasan</h4>
                            <h5>3D Animator</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team13} />
                            </div>
                            <h4>ABDULLAH AL MAMUN</h4>
                            <h5>3D , AR/VR Design and Development</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team14} />
                            </div>
                            <h4>MD.TAUFEQUL HOSSAIN</h4>
                            <h5>Motion Graphics editor</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team15} />
                            </div>
                            <h4>Nashid Ali</h4>
                            <h5>Head of Digital Engineering</h5>
                        </div>
                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team16} />
                            </div>
                            <h4>SHARIF UDDIN AHMED</h4>
                            <h5>Head of Software Development</h5>
                        </div>

                        <div className='team-content'>
                            <div className='team-member'>
                                <img className="team-member-img" src={team17} />
                            </div>
                            <h4>Yeasin Arafat Ridoy</h4>
                            <h5>Animation Specialist</h5>
                        </div>
                        

                    </Slider>
                </div>
            </section>
        </Fragment>
    );
};

export default Team;