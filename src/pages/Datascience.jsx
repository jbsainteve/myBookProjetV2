import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

let projetsdata = [
  {
    id: "1",
    genre_ids: ["Python", "Streamlit"],
    poster_path: "./img/poster-projet7.jpg",
    title: "Scoring pour l'octroi de crédit",
    overview:
      "Application pour déterminer le risque d'octroyer un crédit à un client",
    url: "../sites/pdf/projet/projet7-octroiDeCredit.pdf",
  },
  {
    id: "2",
    genre_ids: ["Spark", "AWS", "pySpark"],
    poster_path: "./img/poster-projet8.png",
    title: "Déploiement d'un modèle de Classifier sur AWS",
    overview: "Déploiement d'un modèle d'IA dans AWS",
    url: "../sites/pdf/projet/projet8-deploiement-aws.pdf",
  },
  {
    id: "3",
    genre_ids: ["OpenCV", "Deep learning", "NLP"],
    poster_path: "./img/poster-projet6.jpg",
    title: "Classification automatique d'objets de consommation",
    overview:
      "Outil d'aide automatique de classification d'objets dans un catalogue",
    url: "../sites/pdf/projet/projet6-classification-vgg16.pdf",
  },
  {
    id: "4",
    genre_ids: ["ACP", "tSNE", "Kmeans"],
    poster_path: "./img/poster-projet5-segmentation.png",
    title: "Segmentation clients sur une plateforme de e-commerce",
    overview: "Analyser une base de client au vu de leur comportement",
    url: "../sites/pdf/projet/projet5-segmentation.pdf",
  },
  {
    id: "5",
    genre_ids: ["Nltk", "Textblob.sentiment"],
    poster_path: "./img/Poster-sentiment-analysis.jpg",
    title: "Sentiment Analysis",
    overview:
      "Analyse automatique de la tendance d'un texte en fonction de son contenu",
    url: "../sites/pdf/projet/projet5-sentiment-analysis.pdf",
  },
  {
    id: "6",
    genre_ids: ["Random Forest", "Regression"],
    poster_path: "./img/Poster-Projet4.gif",
    title: "Emission de CO2 et consommation d'énergie",
    overview: "Prévoir les émissions de CO2 des futurs bâtiments",
    url: "../sites/pdf/projet/projet4-prevision-co2.pdf",
  },
  {
    id: "7",
    genre_ids: ["Seaborn", "Matplotlib"],
    poster_path: "./img/Poster-projet3.jpg",
    title: "Application OpenFoodFacts",
    overview: "Une application au service de la santé publique ...",
    url: "../sites/pdf/projet/projet3-openFoodFacts.pdf",
  },
  {
    id: "8",
    genre_ids: ["Matplotlib", "Pandas"],
    poster_path: "./img/Poster-projet2.jpg",
    title: "Système éducatif",
    overview: "Etude de marché",
    url: "../sites/pdf/projet/projet2-systeme-educatif.pdf",
  },
  {
    id: "1",
    genre_ids: ["OpenCV", "Deep learning"],
    poster_path: "./img/poster-ParkingCounter.jpg",
    title: "Analyse en temps réel d'un parking",
    overview:
      "Calcul en temps réel du nombre de places disponibles sur un parking à partir d'une caméra",
    url: "../sites/Datascience/ParkingLot/index.html",
  },
];

const Datascience = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Form projets={projetsdata} />
    </div>
  );
};

export default Datascience;
