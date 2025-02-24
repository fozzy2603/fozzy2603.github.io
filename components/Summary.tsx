import React from 'react';

export const Summary = ({text}:{text: string}) => {
    return (
        <div className="information-box">
            {text}
        </div>
    );
};