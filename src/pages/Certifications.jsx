import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

let certifications = [
  {
    id: "2",
    genre_ids: ["Scrum", "Agile"],
    poster_path: "./img/Poster-scrum-agile.jpg",
    title: "Certifications Scrum, Agile",
    overview: "Sprint, Kanban, Daily, Product Backlog, ...",
    url: "../sites/pdf/projet/Certif-Agile-Scrum.pdf",
  },
  {
    id: "3",
    genre_ids: ["Data", "ML", "bigData", "Deep learning"],
    poster_path: "./img/poster-bigData-MachineLearning.jpg",
    title: "Ingénieur IA, Datascientist",
    overview:
      "Opérationnel sur les technologies de Machine Learning, de Deep Learning",
    url: "../sites/pdf/projet/Certif Data.pdf",
  },
  {
    id: "4",
    genre_ids: ["Front", "Back"],
    poster_path: "./img/poster-web.png",
    title: "Architecte applicatif Web",
    overview:
      "Opérationnel sur l'architecture des environnements Front et Back, opérationnel sur les problèmes de production",
    url: "",
  },
];

const Certifications = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Form projets={certifications} />
    </div>
  );
};

export default Certifications;
