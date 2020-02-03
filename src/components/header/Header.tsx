import React from "react";

export const Header: React.FC = () => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="/#" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Projects
                        </a>
                    </li>
                    {/* <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li> */}
                </ul>{" "}
                {/* end #nav */}
            </nav>{" "}
            {/* end #nav-wrap */}
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm Arslan.</h1>
                    <h3>
                        I'm a{" "}
                        <span>
                            Fullstack Developer (Python / React / C# / Java)
                        </span>{" "}
                        and <span>Machine Learning Engineer</span> creating
                        awesome and effective web apps and bots. Let's{" "}
                        <a className="smoothscroll" href="#about">
                            start scrolling{" "}
                        </a>
                        and learn more{" "}
                        <a className="smoothscroll" href="#about">
                            about me
                        </a>
                        .
                    </h3>
                    <hr />
                    <ul className="social">
                        <li>
                            <a
                                href="https://github.com/volf52"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/rslnkrmt2552/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://stackoverflow.com/users/4567986/volf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-stack-overflow" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.freecodecamp.org/volf52"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-free-code-camp" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/volf_52"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        {/* <li>
                            <a href="/#">
                                <i className="fab fa-skype" />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle" />
                </a>
            </p>
        </header>
    );
};
