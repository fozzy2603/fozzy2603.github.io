const ability = {
    skills: [
        'HTML5 / CSS3',
        'JavaScript / jQuery',
        'React / NextJS / MobX',
        'Bootstrap',
        'Semantic Markup',
        'Email Templates',
        'Responsive WebDesign',
        'CMS: PrestaShop, Opencart, Drupal, Ucoz ...',
    ],
    tools: [
        'Adobe Photoshop',
        'Figma / Sketch / Zeplin',
        'PixelPerfect',
        'Grunt / Gulp / Webpack',
        'Webstorm / VS Code',
        'Sass / Less',
        'Git',
    ],
};

export const data = {
    en: {
        sidebar: {
            name: 'Oleksandr Chernetskyi',
            position: 'React Frontend Developer, HTML/CSS Coder',
            city: 'Kyiv',
        },
        titles: {
            workExperience: 'Work experience',
            skills: 'Skills',
            tools: 'Tools',
            languages: 'Languages',
            education: 'Education',
            trainings: 'Trainings',
            qualities: 'Personal qualities',
        },
        qualities: 'Responsible, persistent, friendly, honest, positive attitude, communicative.',
        workExperience: [
            {
                date: '2020 Aug. - Present',
                company: 'Mindnow',
                position: 'React Frontend Developer',
            },
            {
                date: '2018 May. - 2020 Jul.',
                company: 'Es.bet / KitCode / Gorilla (Kyiv)',
                position: 'React Frontend Developer',
            },
            {
                date: '2015 Oct. - 2018 May.',
                company: 'Dreamscape Networks / Siteplus (Kyiv)',
                position: 'Frontend Developer',
            },
            {
                date: '2014 Apr. - 2015 Sep.',
                company: 'Rexsoft (Khmelnitsky)',
                position: 'Frontend Developer',
            },
            {
                date: '2011 Apr. - 2014 Apr.',
                company: 'Freelance',
                position: 'Frontend Developer',
            },
            {
                date: '2010 Apr. - 2011 Feb.',
                company: 'WebPC (Kharkiv)',
                position: 'Frontend Developer',
            },
            {
                date: '2009 Oct. - 2010 Feb.',
                company: 'W3 Ukraine (Kharkiv)',
                position: 'HTML/CSS Coder',
            },
        ],
        ability: {
            ...ability,
            languages: ['Ukrainian', 'Russian', 'English'],
        },
        education: {
            university: {
                date: '2004 - 2009',
                name: 'Kharkiv National University of Radioelectronics',
                department: 'Department of Artificial Intelligence',
                branch: 'Engineer of Computer-Aided Systems of Production Control',
            },
            trainings: [
                {
                    date: '2008 Oct. - 2008 Dec.',
                    info: 'Validio Seo Training',
                },
                {
                    date: '2009 Sep. - 2009 Dec.',
                    info: 'W3 Ukraine HTML/CSS markup training',
                },
            ],
        },
    },
    ru: {
        sidebar: {
            name: 'Александр Чернецкий',
            position: 'React Frontend Developer, HTML/CSS Coder',
            city: 'Киев',
        },
        titles: {
            workExperience: 'Опыт работы',
            skills: 'Навыки',
            tools: 'Инструменты',
            languages: 'Языки',
            education: 'Образование',
            trainings: 'Курсы',
            qualities: 'Персональные качества',
        },
        qualities:
            'Ответственный, настойчив, быстро обучаем, дружелюбный, честный, позитивно настроен, коммуникабельный.',
        workExperience: [
            {
                date: '2020 Aug. - Сегодня',
                company: 'Mindnow',
                position: 'React Frontend Developer',
            },
            {
                date: 'Май 2018 - Июль 2020',
                company: 'Es.bet / KitCode / Gorilla (Киев)',
                position: 'React Frontend Developer',
            },
            {
                date: 'Октябрь 2015 - Май 2018',
                company: 'Dreamscape Networks / Siteplus (Киев)',
                position: 'Frontend Developer',
            },
            {
                date: 'Апрель 2014 - Сентябрь 2015',
                company: 'Rexsoft (Хмельницкий)',
                position: 'Frontend Developer',
            },
            {
                date: '2011 Апрель - 2014 Апрель',
                company: 'Freelance',
                position: 'Frontend Developer',
            },
            {
                date: '2010 Апрель - 2011 Февраль',
                company: 'WebPC (Харьков)',
                position: 'Frontend Developer',
            },
            {
                date: '2009 Октябрь - 2010 Февраль',
                company: 'W3 Ukraine (Харьков)',
                position: 'HTML/CSS Coder',
            },
        ],
        ability: {
            ...ability,
            languages: ['Украинский', 'Русский', 'Английский'],
        },
        education: {
            university: {
                date: '2004 - 2009',
                name: 'Харьковский Национальный Университет Радиоэлектроники',
                department: 'Интеллектуальные системы принятия решений',
                branch: 'Специалист по автоматизированным системам управления производством',
            },
            trainings: [
                {
                    date: 'Октябрь 2008 - Декабрь 2008',
                    info: 'Validio Seo Training',
                },
                {
                    date: '2009 Сентябрь - 2009 Декабрь',
                    info: 'W3 Ukraine - Курсы HTML/CSS',
                },
            ],
        },
    },
};
