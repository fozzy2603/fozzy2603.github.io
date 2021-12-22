import React from 'react';

type SkillsProps = {
    titles: {
        tools: string;
        skills: string;
        languages: string;
    };
    data: {
        skills: string[];
        tools: string[];
        languages: string[];
    };
};
export const Skills: React.FC<SkillsProps> = ({ titles, data }) => {
    const { skills, tools, languages } = data;
    const getItems = (list: string[]) => list.map((item, index) => <li key={`item-${index}`}>{item}</li>);
    return (
        <div className="information-box skills">
            <div className="row">
                <div className="skill-box">
                    <h2>{titles.skills}:</h2>
                    <ul>{getItems(skills)}</ul>
                </div>
                <div className="skill-box">
                    <h2>{titles.tools}:</h2>
                    <ul>{getItems(tools)}</ul>
                </div>
                <div className="skill-box">
                    <h2>{titles.languages}:</h2>
                    <ul>{getItems(languages)}</ul>
                </div>
            </div>
        </div>
    );
};
