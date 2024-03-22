import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/articles.css";
import YouTube from "react-youtube";

const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "articles");




    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Articles | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">

                <div className="content-wrapper">
                    <div className="articles-logo-container">
                        <div className="articles-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="articles-main-container">
                        <div className="title articles-title">
                            News App Project
                        </div>
                        <YouTube videoId="qDuySGSEGfs" opts={opts}  />

                        <div className="subtitle articles-subtitle">
                            {INFO.articles.description}
                        </div>

                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
