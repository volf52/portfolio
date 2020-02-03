import React from "react";
import styled, { keyframes } from "styled-components";

const Skill = (width: number) => {
    const keyframe = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: ${width}%;
    }
    `;
    return styled.span`
        width: ${width}%;
        animation: ${keyframe} 2s ease;
    `;
};

const SkillLI: React.FC<{ width: number; name: string }> = props => {
    const Comp = Skill(props.width);
    return (
        <li>
            <Comp className="bar-expand" />
            <em>{props.name}</em>
        </li>
    );
};

const Skills = () => {
    return (
        <div className="row skill">
            <div className="three columns header-col">
                <h1>
                    <span>Skills</span>
                </h1>
            </div>
            <div className="nine columns main-col">
                <p>
                    I have experience building web applications using the MERN
                    stack, ASP.Net Core Ecosystem, Django and Flask, REST and
                    GraphQL APIs using FastAPI (Python), C# and Express/Hapi,
                    usually to serve my Machine Learning models (mostly focused
                    on NLP). <br /> For the complete list, you can check out my{" "}
                    <a
                        href="https://www.linkedin.com/in/rslnkrmt2552/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>LinkedIn page</strong>
                    </a>{" "}
                    .
                </p>
                <div className="bars">
                    <ul className="skills">
                        <SkillLI width={95} name="Python" />
                        <SkillLI width={85} name="Javascript / Typescript" />
                        <SkillLI width={70} name="C# (ASP.Net Core)" />
                        <SkillLI width={90} name="FullStack Dev" />
                        <SkillLI
                            width={85}
                            name="Natural Language Processing"
                        />
                        <SkillLI width={65} name="Java" />
                        <SkillLI width={90} name="Machine Learning" />
                    </ul>
                </div>
                {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
        </div>
    );
};

export default Skills;
