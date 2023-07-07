import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import WebDesign from '../components/WebDesign';
import Footer from '../components/Footer';

const WebDesignPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Web Designing"/>
            <WebDesign/>
            <Footer/>
        </Fragment>
    );
};

export default WebDesignPage;