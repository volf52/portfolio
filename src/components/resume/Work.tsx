import React from "react";

const workData = [
    {
        company: "Talentra Recruitment Agency",
        titles: [
            {
                title: "C# / Python Developer (Freelance)",
                start: "March 2020",
                work: [
                    "Developing an annotation tool to convert company's data into proper datasets to be used with our machine learning NLP models",
                    "TECH: Asp.NET core MVC, Bootstrap 4, CSHTML",
                ],
            },
            {
                title: "Fullstack Developer",
                start: "April 2019",
                end: "March 2020",
                work: [
                    "In charge of designing and developing the company’s flagship online platform",
                    "Built multiple APIs to expose services for document parsing and information extraction using NLP",
                    "Chose the tech stack used by the company and defined the code and test standards",
                    "Enhanced access control, authorization modules, database indexing, SEO, TTI and Lighthouse score",
                    "Reduced run time errors by introducing linters and types checking",
                    "TECH: Typescript, GraphQL, React, Express, MongoDB, Redux, Antd, Yup, Formik, Heroku, Webpack, Babel, Craco, Passport, Dotenv",
                ],
            },
            {
                title: "Machine Learning Engineer",
                start: "Dec 2018",
                end: "March 2020",
                work: [
                    "Developed new parsers for multiple CV and job ad formats, increasing accuracy from 40% to 93% and processing time down to less than a 30 seconds per document",
                    "Developed classifier models to classify and catalogue company’s huge collection of documents",
                    "Developed classifier model to predict the best suited jobs for a person based on their CV content",
                    "Working on developing pipeline to find and score the best possible candidates for a job based on the job ad",
                    "TECH: Pandas, NLTK, Spacy, Gensim, Jupyter, Pytorch",
                ],
            },
        ],
    },
];

const Work = () => {
    return (
        <div className="row work">
            <div className="three columns header-col">
                <h1>
                    <span>Work</span>
                </h1>
            </div>
            <div className="nine columns main-col">
                {workData.map(val => (
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>{val.company}</h3>

                            {val.titles.map(title => (
                                <>
                                    <hr />
                                    <strong className="info">
                                        {title.title} <span>•</span>{" "}
                                        <em className="date">
                                            {title.start} -{" "}
                                            {title.end || "Present"}
                                        </em>
                                    </strong>
                                    <p>
                                        <ul>
                                            {title.work.map(i => (
                                                <li>• {i}.</li>
                                            ))}
                                        </ul>
                                    </p>
                                </>
                            ))}
                            <hr />
                        </div>
                    </div>
                ))}
                {/* item end */}
            </div>{" "}
            {/* main-col end */}
        </div>
    );
};

export default Work;
