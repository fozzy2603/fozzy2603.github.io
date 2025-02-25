import React from 'react';

type EducationProps = {
    title: string;
    lang: string;
    data: {
        trainings: {
            date: string;
            info: string;
        }[];
        university: {
            date: string;
            name: string;
            department: string;
            branch: string;
        };
    };
};

export const Education: React.FC<EducationProps> = ({ title, lang, data }) => {
    const { university, trainings } = data;
    const isLarge = lang === 'ru' || lang === 'ua';
    return (
        <div className="information-box education">
            <h2>{title}:</h2>
            <div className="row university">
                <span className="date">{university.date}</span>
                <p className="company-info">
                    {university.name} <br />
                    {university.department} <br />
                    {university.branch}
                </p>
            </div>
            <h3>Trainings:</h3>
            {trainings.map(({ date, info }, index) => (
                <div className="row" key={`item-${index}`}>
                    <span className={`date ${isLarge ? 'is-ru' : ''}`}>{date}</span>
                    <p className="company-info">{info}</p>
                </div>
            ))}
        </div>
    );
};
