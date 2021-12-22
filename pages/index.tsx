import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { data } from '../data';
import { Education, Sidebar, Skills, WorkExperience, PersonalQualities } from '../components';

const Home: NextPage = () => {
    const [lang, setLang] = useState<'en' | 'ru'>('en');
    const { sidebar, workExperience, ability, education, qualities, titles } = data[lang];

    return (
        <div className="container">
            <Head>
                <title>Oleksandr Chernetskyi, React Frontend Developer</title>
            </Head>
            <div className="main">
                <div className="sidebar">
                    <Sidebar data={sidebar} changeLanguage={setLang} lang={lang} />
                </div>
                <div className="content">
                    <WorkExperience title={titles.workExperience} data={workExperience} lang={lang} />
                    <Skills
                        titles={{ skills: titles.skills, tools: titles.tools, languages: titles.languages }}
                        data={ability}
                    />
                    <Education title={titles.education} data={education} lang={lang} />
                    <PersonalQualities title={titles.qualities} data={qualities} />
                </div>
            </div>
        </div>
    );
};

export default Home;
