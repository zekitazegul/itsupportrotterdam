document.addEventListener("DOMContentLoaded", () => {

  
/* =====================================================
   ITSupportRotterdam
   Multilingual Site Script
   ===================================================== */

const supportedLanguages = ["en", "nl", "tr", "ru", "uk"];

const languages = {
    en: {

        flag: "🇬🇧",
        code: "EN",
        name: "English",

        site: {
            title: "ITSupportRotterdam | Practical IT Support",
            description:
                "ITSupportRotterdam provides practical IT support for individuals, professionals and small businesses in Rotterdam and surrounding areas."
        },

        nav: {
            home: "Home",
            services: "Services",
            whyUs: "Why Us",
            about: "About",
            howItWorks: "How It Works",
            contact: "Contact"
        },

        cta: {
            support: "Get IT Support"
        },

        hero: {
            eyebrow: "PRACTICAL IT SUPPORT",
            titleStart: "Practical IT Support",
            titleHighlight: "You Can Rely On",
            text:
                "Reliable IT support for computers, software, hardware, networks and everyday technology problems in Rotterdam and surrounding areas.",
            request: "Get IT Support",
            view: "View Services"
        },

        services: {
            eyebrow: "WHAT I OFFER",
            title: "IT Services",
            text:
                "Practical IT support for individuals, professionals and small businesses.",

            cards: {
                computer: {
                    title: "Computer & Laptop Support",
                    text:
                        "Help with computer and laptop problems, Windows issues, performance problems and everyday technical difficulties."
                },
                software: {
                    title: "Windows, Microsoft Office & Software Support",
                    text:
                        "Windows installation and configuration, Microsoft Office installation, licensing guidance, updates and software troubleshooting."
                },
                hardware: {
                    title: "Hardware, PC Upgrades & Maintenance",
                    text:
                        "Hardware upgrades, component replacement, PC maintenance, performance improvements and basic repairs."
                },
                network: {
                    title: "Network & Wi-Fi Support",
                    text:
                        "Home and small-business network setup, Wi-Fi problems, router configuration and connectivity troubleshooting."
                },
                remote: {
                    title: "Remote IT Support",
                    text:
                        "Remote assistance for software problems, configuration, troubleshooting and everyday IT issues."
                },
                migration: {
                    title: "Device Setup & Migration",
                    text:
                        "New computer setup, software installation, data migration and preparing devices for everyday use."
                },
                webcv: {
                    title: "WebCV & Digital Support",
                    text:
                        "Professional WebCV creation and practical digital support for individuals and job seekers."
                }
            }
        },

        about: {
            eyebrow: "ABOUT ITSupportRotterdam",
            title: "Technology made practical.",
            p1:
                "ITSupportRotterdam provides practical IT support for individuals, home users and small businesses. The focus is simple: understand the problem, explain the solution clearly and get your technology working properly again.",
            p2:
                "With experience in IT support, computer hardware, software troubleshooting, networking and digital technology, I provide personal support without unnecessary technical jargon."
        },

        whyUs: {
            eyebrow: "WHY ITSupportRotterdam",
            title: "Practical support with a personal approach.",
            text:
                "Personal IT support focused on solving the actual problem.",
            cards: {
                practical: {
                    title: "Practical IT Support",
                    text:
                        "Straightforward solutions focused on solving the actual problem."
                },
                communication: {
                    title: "Clear Communication",
                    text:
                        "Support available in English, Dutch, Turkish and Russian."
                },
                personal: {
                    title: "Personal Service",
                    text:
                        "Direct and personal support instead of a large helpdesk."
                },
                remote: {
                    title: "Remote & On-Site Support",
                    text:
                        "Remote or on-site support depending on the problem and location."
                },
                jargon: {
                    title: "No Technical Jargon",
                    text:
                        "Clear explanations without unnecessary technical language."
                }
            }
        },

        howItWorks: {
            eyebrow: "HOW IT WORKS",
            title: "Simple from start to finish.",
            text:
                "A straightforward process designed to get your IT problem resolved.",
            steps: {
                contact: {
                    title: "Contact",
                    text:
                        "Tell me what you need help with."
                },
                diagnose: {
                    title: "Diagnose",
                    text:
                        "I identify the problem and explain the available solution."
                },
                fix: {
                    title: "Fix",
                    text:
                        "The issue is resolved remotely or on-site, depending on the situation."
                },
                followUp: {
                    title: "Follow-up",
                    text:
                        "Make sure everything is working properly and answer any remaining questions."
                }
            }
        },

        serviceArea: {
            eyebrow: "SERVICE AREA",
            title: "IT Support in Rotterdam & Surrounding Areas",
            location:
                "Based in Poortugaal, Rotterdam, providing practical IT support in the surrounding area.",
            free:
                "No travel fee in Poortugaal, Rhoon and Hoogvliet.",
            other:
                "For other areas, travel costs are included in the service fee."
        },

        contact: {
            eyebrow: "GET IN TOUCH",
            title: "Need IT help? Let's solve it.",
            text:
                "Having a computer, software, network or other IT problem? Tell me what you need help with and let's find a practical solution.",
            email: "Email Me",
            whatsapp: "WhatsApp"
        },

        form: {
            name: "Name",
            namePlaceholder: "Your name",
            email: "Email",
            emailPlaceholder: "Your email address",
            service: "Service",
            selectService: "Select a service",
            message: "How can I help?",
            messagePlaceholder:
                "Tell me what you need help with...",
            submit: "Send Request",
            success:
                "Thank you. Your service request has been sent."
        },

        menu: {
            open: "Open menu",
            close: "Close menu"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. All rights reserved.",
            tagline:
                "IT Support for Individuals & Small Businesses"
        }

    },
    nl: {

        flag: "🇳🇱",
        code: "NL",
        name: "Nederlands",

        site: {
            title: "ITSupportRotterdam | Praktische IT-ondersteuning",
            description:
                "ITSupportRotterdam biedt praktische IT-ondersteuning voor particulieren, professionals en kleine bedrijven in Rotterdam en omgeving."
        },

        nav: {
            home: "Home",
            services: "Diensten",
            whyUs: "Waarom wij",
            about: "Over mij",
            howItWorks: "Hoe het werkt",
            contact: "Contact"
        },

        cta: {
            support: "IT-ondersteuning aanvragen"
        },

        hero: {
            eyebrow: "PRAKTISCHE IT-ONDERSTEUNING",
            titleStart: "Praktische IT-ondersteuning",
            titleHighlight: "Waarop u kunt vertrouwen",
            text:
                "Betrouwbare IT-ondersteuning voor computers, software, hardware, netwerken en dagelijkse technologieproblemen in Rotterdam en omgeving.",
            request: "IT-ondersteuning aanvragen",
            view: "Bekijk diensten"
        },

        services: {
            eyebrow: "WAT IK AANBIED",
            title: "IT-diensten",
            text:
                "Praktische IT-ondersteuning voor particulieren, professionals en kleine bedrijven.",

            cards: {

                computer: {
                    title: "Computer- & laptopondersteuning",
                    text:
                        "Hulp bij computer- en laptopproblemen, Windows-problemen, prestatieproblemen en dagelijkse technische problemen."
                },

                software: {
                    title: "Windows, Microsoft Office & software",
                    text:
                        "Windows-installatie en configuratie, installatie van Microsoft Office, begeleiding bij licenties, updates en softwareproblemen."
                },

                hardware: {
                    title: "Hardware, pc-upgrades & onderhoud",
                    text:
                        "Hardware-upgrades, vervanging van onderdelen, pc-onderhoud, prestatieverbeteringen en eenvoudige reparaties."
                },

                network: {
                    title: "Netwerk- & wifi-ondersteuning",
                    text:
                        "Netwerkinstallatie voor thuis en kleine bedrijven, wifi-problemen, routerconfiguratie en verbindingsproblemen."
                },

                remote: {
                    title: "IT-ondersteuning op afstand",
                    text:
                        "Hulp op afstand bij softwareproblemen, configuratie, probleemoplossing en dagelijkse IT-vragen."
                },

                migration: {
                    title: "Apparaatinstallatie & gegevensmigratie",
                    text:
                        "Installatie van nieuwe computers, software-installatie, gegevensmigratie en apparaten voorbereiden voor dagelijks gebruik."
                },

                webcv: {
                    title: "WebCV & digitale ondersteuning",
                    text:
                        "Professionele WebCV-creatie en praktische digitale ondersteuning voor particulieren en werkzoekenden."
                }

            }
        },

        about: {
            eyebrow: "OVER ITSupportRotterdam",
            title: "Technologie praktisch gemaakt.",
            p1:
                "ITSupportRotterdam biedt praktische IT-ondersteuning voor particulieren, thuisgebruikers en kleine bedrijven. Het doel is eenvoudig: het probleem begrijpen, de oplossing duidelijk uitleggen en ervoor zorgen dat uw technologie weer goed werkt.",
            p2:
                "Met ervaring in IT-ondersteuning, computerhardware, softwareproblemen, netwerken en digitale technologie bied ik persoonlijke ondersteuning zonder onnodig technisch jargon."
        },

        whyUs: {
            eyebrow: "WAAROM ITSupportRotterdam",
            title: "Praktische ondersteuning met een persoonlijke aanpak.",
            text:
                "Persoonlijke IT-ondersteuning gericht op het daadwerkelijk oplossen van het probleem.",
            cards: {
                practical: {
                    title: "Praktische IT-ondersteuning",
                    text:
                        "Duidelijke oplossingen gericht op het daadwerkelijke probleem."
                },
                communication: {
                    title: "Duidelijke communicatie",
                    text:
                        "Ondersteuning beschikbaar in het Engels, Nederlands, Turks en Russisch."
                },
                personal: {
                    title: "Persoonlijke service",
                    text:
                        "Directe en persoonlijke ondersteuning in plaats van een grote helpdesk."
                },
                remote: {
                    title: "Ondersteuning op afstand & op locatie",
                    text:
                        "Op afstand of op locatie, afhankelijk van het probleem en de locatie."
                },
                jargon: {
                    title: "Geen technisch jargon",
                    text:
                        "Duidelijke uitleg zonder onnodig ingewikkelde technische taal."
                }
            }
        },

        howItWorks: {
            eyebrow: "HOE HET WERKT",
            title: "Eenvoudig van begin tot eind.",
            text:
                "Een duidelijk proces om uw IT-probleem snel en praktisch op te lossen.",
            steps: {
                contact: {
                    title: "Contact",
                    text:
                        "Vertel mij waarmee u hulp nodig heeft."
                },
                diagnose: {
                    title: "Diagnose",
                    text:
                        "Ik identificeer het probleem en leg de beschikbare oplossing uit."
                },
                fix: {
                    title: "Oplossen",
                    text:
                        "Het probleem wordt op afstand of op locatie opgelost, afhankelijk van de situatie."
                },
                followUp: {
                    title: "Nazorg",
                    text:
                        "Controleren of alles goed werkt en eventuele resterende vragen beantwoorden."
                }
            }
        },

        serviceArea: {
            eyebrow: "SERVICEGEBIED",
            title: "IT-ondersteuning in Rotterdam & omgeving",
            location:
                "Gevestigd in Poortugaal, Rotterdam, en actief in de omliggende omgeving.",
            free:
                "Geen voorrijkosten in Poortugaal, Rhoon en Hoogvliet.",
            other:
                "Voor andere gebieden zijn de reiskosten inbegrepen in het servicetarief."
        },

        contact: {
            eyebrow: "NEEM CONTACT OP",
            title: "IT-hulp nodig? Laten we het oplossen.",
            text:
                "Heeft u een computer-, software-, netwerk- of ander IT-probleem? Vertel mij waarmee u hulp nodig heeft en laten we samen een praktische oplossing vinden.",
            email: "E-mail mij",
            whatsapp: "WhatsApp"
        },

        form: {
            name: "Naam",
            namePlaceholder: "Uw naam",
            email: "E-mail",
            emailPlaceholder: "Uw e-mailadres",
            service: "Dienst",
            selectService: "Selecteer een dienst",
            message: "Hoe kan ik helpen?",
            messagePlaceholder:
                "Vertel mij waarmee u hulp nodig heeft...",
            submit: "Verzoek versturen",
            success:
                "Bedankt. Uw serviceverzoek is verzonden."
        },

        menu: {
            open: "Menu openen",
            close: "Menu sluiten"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Alle rechten voorbehouden.",
            tagline:
                "IT-ondersteuning voor particulieren & kleine bedrijven"
        }

    },


    /* -------------------------------------------------
       Turkish
       ------------------------------------------------- */

    tr: {

        flag: "🇹🇷",
        code: "TR",
        name: "Türkçe",

        site: {
            title: "ITSupportRotterdam | Pratik IT Desteği",
            description:
                "ITSupportRotterdam, Rotterdam ve çevresinde bireysel kullanıcılar, profesyoneller ve küçük işletmeler için pratik IT desteği sunar."
        },

        nav: {
            home: "Ana Sayfa",
            services: "Hizmetler",
            whyUs: "Neden Biz",
            about: "Hakkımızda",
            howItWorks: "Nasıl Çalışır",
            contact: "İletişim"
        },

        cta: {
            support: "IT Desteği Alın"
        },

        hero: {
            eyebrow: "PRATİK IT DESTEĞİ",
            titleStart: "Güvenebileceğiniz",
            titleHighlight: "Pratik IT Desteği",
            text:
                "Rotterdam ve çevresinde bilgisayar, yazılım, donanım, ağ ve günlük teknoloji sorunları için güvenilir IT desteği.",
            request: "IT Desteği Alın",
            view: "Hizmetleri Görün"
        },

        services: {
            eyebrow: "SUNDUKLARIM",
            title: "IT Hizmetleri",
            text:
                "Bireysel kullanıcılar, profesyoneller ve küçük işletmeler için pratik IT desteği.",

            cards: {

                computer: {
                    title: "Bilgisayar ve Laptop Desteği",
                    text:
                        "Bilgisayar ve laptop sorunları, Windows problemleri, performans sorunları ve günlük teknik problemlerde yardım."
                },

                software: {
                    title: "Windows, Microsoft Office ve Yazılım Desteği",
                    text:
                        "Windows kurulumu ve yapılandırması, Microsoft Office kurulumu, lisans konusunda rehberlik, güncellemeler ve yazılım sorunlarının giderilmesi."
                },

                hardware: {
                    title: "Donanım, PC Yükseltme ve Bakım",
                    text:
                        "Donanım yükseltmeleri, parça değişimi, PC bakımı, performans iyileştirmeleri ve temel onarımlar."
                },

                network: {
                    title: "Ağ ve Wi-Fi Desteği",
                    text:
                        "Ev ve küçük işletme ağ kurulumu, Wi-Fi sorunları, router yapılandırması ve bağlantı problemlerinin giderilmesi."
                },

                remote: {
                    title: "Uzaktan IT Desteği",
                    text:
                        "Yazılım sorunları, yapılandırma, problem çözme ve günlük IT ihtiyaçları için uzaktan destek."
                },

                migration: {
                    title: "Cihaz Kurulumu ve Veri Taşıma",
                    text:
                        "Yeni bilgisayar kurulumu, yazılım yükleme, veri taşıma ve cihazları günlük kullanıma hazırlama."
                },

                webcv: {
                    title: "WebCV ve Dijital Destek",
                    text:
                        "Bireysel kullanıcılar ve iş arayanlar için profesyonel WebCV oluşturma ve pratik dijital destek."
                }

            }
        },

        about: {
            eyebrow: "ITSupportRotterdam HAKKINDA",
            title: "Teknolojiyi pratik hale getiriyoruz.",
            p1:
                "ITSupportRotterdam; bireysel kullanıcılar, ev kullanıcıları ve küçük işletmeler için pratik IT desteği sunar. Amaç basit: sorunu anlamak, çözümü açıkça anlatmak ve teknolojinizin yeniden düzgün çalışmasını sağlamak.",
            p2:
                "IT desteği, bilgisayar donanımı, yazılım sorunlarının giderilmesi, ağlar ve dijital teknoloji alanlarındaki deneyimimle, gereksiz teknik jargon kullanmadan kişisel destek sunuyorum."
        },

        whyUs: {
            eyebrow: "NEDEN ITSupportRotterdam",
            title: "Kişisel yaklaşımla pratik destek.",
            text:
                "Asıl sorunu çözmeye odaklanan kişisel ve pratik IT desteği.",
            cards: {
                practical: {
                    title: "Pratik IT Desteği",
                    text:
                        "Asıl problemi çözmeye odaklanan doğrudan ve uygulanabilir çözümler."
                },
                communication: {
                    title: "Açık İletişim",
                    text:
                        "İngilizce, Hollandaca, Türkçe ve Rusça destek."
                },
                personal: {
                    title: "Kişisel Hizmet",
                    text:
                        "Büyük bir yardım masası yerine doğrudan ve kişisel destek."
                },
                remote: {
                    title: "Uzaktan ve Yerinde Destek",
                    text:
                        "Soruna ve konuma bağlı olarak uzaktan veya yerinde destek."
                },
                jargon: {
                    title: "Teknik Jargon Yok",
                    text:
                        "Gereksiz teknik ifadeler kullanmadan açık ve anlaşılır açıklamalar."
                }
            }
        },

        howItWorks: {
            eyebrow: "NASIL ÇALIŞIR",
            title: "Başlangıçtan sona kadar basit.",
            text:
                "IT sorununuzun çözülmesini sağlamak için basit ve anlaşılır bir süreç.",
            steps: {
                contact: {
                    title: "İletişim",
                    text:
                        "Hangi konuda yardıma ihtiyacınız olduğunu anlatın."
                },
                diagnose: {
                    title: "Teşhis",
                    text:
                        "Sorunu belirliyor ve mevcut çözümü açıklıyorum."
                },
                fix: {
                    title: "Çözüm",
                    text:
                        "Duruma göre sorun uzaktan veya yerinde çözülür."
                },
                followUp: {
                    title: "Takip",
                    text:
                        "Her şeyin düzgün çalıştığından emin oluyor ve kalan sorularınızı yanıtlıyorum."
                }
            }
        },

        serviceArea: {
            eyebrow: "HİZMET BÖLGESİ",
            title: "Rotterdam ve Çevresinde IT Desteği",
            location:
                "Poortugaal, Rotterdam merkezliyim ve çevre bölgelerde pratik IT desteği sunuyorum.",
            free:
                "Poortugaal, Rhoon ve Hoogvliet için ulaşım ücreti alınmaz.",
            other:
                "Diğer bölgelerde ulaşım masrafları hizmet ücretine dahildir."
        },

        contact: {
            eyebrow: "İLETİŞİME GEÇİN",
            title: "IT desteğine mi ihtiyacınız var? Birlikte çözelim.",
            text:
                "Bilgisayar, yazılım, ağ veya başka bir IT sorununuz mu var? Neye ihtiyacınız olduğunu anlatın ve pratik bir çözüm bulalım.",
            email: "E-posta Gönder",
            whatsapp: "WhatsApp"
        },

        form: {
            name: "Ad Soyad",
            namePlaceholder: "Adınız ve soyadınız",
            email: "E-posta",
            emailPlaceholder: "E-posta adresiniz",
            service: "Hizmet",
            selectService: "Bir hizmet seçin",
            message: "Nasıl yardımcı olabilirim?",
            messagePlaceholder:
                "Neye ihtiyacınız olduğunu yazın...",
            submit: "Talep Gönder",
            success:
                "Teşekkürler. Hizmet talebiniz gönderildi."
        },

        menu: {
            open: "Menüyü aç",
            close: "Menüyü kapat"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Tüm hakları saklıdır.",
            tagline:
                "Bireysel Kullanıcılar ve Küçük İşletmeler için IT Desteği"
        }

    },


    /* -------------------------------------------------
       Russian
       ------------------------------------------------- */

    ru: {

        flag: "🇷🇺",
        code: "RU",
        name: "Русский",

        site: {
            title: "ITSupportRotterdam | Практическая IT-поддержка",
            description:
                "ITSupportRotterdam предоставляет практическую IT-поддержку частным пользователям, специалистам и малому бизнесу в Роттердаме и окрестностях."
        },

        nav: {
            home: "Главная",
            services: "Услуги",
            whyUs: "Почему мы",
            about: "О нас",
            howItWorks: "Как это работает",
            contact: "Контакты"
        },

        cta: {
            support: "Получить IT-поддержку"
        },

        hero: {
            eyebrow: "ПРАКТИЧЕСКАЯ IT-ПОДДЕРЖКА",
            titleStart: "Практическая IT-поддержка,",
            titleHighlight: "на которую можно рассчитывать",
            text:
                "Надёжная IT-поддержка компьютеров, программного обеспечения, оборудования, сетей и повседневных технических проблем в Роттердаме и окрестностях.",
            request: "Получить IT-поддержку",
            view: "Посмотреть услуги"
        },

        services: {
            eyebrow: "ЧТО Я ПРЕДЛАГАЮ",
            title: "IT-услуги",
            text:
                "Практическая IT-поддержка для частных пользователей, специалистов и малого бизнеса.",

            cards: {

                computer: {
                    title: "Поддержка компьютеров и ноутбуков",
                    text:
                        "Помощь с компьютерами и ноутбуками, проблемами Windows, производительностью и повседневными техническими трудностями."
                },

                software: {
                    title: "Windows, Microsoft Office и программное обеспечение",
                    text:
                        "Установка и настройка Windows, установка Microsoft Office, консультации по лицензиям, обновления и устранение проблем с программами."
                },

                hardware: {
                    title: "Оборудование, модернизация ПК и обслуживание",
                    text:
                        "Модернизация оборудования, замена компонентов, обслуживание ПК, повышение производительности и базовый ремонт."
                },

                network: {
                    title: "Поддержка сети и Wi-Fi",
                    text:
                        "Настройка домашних и небольших офисных сетей, проблемы с Wi-Fi, настройка маршрутизатора и устранение проблем с подключением."
                },

                remote: {
                    title: "Удалённая IT-поддержка",
                    text:
                        "Удалённая помощь с программами, настройками, устранением неполадок и повседневными IT-вопросами."
                },

                migration: {
                    title: "Настройка устройств и перенос данных",
                    text:
                        "Настройка нового компьютера, установка программ, перенос данных и подготовка устройств к повседневному использованию."
                },

                webcv: {
                    title: "WebCV и цифровая поддержка",
                    text:
                        "Создание профессионального WebCV и практическая цифровая поддержка для частных пользователей и соискателей."
                }

            }
        },

        about: {
            eyebrow: "О ITSupportRotterdam",
            title: "Технологии должны быть понятными и практичными.",
            p1:
                "ITSupportRotterdam предоставляет практическую IT-поддержку частным пользователям, домашним пользователям и малому бизнесу. Цель проста: понять проблему, ясно объяснить решение и помочь вернуть технологии в рабочее состояние.",
            p2:
                "Имея опыт в IT-поддержке, компьютерном оборудовании, устранении программных проблем, сетях и цифровых технологиях, я предоставляю персональную помощь без ненужного технического жаргона."
        },

        whyUs: {
            eyebrow: "ПОЧЕМУ ITSupportRotterdam",
            title: "Практическая поддержка с индивидуальным подходом.",
            text:
                "Персональная IT-поддержка, ориентированная на реальное решение проблемы.",
            cards: {
                practical: {
                    title: "Практическая IT-поддержка",
                    text:
                        "Понятные решения, направленные непосредственно на устранение проблемы."
                },
                communication: {
                    title: "Понятное общение",
                    text:
                        "Поддержка на английском, нидерландском, турецком и русском языках."
                },
                personal: {
                    title: "Персональный сервис",
                    text:
                        "Прямая и персональная помощь вместо большой службы поддержки."
                },
                remote: {
                    title: "Удалённая и выездная поддержка",
                    text:
                        "Удалённая или выездная помощь в зависимости от проблемы и местоположения."
                },
                jargon: {
                    title: "Без технического жаргона",
                    text:
                        "Понятные объяснения без ненужных сложных технических терминов."
                }
            }
        },

        howItWorks: {
            eyebrow: "КАК ЭТО РАБОТАЕТ",
            title: "Просто от начала до конца.",
            text:
                "Простой и понятный процесс, направленный на решение вашей IT-проблемы.",
            steps: {
                contact: {
                    title: "Контакт",
                    text:
                        "Расскажите, с чем вам нужна помощь."
                },
                diagnose: {
                    title: "Диагностика",
                    text:
                        "Я определяю проблему и объясняю доступное решение."
                },
                fix: {
                    title: "Решение",
                    text:
                        "Проблема решается удалённо или на месте, в зависимости от ситуации."
                },
                followUp: {
                    title: "Контроль",
                    text:
                        "Проверяю, что всё работает правильно, и отвечаю на оставшиеся вопросы."
                }
            }
        },

        serviceArea: {
            eyebrow: "ЗОНА ОБСЛУЖИВАНИЯ",
            title: "IT-поддержка в Роттердаме и окрестностях",
            location:
                "Я нахожусь в Poortugaal, Роттердам, и предоставляю практическую IT-поддержку в близлежащих районах.",
            free:
                "Без дополнительной платы за выезд в Poortugaal, Rhoon и Hoogvliet.",
            other:
                "Для других районов расходы на поездку включены в стоимость услуги."
        },

        contact: {
            eyebrow: "СВЯЖИТЕСЬ СО МНОЙ",
            title: "Нужна IT-помощь? Давайте решим проблему.",
            text:
                "Возникла проблема с компьютером, программным обеспечением, сетью или другой IT-технологией? Расскажите, что вам нужно, и мы найдём практичное решение.",
            email: "Написать на e-mail",
            whatsapp: "WhatsApp"
        },

        form: {
            name: "Имя",
            namePlaceholder: "Ваше имя",
            email: "E-mail",
            emailPlaceholder: "Ваш адрес электронной почты",
            service: "Услуга",
            selectService: "Выберите услугу",
            message: "Чем я могу помочь?",
            messagePlaceholder:
                "Расскажите, с чем вам нужна помощь...",
            submit: "Отправить запрос",
            success:
                "Спасибо. Ваш запрос на обслуживание отправлен."
        },

        menu: {
            open: "Открыть меню",
            close: "Закрыть меню"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Все права защищены.",
            tagline:
                "IT-поддержка для частных пользователей и малого бизнеса"
        }

    },


    /* -------------------------------------------------
       Ukrainian
       ------------------------------------------------- */

    uk: {

        flag: "🇺🇦",
        code: "UK",
        name: "Українська",

        site: {
            title: "ITSupportRotterdam | Практична IT-підтримка",
            description:
                "ITSupportRotterdam надає практичну IT-підтримку приватним користувачам, професіоналам і малому бізнесу в Роттердамі та околицях."
        },

        nav: {
            home: "Головна",
            services: "Послуги",
            whyUs: "Чому ми",
            about: "Про мене",
            howItWorks: "Як це працює",
            contact: "Контакти"
        },

        cta: {
            support: "Отримати IT-підтримку"
        },

        hero: {
            eyebrow: "ПРАКТИЧНА IT-ПІДТРИМКА",
            titleStart: "Практична IT-підтримка,",
            titleHighlight: "на яку можна покластися",
            text:
                "Надійна IT-підтримка для комп'ютерів, програмного забезпечення, обладнання, мереж і повсякденних технологічних проблем у Роттердамі та околицях.",
            request: "Отримати IT-підтримку",
            view: "Переглянути послуги"
        },

        services: {
            eyebrow: "ЩО Я ПРОПОНУЮ",
            title: "IT-послуги",
            text:
                "Практична IT-підтримка для приватних користувачів, професіоналів і малого бізнесу.",

            cards: {

                computer: {
                    title: "Підтримка комп'ютерів і ноутбуків",
                    text:
                        "Допомога з проблемами комп'ютерів і ноутбуків, Windows, продуктивністю та повсякденними технічними труднощами."
                },

                software: {
                    title: "Windows, Microsoft Office та програмне забезпечення",
                    text:
                        "Встановлення та налаштування Windows, встановлення Microsoft Office, консультації щодо ліцензій, оновлення та усунення проблем із програмами."
                },

                hardware: {
                    title: "Обладнання, модернізація ПК та обслуговування",
                    text:
                        "Модернізація обладнання, заміна компонентів, обслуговування ПК, покращення продуктивності та базовий ремонт."
                },

                network: {
                    title: "Підтримка мережі та Wi-Fi",
                    text:
                        "Налаштування домашніх і невеликих офісних мереж, проблеми з Wi-Fi, налаштування маршрутизатора та усунення проблем із підключенням."
                },

                remote: {
                    title: "Віддалена IT-підтримка",
                    text:
                        "Віддалена допомога з програмами, налаштуваннями, усуненням несправностей і повсякденними IT-питаннями."
                },

                migration: {
                    title: "Налаштування пристроїв та перенесення даних",
                    text:
                        "Налаштування нового комп'ютера, встановлення програм, перенесення даних і підготовка пристроїв до повсякденного використання."
                },

                webcv: {
                    title: "WebCV та цифрова підтримка",
                    text:
                        "Створення професійного WebCV і практична цифрова підтримка для приватних користувачів та шукачів роботи."
                }

            }
        },

        about: {
            eyebrow: "ПРО ITSupportRotterdam",
            title: "Технології — просто та практично.",
            p1:
                "ITSupportRotterdam надає практичну IT-підтримку приватним користувачам, домашнім користувачам і малому бізнесу. Мета проста: зрозуміти проблему, чітко пояснити рішення та допомогти повернути технології до нормальної роботи.",
            p2:
                "Маючи досвід у сфері IT-підтримки, комп'ютерного обладнання, усунення проблем із програмним забезпеченням, мереж і цифрових технологій, я надаю персональну допомогу без зайвого технічного жаргону."
        },

        whyUs: {
            eyebrow: "ЧОМУ ITSupportRotterdam",
            title: "Практична підтримка з персональним підходом.",
            text:
                "Персональна IT-підтримка, зосереджена на реальному вирішенні проблеми.",
            cards: {

                practical: {
                    title: "Практична IT-підтримка",
                    text:
                        "Зрозумілі рішення, спрямовані безпосередньо на вирішення проблеми."
                },

                communication: {
                    title: "Зрозуміле спілкування",
                    text:
                        "Підтримка англійською, нідерландською, турецькою та російською мовами."
                },

                personal: {
                    title: "Персональний сервіс",
                    text:
                        "Пряма та персональна допомога замість великої служби підтримки."
                },

                remote: {
                    title: "Віддалена та виїзна підтримка",
                    text:
                        "Віддалена або виїзна допомога залежно від проблеми та місцезнаходження."
                },

                jargon: {
                    title: "Без технічного жаргону",
                    text:
                        "Зрозумілі пояснення без зайвих складних технічних термінів."
                }

            }
        },

        howItWorks: {
            eyebrow: "ЯК ЦЕ ПРАЦЮЄ",
            title: "Просто від початку до кінця.",
            text:
                "Простий і зрозумілий процес, спрямований на вирішення вашої IT-проблеми.",
            steps: {

                contact: {
                    title: "Контакт",
                    text:
                        "Розкажіть, з чим вам потрібна допомога."
                },

                diagnose: {
                    title: "Діагностика",
                    text:
                        "Я визначаю проблему та пояснюю доступне рішення."
                },

                fix: {
                    title: "Вирішення",
                    text:
                        "Проблема вирішується віддалено або на місці, залежно від ситуації."
                },

                followUp: {
                    title: "Подальша підтримка",
                    text:
                        "Перевіряю, що все працює належним чином, і відповідаю на додаткові запитання."
                }

            }
        },

        serviceArea: {
            eyebrow: "ЗОНА ОБСЛУГОВУВАННЯ",
            title: "IT-підтримка в Роттердамі та околицях",
            location:
                "Я перебуваю в Poortugaal, Роттердам, і надаю практичну IT-підтримку в навколишніх районах.",
            free:
                "Без плати за виїзд у Poortugaal, Rhoon та Hoogvliet.",
            other:
                "Для інших районів витрати на поїздку включені у вартість послуги."
        },

        contact: {
            eyebrow: "ЗВ'ЯЖІТЬСЯ ЗІ МНОЮ",
            title: "Потрібна IT-допомога? Давайте вирішимо проблему.",
            text:
                "Виникла проблема з комп'ютером, програмним забезпеченням, мережею або іншою IT-технологією? Розкажіть, що вам потрібно, і ми знайдемо практичне рішення.",
            email: "Написати на e-mail",
            whatsapp: "WhatsApp"
        },

        form: {
            name: "Ім'я",
            namePlaceholder: "Ваше ім'я",
            email: "E-mail",
            emailPlaceholder: "Ваша адреса електронної пошти",
            service: "Послуга",
            selectService: "Оберіть послугу",
            message: "Чим я можу допомогти?",
            messagePlaceholder:
                "Розкажіть, з чим вам потрібна допомога...",
            submit: "Надіслати запит",
            success:
                "Дякуємо. Ваш запит на обслуговування надіслано."
        },

        menu: {
            open: "Відкрити меню",
            close: "Закрити меню"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Усі права захищені.",
            tagline:
                "IT-підтримка для приватних користувачів і малого бізнесу"
        }

    }

};


/* =====================================================
   DOM Elements
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const languageSelector =
    document.getElementById("languageSelector");

const languageToggle =
    document.getElementById("languageToggle");

const languageMenu =
    document.getElementById("languageMenu");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/* =====================================================
   Translation Helper
   ===================================================== */

function getTranslation(object, path) {

    return path
        .split(".")
        .reduce(
            (value, key) =>
                value !== undefined && value !== null
                    ? value[key]
                    : undefined,
            object
        );
}


/* =====================================================
   Apply Translations
   ===================================================== */

function applyTranslations(lang) {

    const translation =
        languages[lang] || languages.en;

    /* HTML language */

    document.documentElement.lang = lang;


    /* Page title */

    document.title = translation.site.title;


    /* Meta description */

    const descriptionMeta =
        document.querySelector('meta[name="description"]');

    if (descriptionMeta) {
        descriptionMeta.setAttribute(
            "content",
            translation.site.description
        );
    }


    /* Text translations */

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const value = getTranslation(
                translation,
                element.dataset.i18n
            );

            if (value !== undefined) {
                element.textContent = value;
            }

        });


    /* Placeholder translations */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const value = getTranslation(
                translation,
                element.dataset.i18nPlaceholder
            );

            if (value !== undefined) {
                element.placeholder = value;
            }

        });


    /* Current language button */

    if (languageToggle) {

        languageToggle.innerHTML =
            `${languages[lang].code}
            <span class="language-arrow">▾</span>`;

    }


    /* Mobile menu aria label */

    if (menuToggle) {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? translation.menu.close
                : translation.menu.open
        );

    }


    /* Save language */

    localStorage.setItem(
        "itSupportLanguage",
        lang
    );

}


