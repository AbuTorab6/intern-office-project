import React,{Fragment,useEffect} from 'react';


import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import GraphicDesign from '../components/GraphicDesign';
import Footer from '../components/Footer';

const GraphicDesignPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Graphic Design"/>
            <GraphicDesign/>
            <Footer/>
        </Fragment>
    );
};

export default GraphicDesignPage;