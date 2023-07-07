import React,{Fragment} from 'react';


import {Routes,Route} from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import TeamPage from '../pages/TeamPage';
import MissionVisionPage from '../pages/MissionVisionPage';
import WhyChooseUsPage from '../pages/WhyChooseUsPage';
import ProductPage from '../pages/ProductPage';
import TechnologyPage from '../pages/TechnologyPage';

import WebDesignPage from '../pages/WebDesignPage';
import WebDevelopmentPage from '../pages/WebDevelopmentPage';
import ECommercePage from '../pages/ECommercePage';
import ApplicationDevPage from '../pages/ApplicationDevPage';
import DigitalMarketingPage from '../pages/DigitalMarketingPage';
import MobileApplicationPage from '../pages/MobileApplicationPage';
import GraphicDesignPage from '../pages/GraphicDesignPage';
import CMSDevelopmentPage from '../pages/CMSDevelopmentPage';
import AnimationPage from '../pages/AnimationPage';

const myRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/services" element={<ServicesPage/>} />
                <Route path="/team" element={<TeamPage/>} />
                <Route path="/missionVision" element={<MissionVisionPage/>} />
                <Route path="/whyChooseUs" element={<WhyChooseUsPage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/technology" element={<TechnologyPage/>} />
                <Route path="/webDesign" element={<WebDesignPage/>} />
                <Route path="/webDevelopment" element={<WebDevelopmentPage/>} />
                <Route path="/eCommerceDev" element={<ECommercePage/>} />
                <Route path="/applicationDev" element={<ApplicationDevPage/>} />
                <Route path="/digitalMarketing" element={<DigitalMarketingPage/>} />
                <Route path="/mobileApplication" element={<MobileApplicationPage/>} />
                <Route path="/graphicDesign" element={<GraphicDesignPage/>} />
                <Route path="/cmsDev" element={<CMSDevelopmentPage/>} />
                <Route path="/arContentDev" element={<AnimationPage/>} />
            </Routes>
        </Fragment>
    );
};

export default myRouter;