import React from 'react';

export const PersonalQualities = ({ data, title }: { data: string; title: string }) => {
    return (
        <p>
            <strong>{title}:</strong> {data}
        </p>
    );
};
