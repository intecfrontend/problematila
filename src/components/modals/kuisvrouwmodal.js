import React from "react";
import "./ModalContent.css";
import "../button.css";

import JAclass from "../portfolio/02-full.jpg"; /*eslint no-undef: 2*/

const ModalContent = () => {
  return (
    <div className="modal-body">
      <div className="XL middle subtitle">Complexiteit eenvoudig maken</div>
      <img className="modal-img" src={JAclass} alt="JAclass" />
      <div className="hoverblocker S">
        <br />
        <br />
        Of je nou een beginnende ontwikkelaar of programmeur bent of voor de
        eerste keer programmeert in Java, met de cursus Java programmeren ontpop
        je tot een veelgevraagde applicatie-ontwikkelaar. Java is veelgebruikt
        en veelgevraagd, een van de populairste programmeertalen. De taal kan
        als oplossing voor de meest veeleisende (bedrijfs)toepassingen ingezet
        worden. Java is een zogenaamde objectgeoriënteerde (OO) taal en
        beschrijft alles zoals in het dagelijks leven. In Java bestaan objecten
        die beschikken over eigenschappen (ofwel variabelen) en deze objecten
        kunnen bepaalde acties verrichten. Dat maakt Java een zeer toegankelijke
        programmeertaal.
        <br />
        <br />
        <h6 className="F">Waarom Java studeren?</h6> We evolueren naar een
        ge-automatiseerde maatschappij. Hierdoor is er een steeds grotere
        behoefte aan programmeurs die efficiente apps kunnen schrijven,
        onderhouden, en moderniseren.
        <br />
        <h6 className="F">Voor wie is deze opleiding bestemd? </h6>
        Vallen, opstaan en weer doorgaan met geen goeie dosis gezond verstand,
        ben jij dat? Ben je werkloos, dan kan je vanaf 18 jaar kan je instappen
        in dit opleidingstraject.
        <br />
        Weinige beroepen zijn "voor het leven" maar deze is het zeker, bovendien
        zal je ook een leven lang kunnen evolueren in dit beroep met een
        groeiende vraag. <br /> <br />
      </div>
      <p className="myshadow1 mimodalinfo">
        <h6 className="F S">28september - 01juli 2021</h6>
        <br />
        Van maandag tot vrijdag, van 9 tot 17u.
        <br />
        50' middagpauze.
        <br />
        geen les op woensdag, zaterdag en zondag (studiedagen).
        <br />
        <br />
        Groepjes van max XX cursisten. - Meerderjarig en ingeschreven zijn bij
        de VDAB. <br /> Nederlands taalniveau 2.4
        <br />
        Je kan met windows werken.
        <br />
        Vervoerskosten deels terugbetaald, geen degressiviteit van
        werkloosheidsuitkering
        <br />
        Je kosten voor kinderopvang of buitenschoolse opvang worden
        terugbetaald.
        <br />
      </p>
    </div>
  );
};

export default ModalContent;
