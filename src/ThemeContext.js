import React from "react";
export default React.createContext({ theme: "", updateTheme: (name) => {} });

// verander alles in geel na :
export const OpleidingProvider = (props) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      className: "normalopl", //promoopl, fullopl//*
      img: "frontend1.jpg",
      categorie: "devmt",
      titel: "Digital Skills",
      ondertitel: "Maak een webshop met frameworks",
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
        "Van maandag tot vrijdag, van 9 tot 17u.  50' middagpauze.  geen les op woensdag, zaterdag en zondag (studiedagen).Groepjes van max 7cursisten. - Meerderjarig en ingeschreven zijn bij de VDAB.Vervoerskosten deels terugbetaald, geen degressiviteit van werkloosheidsuitkering. Mac of PC (8ram++). Creatief en computerminded zijn",
    },

    {
      id: 2,
      img: "ukFrontend.jpg",
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
      titel: ".Net Developer",
      categorie: "devmt",
      periode: "03 Augustus - 10 December",
      ondertitel: "Bijzonder gegeerd op de arbeidsmarkt",
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
      titel: "Java Developer",
      ondertitel: "Optie IOT",
      categorie: "devmt",
      periode: "03 Augustus - 10 December",

      modaltitel: "kuisvrouw",
      modal: "Webshops zitten in de lift",
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
      id: 5,
      img: "networks.jpg",
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
      titel: "Java Developer",
      ondertitel: "Pure BackEnd",
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
      id: 7,
      img: "ukFrontend.jpg",
      titel: "ICT Systeembeheer",
      ondertitel: "Je zorgt dat alles werkt",
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
      id: 25,
      img: "security.jpg",
      titel: "ICT netwerken-, server en internetsecurity",
      ondertitel: "Zowel Windows als Linux",
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
  ]);

  return (
    <ThemeContext.Provider value={[courses, setCourses]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// https://www.youtube.com/watch?v=35lXWvCuM8o&t=358s 21'30
