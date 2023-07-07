import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import DigitalMarketing from '../components/DigitalMarketing';
import Footer from '../components/Footer';

const DigitalMarketingPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Digital Marketing"/>
            <DigitalMarketing/>
            <Footer/>
        </Fragment>
    );
};

export default DigitalMarketingPage;