/* =====================================================
   Detect Initial Language
   ===================================================== */

const savedLanguage =
    localStorage.getItem("itSupportLanguage");

const browserLanguage =
    navigator.language
        ? navigator.language
            .toLowerCase()
            .slice(0, 2)
        : "en";

const initialLanguage =
    supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : "en";


/* =====================================================
   Language Selector
   ===================================================== */

if (languageToggle && languageSelector) {

    languageToggle.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                languageSelector.classList.toggle("open");

            languageToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    const languageButtons =
        languageMenu.querySelectorAll(
            "[data-language]"
        );

    languageButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const lang =
                    button.dataset.language;

                if (
                    supportedLanguages.includes(lang)
                ) {

                    applyTranslations(lang);

                }

                languageSelector.classList.remove(
                    "open"
                );

                languageToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                /* Close mobile navigation */

                if (
                    mainNav &&
                    mainNav.classList.contains("active")
                ) {

                    mainNav.classList.remove("active");

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });

}


/* =====================================================
   Close Language Menu When Clicking Outside
   ===================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            languageSelector &&
            !languageSelector.contains(event.target)
        ) {

            languageSelector.classList.remove(
                "open"
            );

            if (languageToggle) {

                languageToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =====================================================
   Mobile Navigation
   ===================================================== */

