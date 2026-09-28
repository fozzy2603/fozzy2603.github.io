const ability = {
    skills: [
        'JavaScript, TypeScript, jQuery',
        'React.js, Next.js, MobX, Zustand, TanStack Query, Redux, React Router',
        'HTML5, CSS3',
        'SASS, SCSS, CSS Modules',
        'Bootstrap, Tailwind CSS',
        'SEO, Semantic Markup, Responsive Design, Performance Optimization',
        'REST API, API Integration, Component Design, Reusable Components',
        'Node.js, Express, MongoDB, JWT (personal project)',
        'Cypress, Playwright',
        'Agile, Scrum, Code Review, Mentoring'
    ],
    tools: [
        'Figma, Adobe Photoshop',
        'Codex AI, Cursor, Claude Code, Antigravity',
        'Webstorm, VS Code',
        'Git, GitHub, Bitbucket',
        'Vite, Webpack',
        'Linear, Jira'
    ],
};

export const data = {
    en: {
        sidebar: {
            name: 'Oleksandr Chernetskyi',
            position: 'React Frontend Developer',
            city: 'Remote',
        },
        titles: {
            workExperience: 'Work experience',
            skills: 'Skills',
            tools: 'Tools',
            languages: 'Languages',
            education: 'Education',
            qualities: 'Personal qualities',
            personalProjects: 'Full-Stack Experience',
        },
        summary: "Senior React Frontend Developer building scalable SaaS applications using React, Next.js and TypeScript. Focused on strong UI/UX, clean and maintainable code. Experienced in frontend architecture, performance optimization, and mentoring developers, with a track record of delivering AI-powered products in international, cross-functional teams. Comfortable owning features end-to-end, from architecture decisions to final delivery.",
        qualities: 'Responsible, persistent, friendly, honest, positive attitude, communicative.',
        workExperience: [
            {
                date: '2020 Aug. - Present',
                company: 'Mindnow',
                position: 'Senior React Frontend Developer',
                details: [
                    'Led frontend architecture end-to-end for an AI-powered career platform, from concept through production launch, driving key technical decisions that shaped the product roadmap.',
                    'Rearchitected the API integration layer with shared abstractions and Tanstack Query, cutting frontend boilerplate by ~80% and speeding up new feature delivery by ~30%.',
                    'Delivered production-ready, responsive features in React, Next.js, and TypeScript, including SSR that boosted SEO performance by 60% and raised the Lighthouse performance score from ~60 to 90+.',
                    'Mentored mid-level frontend developers through code reviews, technical guidance, and internal tech talks, helping cut the team\'s production bug rate by roughly 20%.',
                    'Cut page load times by ~40% and improved maintainability through code splitting, lazy loading, bundle analysis, and dependency cleanup.',
                    'Built and maintained a multilingual platform supporting 12 languages, contributing to an estimated 25% growth in the international user base.',
                    'Owned frontend releases end-to-end and integrated Sentry for error monitoring, cutting the time to detect and resolve production issues.',
                    'Worked in Scrum — took part in sprint planning and feature estimation, and reviewed pull requests to keep code quality and delivery predictable.',
                    'Collaborated closely with Product Managers, designers, and backend engineers across a 10-person international team to ship complex features while keeping release cycles fast.',
                ]
            },
            {
                date: '2018 May. - 2020 Jul.',
                company: 'Es.bet / KitCode / Gorilla (Kyiv)',
                position: 'React Frontend Developer',
                details: [
                    'Built scalable React applications for gaming platforms end-to-end, integrating REST APIs and managing state with MobX.',
                    'Redesigned key UI flows, boosting usability and engagement across devices.',
                    'Shipped new features and optimized application performance, working closely with design and backend.',
                ]
            },
            {
                date: '2015 Oct. - 2018 May.',
                company: 'Dreamscape Networks / Siteplus (Kyiv)',
                position: 'Frontend Developer',
                details: [
                    'Built a flexible website-builder platform from the ground up at an early-stage startup.',
                    'Created a full library of website templates, translating designs into pixel-perfect UI.',
                    'Proposed and shipped feature improvements that shaped the product roadmap.',
                ]
            },
        ],
        personalProject: {
            title: 'Full-Stack Web Application — personal project',
            details: [
                'Built a full-stack web application from scratch, developing both the React frontend and a complete Node.js/Express/MongoDB backend.',
                'Designed and implemented backend logic, including REST API endpoints, database models, and a full authentication system — registration, login, and forgot/reset password.',
                'Handled the project end-to-end, from backend architecture and API design to frontend integration.',
            ]
        },
        ability: {
            ...ability,
            languages: ['Ukrainian', 'Russian', 'English (Professional working proficiency)'],
        },
        education: {
            university: {
                date: '2004 - 2009',
                name: 'Kharkiv National University of Radioelectronics',
                department: 'Department of Artificial Intelligence',
                branch: 'Engineer of Computer-Aided Systems of Production Control',
            },
        },
    },
    ru: {
        sidebar: {
            name: 'Александр Чернецкий',
            position: 'React Frontend Developer',
            city: 'Удалённо',
        },
        titles: {
            workExperience: 'Опыт работы',
            skills: 'Навыки',
            tools: 'Инструменты',
            languages: 'Языки',
            education: 'Образование',
            qualities: 'Персональные качества',
            personalProjects: 'Опыт Full-Stack разработки',
        },
        summary: 'Senior React Frontend Developer, создаю масштабируемые SaaS-приложения на React, Next.js и TypeScript. Уделяю внимание сильному UI/UX и чистому, поддерживаемому коду. Есть опыт в архитектуре фронтенда, оптимизации производительности и менторстве разработчиков, а также в разработке AI-продуктов в международных кросс-функциональных командах. Делаю и отвечаю за функционал от начала до конца — от архитектурных решений до релиза',
        qualities:
            'Ответственный, настойчивый, быстро учусь, дружелюбный, честный, позитивный, коммуникабельный.',
        workExperience: [
            {
                date: '2020 Aug. - Сегодня',
                company: 'Mindnow',
                position: 'Senior React Frontend Developer',
                details: [
                    'Отвечал за фронтенд-архитектуру AI-платформы для построения карьеры — провёл продукт от концепции до продакшна и принимал ключевые технические решения, влиявшие на развитие продукта.',
                    'Переписал слой работы с API на общих абстракциях и Tanstack Query: код фронтенда сократился примерно на 80%, а новые фичи стали выходить быстрее — примерно на 30%.',
                    'Выпускал готовый к релизу адаптивный функционал на React, Next.js и TypeScript, внедрил серверный рендеринг (SSR) — SEO-показатели выросли на 60%, а оценка производительности в Lighthouse поднялась примерно с 60 до 90+.',
                    'Менторил мидл-разработчиков — код-ревью, разборы задач, внутренние технические доклады; это помогло снизить количество багов в проде от команды примерно на 20%.',
                    'Ускорил загрузку страниц примерно на 40% и упростил поддержку кода: code splitting, lazy loading, анализ бандла, чистка лишних зависимостей.',
                    'Развивал мультиязычную платформу — поддержка 12 языков помогла нарастить международную аудиторию примерно на 25%.',
                    'Отвечал за релизы фронтенда от начала до конца и внедрил Sentry для мониторинга ошибок — проблемы в проде стали находить и устранять быстрее.',
                    'Работал по Scrum: участвовал в спринт-планировании и оценке задач, ревьюил pull request\'ы — это держало качество кода и сроки поставки предсказуемыми.',
                    'Тесно сотрудничал с продукт-менеджерами, дизайнерами и бэкенд-инженерами в международной команде из 10 человек, помогая доставлять сложные фичи в быстром темпе.',
                ]
            },
            {
                date: 'Май 2018 - Июль 2020',
                company: 'Es.bet / KitCode / Gorilla (Киев)',
                position: 'React Frontend Developer',
                details: [
                    'Строил с нуля масштабируемые React-приложения для игровых платформ, работал с REST API и держал состояние на MobX.',
                    'Переработал ключевые пользовательские сценарии под адаптивность — выросли удобство и вовлечённость.',
                    'Выпускал новые фичи и занимался оптимизацией производительности в связке с дизайнерами и backend-командой.',
                ]
            },
            {
                date: 'Октябрь 2015 - Май 2018',
                company: 'Dreamscape Networks / Siteplus (Киев)',
                position: 'Frontend Developer',
                details: [
                    'С нуля участвовал в создании гибкого конструктора сайтов на ранней стадии стартапа.',
                    'Собрал библиотеку шаблонов и макетов, переводя дизайн в pixel-perfect вёрстку.',
                    'Предлагал улучшения по функциональности и удобству — часть из них легла в roadmap продукта.',
                ]
            },
        ],
        personalProject: {
            title: 'Полноценное веб-приложение — личный проект',
            details: [
                'Сделал full-stack веб-приложение с нуля: React на фронте, Node.js/Express/MongoDB на бэке.',
                'Спроектировал бэкенд-логику — REST API, модели данных и полноценную аутентификацию: регистрацию, вход, восстановление пароля.',
                'Вёл проект целиком, от архитектуры бэкенда и проектирования API до интеграции с фронтендом.',
            ]
        },
        ability: {
            ...ability,
            languages: ['Украинский', 'Русский', 'Английский (Professional working proficiency)'],
        },
        education: {
            university: {
                date: '2004 - 2009',
                name: 'Харьковский Национальный Университет Радиоэлектроники',
                department: 'Интеллектуальные системы принятия решений',
                branch: 'Специалист по автоматизированным системам управления производством',
            },
        },
    },
    ua: {
        sidebar: {
            name: 'Олександр Чернецький',
            position: 'React Frontend Developer',
            city: 'Дистанційно',
        },
        titles: {
            workExperience: 'Досвід роботи',
            skills: 'Навички',
            tools: 'Інструменти',
            languages: 'Мови',
            education: 'Освіта',
            qualities: 'Особисті якості',
            personalProjects: 'Досвід Full-Stack розробки',
        },
        summary: 'Senior React Frontend Developer, створюю масштабовані SaaS-застосунки на React, Next.js та TypeScript. Приділяю увагу якісному UI/UX та чистому коду, який легко підтримувати. Маю досвід в архітектурі фронтенду, оптимізації продуктивності та менторстві розробників, а також у створенні AI-продуктів у міжнародних крос-функціональних командах. Роблю та відповідаю за функціонал від початку до кінця — від архітектурних рішень до релізу.',
        qualities:
            'Відповідальний, наполегливий, швидко навчаюсь, доброзичливий, чесний, позитивний, комунікабельний.',
        workExperience: [
            {
                date: 'Серпень 2020 - Сьогодні',
                company: 'Mindnow',
                position: 'Senior React Frontend Developer',
                details: [
                    'Відповідав за фронтенд-архітектуру AI-платформи для побудови кар\'єри — провів продукт від концепції до продакшену та ухвалював ключові технічні рішення, які впливали на розвиток продукту.',
                    'Переписав шар роботи з API на спільних абстракціях і Tanstack Query: код фронтенду скоротився приблизно на 80%, а нові фічі стали виходити швидше — приблизно на 30%.',
                    'Випускав готовий до релізу адаптивний функціонал на React, Next.js і TypeScript, впровадив серверний рендеринг (SSR) — зросли SEO показники на 60%, а оцінка продуктивності в Lighthouse піднялась приблизно з 60 до 90+.',
                    'Менторив мідл-розробників — код-рев\'ю, розбір задач, внутрішні технічні доповіді; це допомогло знизити кількість багів у проді від команди приблизно на 20%.',
                    'Пришвидшив завантаження сторінок приблизно на 40% і спростив підтримку коду: code splitting, lazy loading, аналіз бандлу, чистка зайвих залежностей.',
                    'Розвивав мультимовну платформу — підтримка 12 мов допомогла наростити міжнародну аудиторію приблизно на 25%.',
                    'Відповідав за релізи фронтенду від початку до кінця та впровадив Sentry для моніторингу помилок — проблеми в проді стали знаходити й усувати швидше.',
                    'Працював за Scrum: брав участь у спринт-плануванні та оцінці задач, рев\'юїв pull request\'и — це тримало якість коду і терміни постачання передбачуваними.',
                    'Тісно співпрацював з продукт-менеджерами, дизайнерами та бекенд-інженерами в міжнародній команді з 10 людей, допомагаючи доставляти складні фічі у швидкому темпі.',
                ]
            },
            {
                date: 'Травень 2018 - Липень 2020',
                company: 'Es.bet / KitCode / Gorilla (Київ)',
                position: 'React Frontend Developer',
                details: [
                    'Будував з нуля масштабовані React-застосунки для ігрових платформ, працював з REST API, керував станом через MobX.',
                    'Переробив ключові користувацькі сценарії під адаптивність — зросли зручність і залученість.',
                    'Випускав нові фічі та займався оптимізацією продуктивності в тандемі з дизайнерами й backend-командою.',
                ]
            },
            {
                date: 'Жовтень 2015 - Травень 2018',
                company: 'Dreamscape Networks / Siteplus (Київ)',
                position: 'Frontend Developer',
                details: [
                    'З нуля брав участь у створенні гнучкого конструктора сайтів на ранній стадії стартапу.',
                    'Зібрав бібліотеку шаблонів і макетів, перетворюючи дизайн на pixel-perfect верстку.',
                    'Пропонував покращення функціональності та зручності — частина з них лягла в roadmap продукту.',
                ]
            },
        ],
        personalProject: {
            title: 'Повноцінний вебзастосунок — особистий проєкт',
            details: [
                'Зробив full-stack вебзастосунок з нуля: React на фронті, Node.js/Express/MongoDB на беку.',
                'Спроєктував бекенд-логіку — REST API, моделі даних і повноцінну автентифікацію: реєстрацію, вхід, відновлення пароля.',
                'Вів проєкт цілком, від архітектури бекенду й проєктування API до інтеграції з фронтендом.',
            ]
        },
        ability: {
            ...ability,
            languages: ['Українська', 'Російська', 'Англійська (Professional working proficiency)'],
        },
        education: {
            university: {
                date: '2004 - 2009',
                name: 'Харківський Національний Університет Радіоелектроніки',
                department: 'Інтелектуальні системи прийняття рішень',
                branch: 'Спеціаліст з автоматизованих систем управління виробництвом',
            },
        },
    }
};