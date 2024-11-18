import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

let projetslegacy = [
  {
    id: "2",
    genre_ids: ["C", "Multi-OS"],
    poster_path: "./img/poster-ups-agent-client.jpg",
    title: "Projet MGE UPS Systems",
    overview:
      "Développement d'une suite logicielle multi-plateforme pour la gestion d'onduleurs",
    url: "../sites/pdf/projet/projet-mge-ups-system-agent-client.pdf",
  },
  {
    id: "3",
    genre_ids: ["C", "Gros projet"],
    poster_path: "./img/poster-ComptaPublique.jpg",
    title: "Projet CPLO pour la Comptabilité Publique",
    overview:
      "Solution logicielle pour l'encaissement des Impôts et Amendes (Ministère des Finances)",
    url: "../sites/pdf/projet/projet-cplo.pdf",
  },
  {
    id: "4",
    genre_ids: ["C", "Shell", "Oracle"],
    poster_path: "./img/poster-serveur-editique.jpg",
    title: "Projet EDF Editique",
    overview:
      "Développement de la plate-forme d'impression de la facture client",
    url: "../sites/pdf/projet/projet-edf-editique.pdf",
  },
  {
    id: "5",
    genre_ids: ["Cobol", "Gros projet"],
    poster_path: "./img/poster-parier-spot.jpg",
    title: "Pariez Spot - PMU",
    overview:
      "Conception et réalisation de l'application « pariez Spot » du PMU",
    url: "../sites/pdf/projet/projet-pariez-spot-pmu.pdf",
  },
  {
    id: "6",
    genre_ids: ["C", "Assembleur"],
    poster_path: "./img/poster-Terminal-PMU.jpg",
    title: "Projet Pegase - PMU",
    overview:
      "Intégration du terminal de prise de paris dans l'architecture Pégase",
    url: "../sites/pdf/projet/projet-pegase-pmu.pdf",
  },
  {
    id: "7",
    genre_ids: ["C", "SNMP"],
    poster_path: "./img/poster-onduleur.jpg",
    title: "Projet MGE UPS Systems – Carte embarquée",
    overview:
      "Développement du logiciel de pilotage d'un onduleur sur une carte PC spécifique embarquée",
    url: "../sites/pdf/projet/projet-mge-ups-system-carte-embarquee.pdf",
  },
  {
    id: "1",
    genre_ids: ["C++", "DeepLearning"],
    poster_path: "./img/Poster-presentoir.jpg",
    title: "Présentoir connecté",
    overview: "Conception d'un présentoir, tête de gondole, intelligent",
    url: "../sites/pdf/projet/projet-presentoir.pdf",
  },
  {
    id: "10",
    genre_ids: ["C", "Tcp/Ip", "SNMP"],
    poster_path: "./img/poster-Ups-link.jpg",
    title: "Projet MGE UPS Systems - Ups-Link",
    overview:
      "Développement du produit Ups-link avec son logiciel de pilotage d'un onduleur embarqué",
    url: "../sites/pdf/projet/projet-mge-ups-system-ups-link.pdf",
  },
  {
    id: "9",
    genre_ids: ["C", "SNMP"],
    poster_path: "./img/poster-ups-view.jpg",
    title: "Projet MGE UPS Systems - Ups-View",
    overview:
      "Développement de la console de supervision réseau des onduleurs de la gamme MGE UPS System",
    url: "../sites/pdf/projet/projet-mge-ups-system-ups-view.pdf",
  },
  {
    id: "10",
    genre_ids: ["Basic", "Electronique", "Mécanique"],
    poster_path: "./img/poster-pancs-elec.jpg",
    title: "Enseigne lumineuse animée",
    overview: "Conception d'une enseigne lumineuse animée.",
    url: "../sites/pdf/projet/projet-pancs-elec.pdf",
  },
];

const Legacy = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Form projets={projetslegacy} />
    </div>
  );
};

export default Legacy;
