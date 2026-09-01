import React from 'react';

type AdditionalInfoProps = {
    title: string;
    data: {
        title: string;
        details: string[]
    };
};

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ title, data }) => {
    const { title: dataTitle, details} = data;
    return (
        <div className="information-box">
            <h2>{title}:</h2>
            <h3><strong>{dataTitle}</strong></h3>
            <div className="row">
                <ul>
                    {details.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};
