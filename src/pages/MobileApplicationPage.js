import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import MobileApplication from '../components/MobileApplication';
import Footer from '../components/Footer';

const MobileApplicationPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Mobile Application Development"/>
            <MobileApplication/>
            <Footer/>
        </Fragment>
    );
};

export default MobileApplicationPage;