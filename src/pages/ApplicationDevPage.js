import React,{Fragment,useEffect} from 'react';


import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import ApplicationDev from '../components/ApplicationDev';
import Footer from '../components/Footer';


const ApplicationDevPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Web Based Application"/>
            <ApplicationDev/>
            <Footer/>
        </Fragment>
    );
};

export default ApplicationDevPage;