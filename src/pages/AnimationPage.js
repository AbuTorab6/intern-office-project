import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import Animation from '../components/Animation';
import Footer from '../components/Footer';

const AnimationPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="3D  Animation, AR VR Content development"/>
            <Animation/>
            <Footer/>
        </Fragment>
    );
};

export default AnimationPage;