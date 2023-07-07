import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import CMSDevelopment from '../components/CMSDevelopment';
import Footer from '../components/Footer';

const CMSDevelopmentPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="CMS Development"/>
            <CMSDevelopment/>
            <Footer/>
        </Fragment>
    );
};

export default CMSDevelopmentPage;