import React from 'react';

type WorkExperienceProps = {
    title: string;
    lang: string;
    data: {
        date: string;
        company: string;
        position: string;
    }[];
};

export const WorkExperience: React.FC<WorkExperienceProps> = ({ title, lang, data }) => {
    return (
        <div className="information-box experience">
            <h2>{title}:</h2>
            {data.map(({ date, company, position }, index) => (
                <div className="row" key={`row-${index}`}>
                    <span className={`date ${lang === 'ru' && 'is-ru'}`}>{date}</span>
                    <p className="company-info">
                        <span className="company">{company}</span>
                        <span className="vocation">{position}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};
