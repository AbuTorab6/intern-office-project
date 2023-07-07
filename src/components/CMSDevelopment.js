import React,{Fragment} from 'react';

import cmsdev1 from '../asset/image/cmsdev.png'


import Zoom from 'react-reveal/Zoom';


const CMSDevelopment = () => {
    return (
        <Fragment>
            <section className='cms-develop-section'>
                <Zoom>
                <div className='row'>
                    <h2>CMS Development</h2>

                    <div className='cms-dev-grid'>
                        <div className='image'>
                            <img className="img" src={cmsdev1} />
                        </div>
                        <div>
                            <h3>Content Management System</h3><br/>
                            <p>Content Management System also known as CMS software. It is an application that manages the content of a website.</p><br/>
                            <p>Once a CMS is integrated to the website, it provides various users with different permission levels to update or edit website content and thus reducing the complexity of the work. The website involves Articles, Blogs, Press Release, Store and events, which is the complexity of work. It can be simplified by having content management solution. With the help of CMS-integrated website, user can quickly and securely log-in and make whatever changes that he want. User can add new products, pages, news, contact information and, manage it whether we don’t having the web-based skills.</p>
                        </div>
                    </div>
                    <p className='des'>
                    Most Content Management Systems include web-based publishing format management, history editing and version control, indexing, search and retrieval. Content Management System support the separation of the content and presentation. It is a software application or the set of related programs that are used to create and manage digital content. The CMS administrator must know how many people will be utilizing the applications whether the CMS will require Multilanguage support and what size support team will be needed to maintain operations.
                    </p>
                </div>
                </Zoom>
            </section>
        </Fragment>
    );
};

export default CMSDevelopment;