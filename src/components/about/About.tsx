import React from "react";

export const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src="images/profilepic.png"
                        alt=""
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                        I am a Python/Javascript ( Web / Software ) Developer
                        and Machine Learning Engineer with a "deep" interest in
                        robotics, reinforcement learning, data analysis and
                        compiler design. Currently studying Computer Engineering
                        at Yildiz Technical University, Istanbul. You can find
                        more details about me at my{" "}
                        <a
                            href="https://www.linkedin.com/in/rslnkrmt2552/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>LinkedIn</strong>
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://github.com/volf52"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>Github</strong>
                        </a>{" "}
                        page.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Muhammad Arslan</span>
                                <br />
                                <span>
                                    Safa Vakfi Edirnekapi Erkek Ogrenci Yurdu
                                    <br />
                                    Derviş Ali mah. Uçbey sok. No:7 FATİH,
                                    Istanbul 34087 Turkey
                                </span>
                                <br />
                                <span>+9050500993313</span>
                                <br />
                                <span>rslnkrmt2552@gmail.com</span>
                            </p>
                        </div>
                        {/* <div className="columns download">
                            <p>
                                <a href="/#" className="button">
                                    <i className="fa fa-download" />
                                    Download Resume
                                </a>
                            </p>
                        </div> */}
                    </div>{" "}
                    {/* end row */}
                </div>{" "}
                {/* end .main-col */}
            </div>
        </section>
    );
};