if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            const translation =
                languages[
                    document.documentElement.lang
                ] || languages.en;

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? translation.menu.close
                    : translation.menu.open
            );

        }
    );


    /* Close menu after clicking a navigation link */

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const translation =
                    languages[
                        document.documentElement.lang
                    ] || languages.en;

                menuToggle.setAttribute(
                    "aria-label",
                    translation.menu.open
                );

            }
        );

    });

}


/* =====================================================
   Escape Key
   ===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        /* Close language menu */

        if (languageSelector) {

            languageSelector.classList.remove(
                "open"
            );

        }

        if (languageToggle) {

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        /* Close mobile navigation */

        if (
            mainNav &&
            mainNav.classList.contains("active")
        ) {

            mainNav.classList.remove(
                "active"
            );

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const translation =
                languages[
                    document.documentElement.lang
                ] || languages.en;

            menuToggle.setAttribute(
                "aria-label",
                translation.menu.open
            );

        }

    }
);


/* =====================================================
   Close Mobile Navigation on Larger Screens
   ===================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 850 &&
            mainNav
        ) {

            mainNav.classList.remove(
                "active"
            );

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const translation =
                languages[
                    document.documentElement.lang
                ] || languages.en;

            menuToggle.setAttribute(
                "aria-label",
                translation.menu.open
            );

        }

    }
);


/* =====================================================
   Contact Form
   ===================================================== */



/* =====================================================
   Start Application
   ===================================================== */

applyTranslations(initialLanguage);
  

});






