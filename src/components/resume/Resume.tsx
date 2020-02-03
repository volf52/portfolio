import React from "react";
import Skills from "./Skills";

export const Resume = () => {
    return (
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
                                Bachelors in Computer Engineering <span>•</span>{" "}
                                <em className="date">May 2021</em>
                            </p>
                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. Nullam dictum felis eu pede mollis
                                pretium.
                            </p> */}
                        </div>
                    </div>{" "}
                    {/* item end */}
                    {/* <div className="row item">
                        <div className="twelve columns">
                            <h3>School of Cool Designers</h3>
                            <p className="info">
                                B.A. Degree in Graphic Design <span>•</span>{" "}
                                <em className="date">March 2003</em>
                            </p>
                            <p>
                                This is Photoshop's version of Lorem Ipsum.
                                Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt auctor a
                                ornare odio. Sed non mauris vitae erat
                            </p>
                        </div>
                    </div>{" "} */}
                    {/* item end */}
                </div>{" "}
                {/* main-col end */}
            </div>{" "}
            {/* End Education */}
            {/* Work
      ----------------------------------------------- */}
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Awesome Design Studio</h3>
                            <p className="info">
                                Senior UX Designer <span>•</span>{" "}
                                <em className="date">March 2010 - Present</em>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. Nullam dictum felis eu pede mollis
                                pretium.
                            </p>
                        </div>
                    </div>{" "}
                    {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Super Cool Studio</h3>
                            <p className="info">
                                UX Designer <span>•</span>{" "}
                                <em className="date">
                                    March 2007 - February 2010
                                </em>
                            </p>
                            <p>
                                This is Photoshop's version of Lorem Ipsum.
                                Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt auctor a
                                ornare odio. Sed non mauris vitae erat
                            </p>
                        </div>
                    </div>{" "}
                    {/* item end */}
                </div>{" "}
                {/* main-col end */}
            </div>{" "}
            {/* End Work */}
            {/* Skills
      ----------------------------------------------- */}
            <Skills />
            {/* End skills */}
        </section>
    );
};
