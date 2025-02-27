import React from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaPhoneSquareAlt, FaGlobe, FaPrint } from 'react-icons/fa';
import {languages, languagesProps} from "../pages";

type SidebarProps = {
    data: {
        name: string;
        position: string;
        city: string;
    };
    changeLanguage: (e: languagesProps) => void;
    lang: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ data, changeLanguage, lang }) => {
    const { name, position, city } = data;
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
                <div className='controls'>
                {languages.map(i => (
                    <button key={`lang-${i}`} onClick={() => changeLanguage(i)} className={`btn btn-default hidden-print ${i === lang && 'btn-active'}`}>
                        {i === lang && <FaGlobe/>}<span>{i.toUpperCase()}</span>
                    </button>
                ))}
                <button className="btn btn-default hidden-print" onClick={() => window.print()}>
                    <FaPrint /> <span>Print</span>
                </button>
                </div>
                <a href="./Recommendation_letter.Oleksandr_Chernetskyi.pdf" target={'_blank'} className={'hidden-print'}>Mindnow cover letter</a>
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
