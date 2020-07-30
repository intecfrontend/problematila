import React from "react";
import "./ModalContent.css";
import "../button.css";

import FEclass from "../portfolio/01-full.jpg"; /*eslint no-undef: 2*/





const ModalContent = () => {
    return (
        <div className="modal-body">
            <div className="XL middle subtitle">Webshops zitten in de lift</div>
            <img className="modal-img" src={FEclass} alt="FEclass" />
            <div className="hoverblocker S">
                <br />
                <br />
                De allereerste website werd in 1991 gepubliceerd door Tim
                Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe
                tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo
                op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3
                van de gebruikers naar content via hun smartphone, ...
                Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met
                elkaar verbonden, waardoor ook de kennis steeds moet worden
                bijgeschaafd. <br />
                <br />
                <h6 className="F">Wat is Front-End? </h6>De term Front-End houdt
                het gedeelte van een toepassing in dat voor de gebruiker zichtbaar
                is. Front-end development houdt in: het omzetten van een ontwerp
                van een website of andere toepassing in een technisch goed werkend
                geheel. Hierbij maak je gebruik van onder meer HTML, CSS en
                Javascript. Zo zorgt de Front-End developer ervoor dat alles
                perfect wordt weergegeven op zowel Smartphone, tablet of ander
                device. <br />
                <br />
                <h6 className="F">Wat is Back-End?</h6> De Back-End van een
                toepassing is het gedeelte dat niet zichtbaar is voor de
                gebruiker. Over het algemeen bestaat de Back-End uit drie
                onderdelen: de database, de server en de applicatie. Voorbeelden
                van processen die in de Back-End plaatsvinden zijn het registreren
                van nieuwe gebruikers, het oploaden van bestanden en het uitlezen
                van nieuwsberichten vanuit een database. Back-End development
                beslaat een zeer breed terrein: van het implementeren van
                betaalmethoden in een webshop tot de werking van een compleet
                beheersysteem. Hierbij maak je vooral gebruik van PHP.
                Omschrijving De opleiding Front-End Developer is een 20 weken
                durende intensieve training op basis van 4 lesdagen per week,
                aangevuld met begeleide thuisstudie en opdrachten. <br /> <br />
                Vanaf januari starten we met specifieke front-end kennis: HTML,
                CSS en Javascript. In het laatste stuk van het eerste deel komt
                een gevorderde module HTML en CSS, waarin Bootstrap zijn
                opwachting maakt. Het tweede deel staat het eindproject centraal,
                het maken van je portfolio. De technieken van scrum-meetings wordt
                aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de
                lessen wordt verder gebouwd op de kennis van het eerste deel door
                praktijkgerichte opdrachten. De focus ligt hierbij vooral op{" "}
                <h6 className="S F">
                    Javascript & Vue- en React- frameworks.
                </h6>{" "}
                Gedurende het werk je aan het eindwerk met tussentijdse deadlines.{" "}
                <br /> <br />
                <h6 className="F">Voor wie is deze opleiding bestemd? </h6>
                Vanaf 18 jaar kan je instappen in dit opleidingstraject.
                <br />
                Iedereen die een professionele webshop wil leren maken in een
                framework is welkom in deze praktijkgerichte opleiding frontend
                developer.
                <br /> <br />
            </div>

            
            <p className="myshadow1 mimodalinfo">
                <h6 className="F S">10januari - 15juli</h6>
                <span className="oneliner" >
                Van maandag tot vrijdag, van 9 tot 17u. $ 50' middagpauze. $
                geen les op woensdag, zaterdag en zondag (studiedagen). $
                Groepjes van max 7cursisten. $ - Meerderjarig en ingeschreven zijn
                bij de VDAB. $ $
                Vervoerskosten deels terugbetaald, geen degressiviteit van
                werkloosheidsuitkering. $ 
                Mac of PC (8ram++). $ </span>
            </p>
        </div>
    );
};
export default ModalContent;
