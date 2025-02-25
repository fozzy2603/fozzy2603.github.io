import React from 'react';

type WorkExperienceProps = {
    title: string;
    lang: string;
    data: {
        date: string;
        company: string;
        position: string;
        details: string[];
    }[];
};

export const WorkExperience: React.FC<WorkExperienceProps> = ({ title, lang, data }) => {
    return (
        <div className="information-box experience">
            <h2>{title}:</h2>
            {data.map(({ date, company, position, details }, index) => (
                <div className="row" key={`row-${index}`}>
                    <span className={`date ${lang === 'ru' && 'is-ru'}`}>{date}</span>
                    <div className="company-info">
                        <div className={'info-wrap'}>
                            <span className="company">{company}</span>
                            <span className="vocation">{position}</span>
                        </div>
                        {
                            details && (
                                <ul className={'details'}>
                                    {
                                        details.map((item: string, i: number) => (
                                            <li key={`item-${i}`}>{item}</li>
                                        ))
                                    }

                                </ul>
                            )
                        }

                    </div>
                </div>
            ))}
        </div>
    );
};
