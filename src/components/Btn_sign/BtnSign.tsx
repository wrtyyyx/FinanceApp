import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BtnSignProps {
    path?: string;
    clsName?: string;
    text: string;
    type?: string
}

const BtnSign: React.FC<BtnSignProps> = ({ path= '', clsName = '', text,type = 'button' }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(path)}
            className={clsName}
            // @ts-ignore
            type={type}
        >
            {text}
        </button>
    );
};

export default BtnSign;
