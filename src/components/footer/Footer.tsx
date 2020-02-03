import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
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
                    </ul>
                    {/* <ul className="copyright">
                        <li>© Copyright 2014 CeeVee</li>
                        <li>
                            Design by{" "}
                            <a
                                title="Styleshout"
                                href="http://www.styleshout.com/"
                            >
                                Styleshout
                            </a>
                        </li>
                    </ul> */}
                </div>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
