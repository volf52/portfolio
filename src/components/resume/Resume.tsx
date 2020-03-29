import React from "react";
import Skills from "./Skills";
import Work from "./Work";

export const Resume = () => {
    return (
        <React.Fragment>
            <section id="resume">
                {/* Education
      ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Yildiz Technical University</h3>
                                <p className="info">
                                    Bachelors in Computer Engineering{" "}
                                    <span>•</span>{" "}
                                    <em className="date">May 2021</em>
                                </p>
                            </div>
                        </div>{" "}
                        {/* item end */}
                    </div>{" "}
                    {/* main-col end */}
                </div>{" "}
                {/* End Education */}
                {/* Work */}
                <Work />
                {/* End Work */}
            </section>
            <section id="skills">
                <Skills />
            </section>
        </React.Fragment>
    );
};
