import React from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaPhoneSquareAlt, FaGlobe, FaPrint } from 'react-icons/fa';

type SidebarProps = {
    data: {
        name: string;
        position: string;
        city: string;
    };
    changeLanguage: (e: 'en' | 'ru') => void;
    lang: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ data, changeLanguage, lang }) => {
    const { name, position, city } = data;
    const language = lang === 'en' ? 'ru' : 'en';
    return (
        <>
            <img src="./fozzy.jpg" alt={name} width="274" className={'photo'} />
            <div className={'user-info'}>
                <div className="user-name">
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
                <ul className="contact-list">
                    <li>
                        <FaMapMarkerAlt /> {city}
                    </li>
                    <li>
                        <FaLinkedin /> <a href="https://linkedin.com/fozzy2603">LinkedIn</a>
                    </li>
                    <li>
                        <FaPhoneSquareAlt /> +38 (097) 910-82-86
                    </li>
                </ul>
                <button onClick={() => changeLanguage(language)} className={'btn btn-default hidden-print'}>
                    <FaGlobe /> <span>{language.toUpperCase()}</span>
                </button>
                <button className="btn btn-default hidden-print" onClick={() => window.print()}>
                    <FaPrint /> <span>Print</span>
                </button>

                {/* <a
                className="btn btn-default hidden-print"
                href="javascript:void(location.href='http://www.pdfspot.com/html-to-pdf-converter.aspx?url=' + escape(location.href)+'&pdf_name=' + escape('') + '&pdf_orientation=portrait&pdf_page_size=A4&scripts_enabled=true' )"
            >
                <i className="fa fa-download" aria-hidden="true"></i> Download
            </a>*/}
            </div>
        </>
    );
};
