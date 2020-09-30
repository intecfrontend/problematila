import React, { useState, createContext } from "react";
export const OpleidingContext = createContext();

// verander alles in geel na :
export const OpleidingProvider = (props) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      className: "normalopl", //promoopl, fullopl//*
      img: "frontend1.jpg",
      categorie: "devmt",
      ribbon: "plaats",
      titel: "Digital Skills",
      ondertitel: "Maak een webshop met frameworks",
      periode: "13 Augustus - 10 December",

      modaltitel: "Frontender",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++). Creatief en computerminded zijn.",
    },

    {
      id: 2,
      img: "ukFrontend.jpg",
      ribbon: "plaatsweg",
      titel: "Front-End in English",
      ondertitel: "Web Development given in English",
      categorie: "devmt",
      periode: "03 Augustus - 10 December",

      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++).",
    },
    {
      id: 3,
      img: "Csharp.jpg",
      ribbon: "plaatsweg",
      titel: ".Net Developer",
      categorie: "devmt",
      periode: "03 Augustus - 10 December",
      ondertitel: "Gegeerd op de arbeidsmarkt",
      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++).",
    },
    {
      id: 4,
      img: "java.jpg",
      ribbon: "plaatsweg",
      titel: "Java Developer",
      ondertitel: "Optie IOT",
      categorie: "devmt",
      periode: "28september - 01juli 2021",

      modaltitel: "JAVA",
      modalondertitel: "Complexiteit eenvoudig maken",
      modalImg: "JAclass",

      modalp1:
        "Of je een beginnende ontwikkelaar of programmeur bent of voor de eerste keer programmeert in Java, met de cursus Java programmeren ontpop je tot een applicatie-ontwikkelaar. ",
      modalh1: "Java is veelgebruikt en veelgevraagd.",
      modalp2:
        "De taal kan als oplossing voor de meest veeleisende (bedrijfs)toepassingen ingezet worden. Java is een zogenaamde objectgeoriënteerde (OOP) taal en beschrijft alles zoals in het dagelijks leven. In Java bestaan objecten die beschikken over eigenschappen (ofwel variabelen) en deze objecten kunnen bepaalde acties verrichten, dat codeert een Java-ontwikkelaar.",
      modalh2:
        "Je wordt begeleid door een heel vriendelijke instructeur die je overal zal doorheen loodsen.",
      modalp3:
        "We verwachten ook dat je gedurende dit jaar thuis verder oefent. Vallen, opstaan en weer doorgaan met geen goeie dosis gezond verstand en wilskracht.",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4: "",
      modalh4: "Waarom Java studeren?",
      modalp5:
        "We evolueren naar een ge-automatiseerde maatschappij. Hierdoor is er een steeds grotere behoefte aan programmeurs die efficiente apps kunnen schrijven, onderhouden, en moderniseren.",
      modalp6:
        "Weinige beroepen zijn voor het leven maar deze is het zeker, bovendien zal je ook een leven lang kunnen evolueren in dit beroep waar een groeiende vraag naar is vanuit de bedrijfswereld.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Kennis van Windows 10.",
    },
    {
      id: 5,
      img: "networks.jpg",
      ribbon: "plaatsweg",
      titel: "PC & Netwerktechnicus",
      ondertitel: "Handige harries met logica",
      categorie: "netw",
      periode: "03 Augustus - 10 December",

      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++).",
    },
    {
      id: 51,
      img: "ukFrontend.jpg",
      ribbon: "plaats",
      titel: "PC & Netwerktechnicus ",
      ondertitel: "voor anderstaligen",
      categorie: "netw",
      periode: "03 Augustus - 10 December",

      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++).",
    },
    {
      id: 6,
      img: "java.jpg",
      ribbon: "plaatsweg",
      titel: "Java Developer",
      ondertitel: "Pure BackEnd",
      categorie: "devmt",
      periode: "03 Augustus - 10 December",

      modaltitel: "JAVA",
      modalondertitel: "Complexiteit eenvoudig maken",
      modalImg: "JAclass",

      modalp1:
        "Of je een beginnende ontwikkelaar of programmeur bent of voor de eerste keer programmeert in Java, met de cursus Java programmeren ontpop je tot een applicatie-ontwikkelaar. ",
      modalh1: "Java is veelgebruikt en veelgevraagd.",
      modalp2:
        "De taal kan als oplossing voor de meest veeleisende (bedrijfs)toepassingen ingezet worden. Java is een zogenaamde objectgeoriënteerde (OOP) taal en beschrijft alles zoals in het dagelijks leven. In Java bestaan objecten die beschikken over eigenschappen (ofwel variabelen) en deze objecten kunnen bepaalde acties verrichten, dat codeert een Java-ontwikkelaar.",
      modalh2:
        "Je wordt begeleid door een heel vriendelijke instructeur die je overal zal doorheen loodsen.",
      modalp3:
        "We verwachten ook dat je gedurende dit jaar thuis verder oefent. Vallen, opstaan en weer doorgaan met geen goeie dosis gezond verstand en wilskracht.",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4: "",
      modalh4: "Waarom Java studeren?",
      modalp5:
        "We evolueren naar een ge-automatiseerde maatschappij. Hierdoor is er een steeds grotere behoefte aan programmeurs die efficiente apps kunnen schrijven, onderhouden, en moderniseren.",
      modalp6:
        "Weinige beroepen zijn voor het leven maar deze is het zeker, bovendien zal je ook een leven lang kunnen evolueren in dit beroep waar een groeiende vraag naar is vanuit de bedrijfswereld.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Kennis van Windows 10.",
    },
    {
      id: 5,
      img: "networks.jpg",
      ribbon: "plaatsweg",
      titel: "PC & Netwerktechnicus",
      ondertitel: "Handige harries met logica",
      categorie: "netw",
      periode: "03 Augustus - 10 December",

      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++).",
    },
    {
      id: 7,
      img: "ukFrontend.jpg",
      ribbon: "plaatsweg",
      titel: "ICT Systeembeheer",
      ondertitel: "Je zorgt dat alles werkt",
      categorie: "devmt",
      periode: "28september - 01juli 2021",

      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++). Wiskundig inzicht en doorzettingsvermogen hebben.",
    },
    {
      id: 25,
      img: "security.jpg",
      ribbon: "plaatsweg",
      titel: "ICT netwerken-, server en internetsecurity",
      ondertitel: "Zowel Windows als Linux",
      categorie: "netw",
      periode: "28september - 01juli 2021",

      modaltitel: "kuisvrouw",
      modalondertitel: "Webshops zitten in de lift",
      modalImg: "location.jpg",
      binnenimg: "frontendklas2019.jpg",

      modalp1:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ... Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd.",
      modalh1: "Wat is Front-End?",
      modalp2:
        "De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.",
      modalh2: "Wat is Back-End?",
      modalp3:
        "De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. Vanaf januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt. Het tweede deel staat het eindproject centraal, het maken van je portfolio. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op",
      modaltussenh3: "Javascript & Vue- en React- frameworks.",
      modalp4:
        "Gedurende het werk je aan het eindwerk met tussentijdse deadlines.",
      modalh4: "Voor wie is deze opleiding bestemd?",
      modalp5: "Vanaf 18 jaar kan je instappen in dit opleidingstraject.",
      modalp6:
        "Iedereen die een professionele webshop wil leren maken in een framework is welkom in deze praktijkgerichte opleiding frontend developer.",

      modalvoorwaarden:
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++).",
    },
  ]);

  return (
    <OpleidingContext.Provider value={[courses, setCourses]}>
      {props.children}
    </OpleidingContext.Provider>
  );
};

// https://www.youtube.com/watch?v=35lXWvCuM8o&t=358s 21'30
