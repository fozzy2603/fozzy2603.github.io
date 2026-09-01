import React from 'react';

type AdditionalInfoProps = {
    title: string;
    lang: string;
    data: {
        title: string;
        details: string[]
    };
};

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ title, lang, data }) => {
    const { title: dataTitle, details,...props} = data;
    console.log(props)
    const isLarge = lang === 'ru' || lang === 'ua';
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
