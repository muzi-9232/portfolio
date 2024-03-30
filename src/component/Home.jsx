import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <header className="page-header-ui page-header-ui-dark bg-gradient-primary-to-secondary">
                <div className="page-header-ui-content pt-10">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h1 className="page-header-ui-title">I'm Muzammil</h1>
                                <h1 className="page-header-ui-title">UI/UX Designer and Fronted Developer</h1>
                                <p className="page-header-ui-text mb-5">
                                To contribute valuably to an organization through creation of cordial environment, this stimulates teamwork and uses my experience as a tool to effectively enforce systematic approach of fulfilling task.
                                </p>


                                <Link className="btn btn-teal fw-500 me-2" to="/Portfolio">
                                    View Portfolio
                                </Link>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block" data-aos="fade-up" data-aos-delay="100"><img src="https://i.postimg.cc/Bbb2N8Jh/home.png" className="img-fluid" alt="home" /></div>
                        </div>
                    </div>
                </div>

            </header>


            

        </>
    )
}

export default Home;

