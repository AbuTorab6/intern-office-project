import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import WebDevelopment from '../components/WebDevelopment';
import Footer from '../components/Footer';

const WebDevelopmentPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Web Development"/>
            <WebDevelopment/>
            <Footer/>
        </Fragment>
    );
};

export default WebDevelopmentPage;