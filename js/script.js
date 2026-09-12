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
        name: "English"
    },
    nl: {
        flag: "🇳🇱",
        code: "NL",
        name: "Nederlands"
    },
    tr: {
        flag: "🇹🇷",
        code: "TR",
        name: "Türkçe"
    },
    ru: {
        flag: "🇷🇺",
        code: "RU",
        name: "Русский"
    },
    uk: {
        flag: "🇺🇦",
        code: "UK",
        name: "Українська"
    }
};


/* =====================================================
   Translations
   ===================================================== */

const translations = {

    /* -------------------------------------------------
       English
       ------------------------------------------------- */

    en: {

        site: {
            title: "ITSupportRotterdam | IT Support & Digital Solutions",
            description:
                "ITSupportRotterdam provides practical IT support, PC maintenance, troubleshooting, hardware and software services, and professional WebCV creation."
        },

        nav: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact"
        },

        cta: {
            request: "Request a Service"
        },

        hero: {
            eyebrow: "PRACTICAL IT SUPPORT",
            titleStart: "IT solutions you can",
            titleHighlight: "rely on.",
            text:
                "Practical and reliable IT support for computers, software, hardware and everyday technology problems.",
            request: "Request a Service",
            view: "View Services"
        },

        services: {
            eyebrow: "WHAT I OFFER",
            title: "IT Services",
            text:
                "Practical technology services for home users, professionals and small businesses.",

            cards: {

                support: {
                    title: "IT Support",
                    text:
                        "Help with everyday computer, software, device and technology problems."
                },

                maintenance: {
                    title: "PC Maintenance",
                    text:
                        "PC cleaning, performance checks, updates and general maintenance."
                },

                hardware: {
                    title: "Hardware & Software",
                    text:
                        "Hardware upgrades, software installation, configuration and updates."
                },

                troubleshooting: {
                    title: "Troubleshooting",
                    text:
                        "Diagnose and resolve common computer, software and device issues."
                },

                webcv: {
                    title: "WebCV Creation",
                    text:
                        "Professional personal CV websites designed for modern job applications."
                }

            }
        },

        about: {
            eyebrow: "ABOUT ITSupportRotterdam",
            title: "Technology made practical.",
            p1:
                "ITSupportRotterdam provides practical IT support and digital services focused on clear communication, reliable solutions and professional service.",
            p2:
                "From solving everyday PC problems to creating a professional WebCV, the goal is simple: make technology work for you."
        },

        contact: {
            eyebrow: "GET IN TOUCH",
            title: "Need IT help?",
            text:
                "Tell me what you need help with and I will get back to you.",
            email: "Email me",
            whatsapp: "WhatsApp",
    areaTitle: "SERVICE AREA & TRANSPORT",
    areaHeading: "Service Area & Transport",
    areaLocation: "Based in Poortugaal, Rotterdam.",
    areaFree: "No travel fee in Poortugaal, Rhoon and Hoogvliet.",
    areaOther: "For other areas, travel costs are included in the service fee."
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
                "Thank you. Your service request has been prepared."
        },

        menu: {
            open: "Open menu",
            close: "Close menu"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. All rights reserved.",
            tagline:
                "IT Support & Digital Solutions"
        }

    },


    /* -------------------------------------------------
       Dutch
       ------------------------------------------------- */

    nl: {

        site: {
            title: "ITSupportRotterdam | IT Support & Digitale Oplossingen",
            description:
                "ITSupportRotterdam biedt praktische IT-ondersteuning, pc-onderhoud, probleemoplossing, hardware- en softwarediensten en professionele WebCV-creatie."
        },

        nav: {
            home: "Home",
            services: "Diensten",
            about: "Over mij",
            contact: "Contact"
        },

        cta: {
            request: "Dienst aanvragen"
        },

        hero: {
            eyebrow: "PRAKTISCHE IT-ONDERSTEUNING",
            titleStart: "IT-oplossingen waarop u",
            titleHighlight: "kunt vertrouwen.",
            text:
                "Praktische en betrouwbare IT-ondersteuning voor computers, software, hardware en dagelijkse technologieproblemen.",
            request: "Dienst aanvragen",
            view: "Bekijk diensten"
        },

        services: {
            eyebrow: "WAT IK AANBIED",
            title: "IT-diensten",
            text:
                "Praktische technologische diensten voor thuisgebruikers, professionals en kleine bedrijven.",

            cards: {

                support: {
                    title: "IT-ondersteuning",
                    text:
                        "Hulp bij dagelijkse computer-, software-, apparaat- en technologieproblemen."
                },

                maintenance: {
                    title: "PC-onderhoud",
                    text:
                        "PC-reiniging, prestatiecontroles, updates en algemeen onderhoud."
                },

                hardware: {
                    title: "Hardware & software",
                    text:
                        "Hardware-upgrades, software-installatie, configuratie en updates."
                },

                troubleshooting: {
                    title: "Probleemoplossing",
                    text:
                        "Diagnose en oplossing van veelvoorkomende computer-, software- en apparaatproblemen."
                },

                webcv: {
                    title: "WebCV maken",
                    text:
                        "Professionele persoonlijke CV-websites voor moderne sollicitaties."
                }

            }
        },

        about: {
            eyebrow: "OVER ITSupportRotterdam",
            title: "Technologie praktisch gemaakt.",
            p1:
                "ITSupportRotterdam biedt praktische IT-ondersteuning en digitale diensten met aandacht voor duidelijke communicatie, betrouwbare oplossingen en professionele service.",
            p2:
                "Van het oplossen van dagelijkse pc-problemen tot het maken van een professioneel WebCV: het doel is eenvoudig, technologie voor u laten werken."
        },

        contact: {
            eyebrow: "NEEM CONTACT OP",
            title: "IT-hulp nodig?",
            text:
                "Vertel mij waarmee u hulp nodig heeft en ik neem contact met u op.",
            email: "E-mail mij",
            whatsapp: "WhatsApp",
    areaTitle: "SERVICEGEBIED & VOORRIJKOSTEN",
    areaHeading: "Servicegebied & Voorrijkosten",
    areaLocation: "Gevestigd in Poortugaal, Rotterdam.",
    areaFree: "Geen voorrijkosten voor klanten in Poortugaal, Rhoon en Hoogvliet.",
    areaOther: "Voor andere gebieden zijn de voorrijkosten inbegrepen in het servicetarief."
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
            submit: "Aanvraag versturen",
            success:
                "Bedankt. Uw serviceaanvraag is voorbereid."
        },

        menu: {
            open: "Menu openen",
            close: "Menu sluiten"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Alle rechten voorbehouden.",
            tagline:
                "IT-ondersteuning & Digitale Oplossingen"
        }

    },


    /* -------------------------------------------------
       Turkish
       ------------------------------------------------- */

    tr: {

        site: {
            title: "ITSupportRotterdam | IT Desteği ve Dijital Çözümler",
            description:
                "ITSupportRotterdam; pratik IT desteği, PC bakımı, sorun giderme, donanım ve yazılım hizmetleri ve profesyonel WebCV hazırlama hizmetleri sunar."
        },

        nav: {
            home: "Ana Sayfa",
            services: "Hizmetler",
            about: "Hakkımda",
            contact: "İletişim"
        },

        cta: {
            request: "Hizmet Talep Et"
        },

        hero: {
            eyebrow: "PRATİK IT DESTEĞİ",
            titleStart: "Güvenebileceğiniz",
            titleHighlight: "IT çözümleri.",
            text:
                "Bilgisayarlar, yazılım, donanım ve günlük teknoloji sorunları için pratik ve güvenilir IT desteği.",
            request: "Hizmet Talep Et",
            view: "Hizmetleri Gör"
        },

        services: {
            eyebrow: "SUNDukLARIM",
            title: "IT Hizmetleri",
            text:
                "Ev kullanıcıları, profesyoneller ve küçük işletmeler için pratik teknoloji hizmetleri.",

            cards: {

                support: {
                    title: "IT Desteği",
                    text:
                        "Günlük bilgisayar, yazılım, cihaz ve teknoloji sorunlarında destek."
                },

                maintenance: {
                    title: "PC Bakımı",
                    text:
                        "PC temizliği, performans kontrolleri, güncellemeler ve genel bakım."
                },

                hardware: {
                    title: "Donanım & Yazılım",
                    text:
                        "Donanım yükseltmeleri, yazılım kurulumu, yapılandırma ve güncellemeler."
                },

                troubleshooting: {
                    title: "Sorun Giderme",
                    text:
                        "Yaygın bilgisayar, yazılım ve cihaz sorunlarının teşhisi ve çözümü."
                },

                webcv: {
                    title: "WebCV Hazırlama",
                    text:
                        "Modern iş başvuruları için profesyonel kişisel CV web siteleri."
                }

            }
        },

        about: {
            eyebrow: "ITSupportRotterdam HAKKINDA",
            title: "Teknolojiyi pratik hale getiriyoruz.",
            p1:
                "ITSupportRotterdam; açık iletişim, güvenilir çözümler ve profesyonel hizmet anlayışına odaklanan pratik IT desteği ve dijital hizmetler sunar.",
            p2:
                "Günlük PC sorunlarını çözmekten profesyonel bir WebCV hazırlamaya kadar amaç basit: teknolojinin sizin için çalışmasını sağlamak."
        },

        contact: {
            eyebrow: "İLETİŞİME GEÇİN",
            title: "IT desteğine mi ihtiyacınız var?",
            text:
                "Neye ihtiyacınız olduğunu yazın, sizinle iletişime geçeyim.",
            email: "E-posta gönder",
            whatsapp: "WhatsApp",
    areaTitle: "HİZMET BÖLGESİ & ULAŞIM",
    areaHeading: "Hizmet Bölgesi & Ulaşım",
    areaLocation: "Poortugaal, Rotterdam merkezliyiz.",
    areaFree: "Poortugaal, Rhoon ve Hoogvliet bölgelerindeki müşterilerimizden ulaşım ücreti alınmaz.",
    areaOther: "Diğer bölgelerde ulaşım masrafları servis ücretine dahildir."
        },

        form: {
            name: "Ad Soyad",
            namePlaceholder: "Adınız ve soyadınız",
            email: "E-posta",
            emailPlaceholder: "E-posta adresiniz",
            service: "Hizmet",
            selectService: "Hizmet seçin",
            message: "Nasıl yardımcı olabilirim?",
            messagePlaceholder:
                "Neye ihtiyacınız olduğunu yazın...",
            submit: "Talep Gönder",
            success:
                "Teşekkürler. Hizmet talebiniz hazırlanmıştır."
        },

        menu: {
            open: "Menüyü aç",
            close: "Menüyü kapat"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Tüm hakları saklıdır.",
            tagline:
                "IT Desteği & Dijital Çözümler"
        }

    },


    /* -------------------------------------------------
       Russian
       ------------------------------------------------- */

    ru: {

        site: {
            title: "ITSupportRotterdam | IT-поддержка и цифровые решения",
            description:
                "ITSupportRotterdam предоставляет практическую IT-поддержку, обслуживание ПК, диагностику, услуги по оборудованию и программному обеспечению, а также создание профессиональных WebCV."
        },

        nav: {
            home: "Главная",
            services: "Услуги",
            about: "Обо мне",
            contact: "Контакты"
        },

        cta: {
            request: "Запросить услугу"
        },

        hero: {
            eyebrow: "ПРАКТИЧЕСКАЯ IT-ПОДДЕРЖКА",
            titleStart: "IT-решения, на которые вы",
            titleHighlight: "можете положиться.",
            text:
                "Практичная и надежная IT-поддержка для компьютеров, программного обеспечения, оборудования и повседневных технических проблем.",
            request: "Запросить услугу",
            view: "Посмотреть услуги"
        },

        services: {
            eyebrow: "ЧТО Я ПРЕДЛАГАЮ",
            title: "IT-услуги",
            text:
                "Практические технологические услуги для частных пользователей, специалистов и малого бизнеса.",

            cards: {

                support: {
                    title: "IT-поддержка",
                    text:
                        "Помощь с повседневными проблемами компьютеров, программ, устройств и технологий."
                },

                maintenance: {
                    title: "Обслуживание ПК",
                    text:
                        "Очистка ПК, проверка производительности, обновления и общее обслуживание."
                },

                hardware: {
                    title: "Оборудование и ПО",
                    text:
                        "Модернизация оборудования, установка программ, настройка и обновления."
                },

                troubleshooting: {
                    title: "Диагностика и устранение проблем",
                    text:
                        "Диагностика и решение распространенных проблем компьютеров, программ и устройств."
                },

                webcv: {
                    title: "Создание WebCV",
                    text:
                        "Профессиональные персональные CV-сайты для современных заявок на работу."
                }

            }
        },

        about: {
            eyebrow: "О ITSupportRotterdam",
            title: "Технологии — просто и практично.",
            p1:
                "ITSupportRotterdam предоставляет практическую IT-поддержку и цифровые услуги с акцентом на понятное общение, надежные решения и профессиональный сервис.",
            p2:
                "От решения повседневных проблем ПК до создания профессионального WebCV — цель проста: сделать технологии полезными для вас."
        },

        contact: {
            eyebrow: "СВЯЖИТЕСЬ СО МНОЙ",
            title: "Нужна IT-помощь?",
            text:
                "Расскажите, с чем вам нужна помощь, и я свяжусь с вами.",
            email: "Написать по e-mail",
            whatsapp: "WhatsApp",
    areaTitle: "ЗОНА ОБСЛУЖИВАНИЯ И ВЫЕЗД",
    areaHeading: "Зона обслуживания и выезд",
    areaLocation: "Мы работаем из Poortugaal, Rotterdam.",
    areaFree: "Для клиентов в Poortugaal, Rhoon и Hoogvliet выезд бесплатный.",
    areaOther: "Для других районов транспортные расходы включены в стоимость услуги."
        },

        form: {
            name: "Имя",
            namePlaceholder: "Ваше имя",
            email: "Email",
            emailPlaceholder: "Ваш адрес электронной почты",
            service: "Услуга",
            selectService: "Выберите услугу",
            message: "Чем я могу помочь?",
            messagePlaceholder:
                "Расскажите, с чем вам нужна помощь...",
            submit: "Отправить запрос",
            success:
                "Спасибо. Ваш запрос на услугу подготовлен."
        },

        menu: {
            open: "Открыть меню",
            close: "Закрыть меню"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Все права защищены.",
            tagline:
                "IT-поддержка и цифровые решения"
        }

    },


    /* -------------------------------------------------
       Ukrainian
       ------------------------------------------------- */

    uk: {

        site: {
            title: "ITSupportRotterdam | IT-підтримка та цифрові рішення",
            description:
                "ITSupportRotterdam надає практичну IT-підтримку, обслуговування ПК, діагностику, послуги з обладнання та програмного забезпечення, а також створення професійних WebCV."
        },

        nav: {
            home: "Головна",
            services: "Послуги",
            about: "Про мене",
            contact: "Контакти"
        },

        cta: {
            request: "Замовити послугу"
        },

        hero: {
            eyebrow: "ПРАКТИЧНА IT-ПІДТРИМКА",
            titleStart: "IT-рішення, на які ви",
            titleHighlight: "можете покластися.",
            text:
                "Практична та надійна IT-підтримка для комп’ютерів, програмного забезпечення, обладнання та повсякденних технічних проблем.",
            request: "Замовити послугу",
            view: "Переглянути послуги"
        },

        services: {
            eyebrow: "ЩО Я ПРОПОНУЮ",
            title: "IT-послуги",
            text:
                "Практичні технологічні послуги для домашніх користувачів, фахівців і малого бізнесу.",

            cards: {

                support: {
                    title: "IT-підтримка",
                    text:
                        "Допомога з повсякденними проблемами комп’ютерів, програм, пристроїв і технологій."
                },

                maintenance: {
                    title: "Обслуговування ПК",
                    text:
                        "Очищення ПК, перевірка продуктивності, оновлення та загальне обслуговування."
                },

                hardware: {
                    title: "Обладнання та програмне забезпечення",
                    text:
                        "Модернізація обладнання, встановлення програм, налаштування та оновлення."
                },

                troubleshooting: {
                    title: "Діагностика та усунення несправностей",
                    text:
                        "Діагностика та вирішення поширених проблем комп’ютерів, програм і пристроїв."
                },

                webcv: {
                    title: "Створення WebCV",
                    text:
                        "Професійні персональні CV-сайти для сучасного пошуку роботи."
                }

            }
        },

        about: {
            eyebrow: "ПРО ITSupportRotterdam",
            title: "Технології — просто й практично.",
            p1:
                "ITSupportRotterdam надає практичну IT-підтримку та цифрові послуги з акцентом на зрозуміле спілкування, надійні рішення та професійний сервіс.",
            p2:
                "Від вирішення повсякденних проблем ПК до створення професійного WebCV — мета проста: зробити технології корисними для вас."
        },

        contact: {
            eyebrow: "ЗВ’ЯЖІТЬСЯ ЗІ МНОЮ",
            title: "Потрібна IT-допомога?",
            text:
                "Розкажіть, з чим вам потрібна допомога, і я зв’яжуся з вами.",
            email: "Написати на e-mail",
            whatsapp: "WhatsApp",
    areaTitle: "ЗОНА ОБСЛУГОВУВАННЯ ТА ВИЇЗД",
    areaHeading: "Зона обслуговування та виїзд",
    areaLocation: "Ми працюємо з Poortugaal, Rotterdam.",
    areaFree: "Для клієнтів у Poortugaal, Rhoon та Hoogvliet виїзд безкоштовний.",
    areaOther: "Для інших районів витрати на виїзд включені у вартість послуги."
        },

        form: {
            name: "Ім’я",
            namePlaceholder: "Ваше ім’я",
            email: "Email",
            emailPlaceholder: "Ваша електронна адреса",
            service: "Послуга",
            selectService: "Виберіть послугу",
            message: "Чим я можу допомогти?",
            messagePlaceholder:
                "Розкажіть, з чим вам потрібна допомога...",
            submit: "Надіслати запит",
            success:
                "Дякую. Ваш запит на послугу підготовлено."
        },

        menu: {
            open: "Відкрити меню",
            close: "Закрити меню"
        },

        footer: {
            copyright:
                "© 2026 ITSupportRotterdam. Усі права захищені.",
            tagline:
                "IT-підтримка та цифрові рішення"
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
        translations[lang] || translations.en;

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
                translations[
                    document.documentElement.lang
                ] || translations.en;

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
                    translations[
                        document.documentElement.lang
                    ] || translations.en;

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
                translations[
                    document.documentElement.lang
                ] || translations.en;

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
                translations[
                    document.documentElement.lang
                ] || translations.en;

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






