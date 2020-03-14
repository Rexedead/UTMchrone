$(function () {

    $(".search-input").keyup(function () {

        var searchString = $(this).val();
        console.log(searchString);
        $('#jstree').jstree('search', searchString);
    });


    $('#jstree').jstree({
        'core': {

            'data': [{
                "id": "zakupki",
                "text": "Закупки по 44-ФЗ, 223-ФЗ, 275-ФЗ",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-meteor",
                "children": [{
                    "text": "none",

                    "data": {
                        "short": "none"
                    },
                },
                {
                    "text": "Закупки по 44-ФЗ",

                    "data": {
                        "short": "44-fz"
                    },
                },
                {
                    "text": "Закупки по 223-ФЗ",

                    "data": {
                        "short": "223-fz"
                    },
                },
                {
                    "text": "44-ФЗ и 223-ФЗ",

                    "data": {
                        "short": "44-fz-223-fz"
                    },
                },
                {
                    "text": "Повышение квалификации 44-ФЗ",
                    "data": {
                        "short": "advanced-training-44-fz"
                    }
                },
                {
                    "text": "Повышение квалификации 223-ФЗ",
                    "data": {
                        "short": "advanced-training-223-fz"
                    }
                },
                {
                    "text": "Дистанционное обучение 44-ФЗ",
                    "data": {
                        "short": "distance-learning-44-fz"
                    }
                },
                {
                    "text": "Дистанционное обучение 223-ФЗ",
                    "data": {
                        "short": "distance-learning-223-fz"
                    }
                },
                {
                    "text": "Повышение квалификации",
                    "data": {
                        "short": "advanced-training-goszakupki"
                    }
                },
                {
                    "text": "Электронные закупки",
                    "data": {
                        "short": "elekronnye-torgi"
                    }
                },
                {
                    "text": "Дистанционное обучение",
                    "data": {
                        "short": "distance-learning"
                    }
                },
                {
                    "text": "Профпереподготовка",
                    "data": {
                        "short": "retraining"
                    }
                },
                {
                    "text": "Для начинающих",
                    "data": {
                        "short": "for-beginners"
                    }
                },
                {
                    "text": "Обучение для поставщиков",
                    "data": {
                        "short": "for-suppliers"
                    }
                },
                {
                    "text": "Управление госзакупками",
                    "data": {
                        "short": "management-zakupki"
                    }
                }
                ],
            },
            {
                "id": "hr",
                "text": "Управление персоналом",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-user-friends",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление персоналом",
                    "data": {
                        "short": "upravlenie-personalom"
                    }
                },
                {
                    "text": "Подбор и адаптация персонала",
                    "data": {
                        "short": "podbor-i-adaptacija-personala"
                    }
                },
                {
                    "text": "Мотивация и оплата труда",
                    "data": {
                        "short": "motivacija-i-oplata-truda"
                    }
                },
                {
                    "text": "Обучение и развитие персонала",
                    "data": {
                        "short": "obuchenie-i-razvitie-personala"
                    }
                },
                {
                    "text": "Кадровый менеджмент",
                    "data": {
                        "short": "kadrovyj-menedzhment"
                    }
                },
                {
                    "text": "Трудовое право",
                    "data": {
                        "short": "trudovoe-pravo"
                    }
                },
                {
                    "text": "Кадровое делопроизводство",
                    "data": {
                        "short": "kadrovoe-deloproizvodstvo"
                    }
                },
                {
                    "text": "Охрана труда",
                    "data": {
                        "short": "ohrana-truda"
                    }
                },
                {
                    "text": "Оценка и аттестация персонала",
                    "data": {
                        "short": "ocenka-i-attestacija-personala"
                    }
                },
                {
                    "text": "Экономика труда",
                    "data": {
                        "short": "jekonomika-truda"
                    }
                },
                {
                    "text": "Кадровая безопасность",
                    "data": {
                        "short": "kadrovaja-bezopasnost"
                    }
                },
                {
                    "text": "Профессиональные стандарты",
                    "data": {
                        "short": "prof-standarty"
                    }
                },
                {
                    "text": "Корпоративная культура",
                    "data": {
                        "short": "corporate-culture"
                    }
                }


                ]
            },
            {
                "id": "finance",
                "text": "Финансы. Экономика",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-piggy-bank",
                "children": [{

                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление финансами",
                    "data": {
                        "short": "upravlenie-finansami"
                    }
                },
                {
                    "text": "Управленческий учет",
                    "data": {
                        "short": "upravlencheskij-uchet"
                    }
                },
                {
                    "text": "Финансовый анализ",
                    "data": {
                        "short": "finansovyj-analiz"
                    }
                },
                {
                    "text": "Финансовый контроль",
                    "data": {
                        "short": "finansovyj-kontrol"
                    }
                },
                {
                    "text": "Управление экономикой",
                    "data": {
                        "short": "upravlenie-ekonomikoj"
                    }
                },
                {
                    "text": "Инвестиции",
                    "data": {
                        "short": "investicii"
                    }
                },
                {
                    "text": "Холдинги",
                    "data": {
                        "short": "holdingi"
                    }
                },
                {
                    "text": "Планирование и бюджетирование",
                    "data": {
                        "short": "planirovanie-i-bjudzhetirovanie"
                    }
                },
                {
                    "text": "Рынок ценных бумаг",
                    "data": {
                        "short": "rynok-cennyh-bumag"
                    }
                },
                {
                    "text": "Банковское дело",
                    "data": {
                        "short": "bankovskoe-delo"
                    }
                },
                {
                    "text": "Оффшоры",
                    "data": {
                        "short": "offshore"
                    }
                }
                ]
            },
            {
                "id": "secretariat",
                "text": "Секретариат и делопроизводство",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-tasks",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Секретариат и управление офисом",
                    "data": {
                        "short": "sekretariat-i-upravlenie-ofisom"
                    }
                },
                {
                    "text": "Делопроизводство",
                    "data": {
                        "short": "deloproizvodstvo"
                    }
                },
                {
                    "text": "Архивное дело",
                    "data": {
                        "short": "arhivnoe-delo"
                    }
                },
                {
                    "text": "Деловая культура",
                    "data": {
                        "short": "delovaja-kultura"
                    }
                }
                ]
            },
            {
                "id": "account",
                "text": "Бухгалтерский учет и налоги",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-hand-holding-usd",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Налоги и налоговое планирование",
                    "data": {
                        "short": "nalogi-i-nalogovoe-planirovanie"
                    }
                },
                {
                    "text": "Бухгалтерский учет и аудит",
                    "data": {
                        "short": "buhuchet-i-audit"
                    }
                },
                {
                    "text": "МСФО",
                    "data": {
                        "short": "msfo"
                    }
                },
                {
                    "text": "Курсы для начинающих бухгалтеров",
                    "data": {
                        "short": "kursy-dlya-nachinaushih-buhgalterov"
                    }
                },
                {
                    "text": "Повышение квалификации",
                    "data": {
                        "short": "povyshenie-kvalifikacii-professionalnyh-buhgalterov"
                    }
                },
                {
                    "text": "Аттестация и профподготовка",
                    "data": {
                        "short": "attestatsiya-i-profpodgotovka-buhgalterov"
                    }
                }
                ]
            },
            {
                "id": "ved",
                "text": "ВЭД",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-ship",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Внешнеэкономическая деятельность",
                    "data": {
                        "short": "vneshnejekonomicheskaja-dejatelnost"
                    }
                }
                ]
            },
            {
                "id": "right",
                "text": "Право",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-gavel",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Общее право",
                    "data": {
                        "short": "obshhee-pravo"
                    }
                },
                {
                    "text": "Земельное право",
                    "data": {
                        "short": "zemelnoe-pravo"
                    }
                },
                {
                    "text": "Гражданское право",
                    "data": {
                        "short": "grazhdanskoe-pravo"
                    }
                },
                {
                    "text": "Трудовое право",
                    "data": {
                        "short": "trudovoe-pravo"
                    }
                },
                {
                    "text": "Налоговое право",
                    "data": {
                        "short": "nalogovoe-pravo"
                    }
                },
                {
                    "text": "Договорное право",
                    "data": {
                        "short": "dogovornoe-pravo"
                    }
                },
                {
                    "text": "Процессуальное право",
                    "data": {
                        "short": "processualnoe-pravo"
                    }
                },
                {
                    "text": "Муниципальное право",
                    "data": {
                        "short": "municipalnoe-pravo"
                    }
                },
                {
                    "text": "Корпоративное право",
                    "data": {
                        "short": "korporativnoe-pravo"
                    }
                },
                {
                    "text": "Финансовое право",
                    "data": {
                        "short": "finansovoe-pravo"
                    }
                },
                {
                    "text": "Градостроительное право",
                    "data": {
                        "short": "gradostroitelnoe-pravo"
                    }
                },
                {
                    "text": "Административное право",
                    "data": {
                        "short": "administrativnoe-pravo"
                    }
                }
                ]
            },
            {
                "id": "logistika",
                "text": "Логистика. Закупки. Снабжение",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-truck",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление логистикой",
                    "data": {
                        "short": "upravlenie-logistikoj"
                    }
                },
                {
                    "text": "Транспортная логистика",
                    "data": {
                        "short": "transportnaja-logistika"
                    }
                },
                {
                    "text": "Складская логистика",
                    "data": {
                        "short": "skladskaja-logistika"
                    }
                },
                {
                    "text": "Закупки и снабжение",
                    "data": {
                        "short": "zakupki-i-snabzhenie"
                    }
                }
                ]
            },
            {
                "id": "management",
                "text": "Менеджмент",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-tasks",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Общий менеджмент",
                    "data": {
                        "short": "obshhij-menedzhment"
                    }
                },
                {
                    "text": "Стратегический менеджмент",
                    "data": {
                        "short": "strategicheskij-menedzhment"
                    }
                },
                {
                    "text": "Инновационный менеджмент",
                    "data": {
                        "short": "innovacionnyj-menedzhment"
                    }
                },
                {
                    "text": "Управление проектами",
                    "data": {
                        "short": "upravlenie-proektami"
                    }
                },
                {
                    "text": "Управление бизнес-процессами",
                    "data": {
                        "short": "upravlenie-biznes-processami"
                    }
                },
                {
                    "text": "Управление ресурсами",
                    "data": {
                        "short": "upravlenie-resursami"
                    }
                },
                {
                    "text": "Управленческие навыки",
                    "data": {
                        "short": "upravlencheskie-navyki"
                    }
                },
                {
                    "text": "Торговый менеджмент",
                    "data": {
                        "short": "torgovyj-menedzhment"
                    }
                }
                ]
            },
            {
                "id": "safety",
                "text": "Безопасность",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-user-shield",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Корпоративная безопасность",
                    "data": {
                        "short": "korporativnaja-bezopasnost"
                    }
                },
                {
                    "text": "Экономическая безопасность",
                    "data": {
                        "short": "jekonomicheskaja-bezopasnost"
                    }
                },
                {
                    "text": "Кадровая безопасность",
                    "data": {
                        "short": "kadrovaja-bezopasnost"
                    }
                },
                {
                    "text": "Информационная безопасность",
                    "data": {
                        "short": "informacionnaja-bezopasnost"
                    }
                },
                {
                    "text": "Пожарная безопасность",
                    "data": {
                        "short": "pozharnaja-bezopasnost"
                    }
                },
                {
                    "text": "Охрана труда",
                    "data": {
                        "short": "ohrana-truda"
                    }
                },
                {
                    "text": "Промышленная безопасность",
                    "data": {
                        "short": "promyshlennaja-bezopasnost"
                    }
                }
                ]
            },
            {
                "id": "podft",
                "text": "Торговля",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fab fa-sellsy",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },
            {
                "id": "it",
                "text": "IT. Информационные технологии",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fab fa-twitter",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление IT",
                    "data": {
                        "short": "upravlenie-it"
                    }
                }

                ]
            },
            {
                "id": "marketing",
                "text": "Маркетинг, реклама и PR",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fab fa-adversal",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление маркетингом",
                    "data": {
                        "short": "upravlenie-marketingom"
                    }
                },
                {
                    "text": "Интернет-маркетинг",
                    "data": {
                        "short": "internet-marketing"
                    }
                },
                {
                    "text": "Продуктовый маркетинг",
                    "data": {
                        "short": "produktovyj-marketing"
                    }
                },
                {
                    "text": "Торговый маркетинг",
                    "data": {
                        "short": "torgovyj-marketing"
                    }
                },
                {
                    "text": "Клиентский маркетинг",
                    "data": {
                        "short": "klientskij-marketing"
                    }
                },
                {
                    "text": "Промышленный маркетинг",
                    "data": {
                        "short": "promyshlennyj-marketing"
                    }
                },
                {
                    "text": "Маркетинговые коммуникации",
                    "data": {
                        "short": "marketingovye-kommunikacii"
                    }
                },
                {
                    "text": "Реклама. PR",
                    "data": {
                        "short": "reklama-pr"
                    }
                }

                ]
            },
            {
                "id": "audit",
                "text": "Продажи",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-balance-scale",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление продажами",
                    "data": {
                        "short": "upravlenie-prodazhami"
                    }
                },
                {
                    "text": "Навыки продаж",
                    "data": {
                        "short": "navyki-prodazh"
                    }
                },
                {
                    "text": "Сервис и работа с клиентами",
                    "data": {
                        "short": "servis-i-rabota-s-klientami"
                    }
                }

                ]
            },
            {
                "id": "le",
                "text": "Личная эффективность",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-user-check",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Переговоры и коммуникации",
                    "data": {
                        "short": "peregovory-i-kommunikacii"
                    }
                },
                {
                    "text": "Управленческие навыки",
                    "data": {
                        "short": "upravlencheskie-navyki"
                    }
                },
                {
                    "text": "Повышение личной эффективности",
                    "data": {
                        "short": "povyshenie-lichnoj-jeffektivnosti"
                    }
                },
                {
                    "text": "Лидерство",
                    "data": {
                        "short": "liderstvo"
                    }
                }

                ]
            },
            {
                "id": "gossektor",
                "text": "Госсектор",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-funnel-dollar",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Финансы",
                    "data": {
                        "short": "finansy-v-gosudarstvennyh-i-municipalnyh-uchrezhdenijah"
                    }
                },
                {
                    "text": "Менеджмент",
                    "data": {
                        "short": "menedzhment-v-gosudarstvennyh-i-municipalnyh-uchrezhdenijah"
                    }
                },
                {
                    "text": "Бухгалтерский учет и налогообложение",
                    "data": {
                        "short": "buhgalterskij-uchet-i-nalogooblozhenie-v-gosudarstvennyh-i-municipalnyh-uchrezhdenijah"
                    }
                },
                {
                    "text": "Правовые вопросы",
                    "data": {
                        "short": "pravovye-voprosy-gosudarstvennyh-i-municipalnyh-uchrezhdenij"
                    }
                },
                {
                    "text": "Управление персоналом",
                    "data": {
                        "short": "upravlenie-personalom-v-gosudarstvennyh-i-municipalnyh-uchrezhdenijah"
                    }
                }

                ]
            },
            {
                "id": "opk",
                "text": "Оборонно-промышленный комплекс",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-bomb",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Гособоронзаказ",
                    "data": {
                        "short": "gosoboronzakaz"
                    }
                },
                {
                    "text": "Бухучет и налоги в ОПК",
                    "data": {
                        "short": "buuchet-nalogi-opk"
                    }
                },
                {
                    "text": "Финансы в ОПК",
                    "data": {
                        "short": "finansi-v-opk"
                    }
                }

                ]
            },


            {
                "id": "proizvodstvo",
                "text": "Производство и промышленность",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-robot",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Управление производством",
                    "data": {
                        "short": "upravlenie-proizvodstvom"
                    }
                },
                {
                    "text": "Производственная логистика",
                    "data": {
                        "short": "proizvodstvennaya-logistika"
                    }
                },
                {
                    "text": "Инновации и развитие производства",
                    "data": {
                        "short": "innovacii-razvitie"
                    }
                },
                {
                    "text": "Управление качеством",
                    "data": {
                        "short": "upravlenie-kachestvom"
                    }
                },
                {
                    "text": "Бережливое производство",
                    "data": {
                        "short": "berezhlivoe-proizvodstvo"
                    }
                },
                {
                    "text": "Производственный персонал",
                    "data": {
                        "short": "proizvodstvennyj-personal"
                    }
                },
                {
                    "text": "Стандартизация и метрология",
                    "data": {
                        "short": "standartizaciya-i-metrologiya"
                    }
                }
                ]
            },


            {
                "id": "tek",
                "text": "Энергетика и энергосбережение",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-bolt",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Бурение. Добыча нефти и газа",
                    "data": {
                        "short": "burenie-oil-gaz"
                    }
                }
                ]
            },


            {
                "id": "zhkh",
                "text": "ЖКХ. Благоустройство",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-building",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Бухучет и налоги в ЖКХ",
                    "data": {
                        "short": "buhuchet-i-nalogi-v-zhkh"
                    }
                },
                {
                    "text": "Коммунальная инфраструктура",
                    "data": {
                        "short": "kommunalnaya-infrastruktura"
                    }
                },
                {
                    "text": "Правовые вопросы в ЖКХ",
                    "data": {
                        "short": "pravo-v-zhkh"
                    }
                },
                {
                    "text": "Регулирование тарифов ЖКХ",
                    "data": {
                        "short": "regulirovanie-tarifov-zhkh"
                    }
                },
                {
                    "text": "Управление ЖКХ",
                    "data": {
                        "short": "upravlenie-zhkh"
                    }
                },
                {
                    "text": "Управление многоквартирным домом",
                    "data": {
                        "short": "upravlenie-mnogokvartirnim-domom"
                    }
                },
                {
                    "text": "Финансы в ЖКХ",
                    "data": {
                        "short": "finansi-v-zhkh"
                    }
                },
                {
                    "text": "ЖКХ. Благоустройство",
                    "data": {
                        "short": "zhkh"
                    }
                }
                ]
            },



            {
                "id": "stroitelstvo-i-nedvizhimost",
                "text": "Строительство и недвижимость",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-campground",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Строительство и недвижимость",
                    "data": {
                        "short": "stroitelstvo-i-nedvizhimost"
                    }
                }
                ]
            },



            {
                "id": "culture",
                "text": "Культура и искусство",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-mortar-pestle",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },


            {
                "id": "medicina",
                "text": "Медицина и Здравоохранение",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-notes-medical",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Финансы",
                    "data": {
                        "short": "finansy-v-medicine"
                    }
                },
                {
                    "text": "Экономика",
                    "data": {
                        "short": "jekonomika-v-medicine"
                    }
                },
                {
                    "text": "Менеджмент",
                    "data": {
                        "short": "menedzhment-v-medicine"
                    }
                },
                {
                    "text": "Бухгалтерский учет и налоги",
                    "data": {
                        "short": "buhuchet-i-nalogi-v-medicine"
                    }
                },
                {
                    "text": "Правовые вопросы",
                    "data": {
                        "short": "pravovye-voprosy-v-medicine"
                    }
                },
                {
                    "text": "Маркетинг и реклама",
                    "data": {
                        "short": "marketing-i-reklama-v-medicine"
                    }
                },
                {
                    "text": "Оплата труда",
                    "data": {
                        "short": "oplata-truda-v-medicine"
                    }
                },
                {
                    "text": "Сервис",
                    "data": {
                        "short": "servis-v-medicine"
                    }
                },
                {
                    "text": "Безопасность",
                    "data": {
                        "short": "bezopasnost-v-medicine"
                    }
                }
                ]
            },



            {
                "id": "bankovskoe-delo",
                "text": "Банковское дело",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-university",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                },
                {
                    "text": "Финансы",
                    "data": {
                        "short": "finansy"
                    }
                },
                {
                    "text": "Менеджмент",
                    "data": {
                        "short": "menedzhment"
                    }
                },
                {
                    "text": "Правовые вопросы",
                    "data": {
                        "short": "pravovye-voprosy"
                    }
                },
                {
                    "text": "Безопасность",
                    "data": {
                        "short": "bezopasnost"
                    }
                },
                {
                    "text": "Бухгалтерский учет и налоги",
                    "data": {
                        "short": "bukhgalterskiy-uchet-i-nalogi"
                    }
                },
                {
                    "text": "Управление персоналом",
                    "data": {
                        "short": "upravlenie-personalom"
                    }
                },
                {
                    "text": "Маркетинг и реклама",
                    "data": {
                        "short": "marketing-i-reklama"
                    }
                },
                {
                    "text": "Сервис и работа с клиентами",
                    "data": {
                        "short": "servis-i-rabota-s-klientami"
                    }
                },
                {
                    "text": "ПОД/ФТ",
                    "data": {
                        "short": "pod-ft"
                    }
                },
                {
                    "text": "Расчетно-кассовое обслуживание",
                    "data": {
                        "short": "raschetno-kassovoe-obsluzhivanie"
                    }
                },
                {
                    "text": "Ценные бумаги",
                    "data": {
                        "short": "tsennye-bumagi"
                    }
                },
                {
                    "text": "Пластиковые карты",
                    "data": {
                        "short": "plastikovye-karty"
                    }
                },
                {
                    "text": "Драгоценные металлы",
                    "data": {
                        "short": "dragotsennye-metally"
                    }
                },
                {
                    "text": "Кредитная работа",
                    "data": {
                        "short": "kreditnaya-rabota"
                    }
                },
                {
                    "text": "Валютные операции",
                    "data": {
                        "short": "valyutnye-operatsii"
                    }
                },
                {
                    "text": "Внутренний контроль и аудит",
                    "data": {
                        "short": "vnutrenniy-kontrol-i-audit"
                    }
                },
                {
                    "text": "Управление рисками",
                    "data": {
                        "short": "upravlenie-riskami"
                    }
                }
                ]
            },


            {
                "id": "corporate",
                "text": "Корпоративное обучение",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-couch",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },




            {
                "id": "FinCont",
                "text": "Бренд",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "far fa-copyright",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },




            {
                "id": "u4center",
                "text": "Учебный центр",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-graduation-cap",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },


            {
                "id": "arenda",
                "text": "Аренда аудиторий",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "far fa-calendar-alt",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },



            {
                "id": "konkurent",
                "text": "Конкуренты",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-binoculars",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },


            {
                "id": "audit-proverka",
                "text": "Аудиторская проверка",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-binoculars",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },


            {
                "id": "offer",
                "text": "Спецпредложение",
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "icon": "fas fa-binoculars",
                "children": [{
                    "text": "none",
                    "data": {
                        "short": "none"
                    }
                }]
            },


            ]
        },
        "search": {

            "case_insensitive": true,
            "show_only_matches": true


        },
        "state": {
            "state_key": "savetree"
        },
        "plugins": ["search", "state", "conditionalselect", "changed"],
        conditionalselect: function (node) {
            return this.is_leaf(node);
        },
    })
});


$("#jstree").delegate(".jstree-open>a", "click.jstree", function (event) {
    $.jstree.reference(this).close_node(this, false, false);
}).delegate(".jstree-closed>a", "click.jstree", function (event) {
    $.jstree.reference(this).open_node(this, false, false);
});



$('#jstree').on("select_node.jstree", function (e, data) {
    upd_tree()
    upd_put_fc_data();
});

function upd_tree() {
    tree_parent_short = $('#jstree').jstree().get_parent($('#jstree').jstree().get_selected(true)[0])
    tree_parent = $('#jstree').jstree().get_path($("#jstree").jstree("get_selected"))[0]
    tree_children_short = $("#jstree").jstree("get_selected", true)[0].data.short
    tree_children = $('#jstree').jstree().get_selected(true)[0].text
    console.log(tree_parent_short)
    console.log(tree_parent)
    console.log(tree_children_short)
    console.log(tree_children)
}