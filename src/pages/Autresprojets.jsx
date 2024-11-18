import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

import Form from "../components/Form";

let archives = [
  {
    id: "1",
    genre_ids: ["Mic", "JS"],
    poster_path: "./img/poster-microphoneAPI.jpg",
    title: "Mise en oeuvre des APIs du Micro",
    overview:
      "Mise en oeuvre de l'API du microphone offerte par le navigateur. Vous devez autoriser l'utilisation du micro",
    url: "../sites/CameraAndMic/microphoneAPI/index.html",
  },
  {
    id: "4",
    genre_ids: ["CSS", "FFT", "JS"],
    poster_path: "./img/poster-fft2.jpg",
    title: "Animation graphique basée sur FFT",
    overview:
      "Utilisation d'une transformée de Fourier rapide pour décomposer un son en bande de fréquence et faire une animation",
    url: "../sites/audio/audioAnalyserV2/index.html",
  },
  {
    id: "7",
    genre_ids: ["CSS", "Canevas", "JS"],
    poster_path: "./img/poster-sortingVisualizer1.jpg",
    title: "Sorting visualizer 1",
    overview: "Animation graphique autour d'un algoritme de tri des données",
    url: "../sites/algo/sortingvisualizer/1/index.html",
  },
  {
    id: "8",
    genre_ids: ["CSS", "Canevas", "JS"],
    poster_path: "./img/poster-sortingVisualizer2.jpg",
    title: "Sorting visualizer 2",
    overview: "Animation graphique autour d'un algoritme de tri des données",
    url: "../sites/algo/sortingvisualizer/2/index.html",
  },
  {
    id: "11",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-CSS-3D-Nav.jpg",
    title: "Home page avec un menu effet 3D",
    overview: "Animation graphique en CSS",
    url: "../sites/html-css/CSS-3D-nav-master/index.html",
  },
  {
    id: "12",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-CSS-Video-background.jpg",
    title: "Home page avec une vidéo en background",
    overview: "Animation graphique en CSS",
    url: "../sites/html-css/CSS-video-background/index.html",
  },
  {
    id: "13",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-Darkmode.jpg",
    title: "Home page avec darkmode",
    overview: "Gestion du darkmode",
    url: "../sites/html-css/Darkmode/index.html",
  },
  {
    id: "15",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-ClickGame.jpg",
    title: "Clic game (Covid19)",
    overview: "Un jeu où il faut cliquer sur les virus ...",
    url: "../sites/game/ClicGame/index.html",
  },
  {
    id: "16",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-moving-eyes.jpg",
    title: "Moving eyes !!",
    overview: "Une animation en CSS et Javascript ...",
    url: "../sites/game/Moving-eyes/index.html",
  },
  {
    id: "1",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-meursault.jpg",
    title: "Clos Meursault",
    overview: "Site vitrine d'un domaine viticole et gîte d'hébergement",
    url: "../sites/html-css/clos-meursault/index.html",
  },
  {
    id: "2",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-liebniz.jpg",
    title: "Calcul de PI",
    overview:
      "Comparaison de deux méthodes de calcul de PI, celle de Leibniz de 1676, et celle de Bailey,Borwein,Plouffe (BBP) Formula de 1995",
    url: "../sites/algo/calculate-PI/index.html",
  },
  {
    id: "3",
    genre_ids: ["JS", "CSS"],
    poster_path: "./img/poster-bubble-game.jpg",
    title: "Bubble Game",
    overview: "L'objectif est de cliquer les bulles à l'écran",
    url: "../sites/game/bubble-game/index.html",
  },
  {
    id: "4",
    genre_ids: ["JS", "CSS"],
    poster_path: "./img/poster-snake.jpg",
    title: "Snake game",
    overview: "Un jeu de Snake codé en Javascript",
    url: "../sites/game/SnakeGame/index.html",
  },
  {
    id: "5",
    genre_ids: ["JS", "CSS"],
    poster_path: "./img/poster-Calculator.jpg",
    title: "Calculette basique",
    overview: "Une calculette basique codée en Javascript",
    url: "../sites/html-css/Calculator/index.html",
  },
  {
    id: "6",
    genre_ids: ["JS", "CSS", "Greensock"],
    poster_path: "./img/poster-Homepage-GreenSock1.jpg",
    title: "Landing page animée",
    overview: "Une landing page animée avec la librairie Greensock",
    url: "../sites/LandingPages/HomePage-GreenSock1/index.html",
  },
  {
    id: "9",
    genre_ids: ["JS", "CSS"],
    poster_path: "./img/poster-MouseAnimation.jpg",
    title: "Landing page avec effet sur la souris",
    overview: "Une landing page avec un effet sur la souris",
    url: "../sites/LandingPages/MouseAnimation/index.html",
  },
  {
    id: "10",
    genre_ids: ["JS", "CSS", "Tailwind"],
    poster_path: "./img/poster-tailwind-landing-page.jpg",
    title: "Landing page fait avec Tailwind",
    overview: "Une landing page Tailwind",
    url: "../sites/LandingPages/tailwind-landing-page/index.html",
  },
];

const Autresprojets = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Form projets={archives} />
    </div>
  );
};

export default Autresprojets;
