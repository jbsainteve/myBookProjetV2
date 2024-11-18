import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

let publications = [
  {
    id: "1",
    genre_ids: ["Trail", "Utmb"],
    poster_path: "./img/poster-utmb2024.jpg",
    title: "Mon UTMB 2024",
    overview: "L'UTMB est une course autour du Mont Blanc, 176km, 10000 D+",
    url: "https://www.youtube.com/watch?v=pKAe2xFizT4",
  },
  {
    id: "2",
    genre_ids: ["Blockchain", "NFT", "Crypto"],
    poster_path: "./img/poster-blockchain.jpg",
    title: "Tout sur la Blockchain",
    overview:
      "Article humoristique publié sur le journal de l'Ecole traitant de la Blockchain, les NFT et les crypto",
    url: "../sites/pdf/publication/Block-chainV2.pdf",
  },
  {
    id: "4",
    genre_ids: ["Arduino", "Raspberry PI", "Iot"],
    poster_path: "./img/poster-raspberry.jpg",
    title: "Arduino et Raspberry PI, what's this ?",
    overview:
      "Une introduction à l'Arduino et au Raspberry PI publiée sur le journal de l'école en 2017",
    url: "../sites/pdf/publication/ArduinoEtPi2017.pdf",
  },
  {
    id: "5",
    genre_ids: ["Crytographie", "Recherche"],
    poster_path: "./img/poster-zeta-de-riemann.jpg",
    title: "Zeta de Riemann ?",
    overview:
      "Une introduction à la fonction Zeta de Riemann et à la répartion des nombres premiers",
    url: "../sites/pdf/publication/ArticleRiemannV2.pdf",
  },
  {
    id: "6",
    genre_ids: ["Telecom", "Recherche"],
    poster_path: "./img/poster-histoire-telecom.jpg",
    title: "Les débuts de la communication sans fil ...",
    overview:
      "Une introduction à l'histoire des communication sans fil. Le tout début de cette histoire. Un article publié sur le journal de l'Ecole",
    url: "../sites/pdf/publication/HistoireTelecom.pdf",
  },
  {
    id: "7",
    genre_ids: ["Shazam", "JS"],
    poster_path: "./img/poster-shazam.jpg",
    title: "Comment marche Shazam ...",
    overview:
      "Une introduction au fonctionnement de Shazam, un article de 2014",
    url: "../sites/pdf/publication/Shazam2014.pdf",
  },
  {
    id: "8",
    genre_ids: ["Monty", "Hall"],
    poster_path: "./img/poster-MontyHall.jpg",
    title: "Le paradoxe de Monty Hall ...",
    overview:
      "Un jeu populaire sur les télés Américaines dans les années 60 ...",
    url: "../sites/pdf/publication/LaParadoxeDeMontyHall.pdf",
  },
  {
    id: "9",
    genre_ids: ["Trail", "Vidéo"],
    poster_path: "./img/poster-transpy2018.jpg",
    title: "Transpyrénéa 2018",
    overview:
      "La traversée intégrale des Pyrénées, de Banyuls à Hendaye par le GR10 en Août 2018. Une équipe internationale composée de 25 coureurs et 10 nationnalités",
    url: "https://www.youtube.com/watch?v=jkghnMAVkM0",
  },
  {
    id: "10",
    genre_ids: ["Trail", "Vidéo"],
    poster_path: "./img/poster-reunion2013.jpg",
    title: "Grand Raid de la Réunion 2013",
    overview: "La traversée de l'île de la Réunion, de St Pierre à St Denis",
    url: "https://www.youtube.com/watch?v=-TGKzw9Ihyg",
  },
  {
    id: "3",
    genre_ids: ["Trail"],
    poster_path: "./img/poster_gr10.jpg",
    title: "Ma presque Half Transpyrénéa 2023",
    overview: "La traversée des Pyrénées par le GR10 en 2023",
    url: "../sites/pdf/publication/MaHalfTranspy-2023-V1.pdf",
  },
];

const Publications = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Form projets={publications} />
    </div>
  );
};

export default Publications;
