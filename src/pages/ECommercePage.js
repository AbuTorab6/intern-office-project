import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import ECommerce from '../components/ECommerce';
import Footer from '../components/Footer';

const ECommercePage = () =>
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="E-Commerce Development"/>
            <ECommerce/>
            <Footer/>
        </Fragment>
    );
};

export default ECommercePage;