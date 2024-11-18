import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

let projetsWeb = [
  {
    id: "2",
    genre_ids: ["Mic", "JS", "API"],
    poster_path: "./img/poster-speechRecognition.jpg",
    title: "Speech Recognition (Anglais)",
    overview:
      "Mise en oeuvre des APIs de reconnaissance vocale fournies par le navigateur (pas tous)",
    url: "../sites/CameraAndMic/Speech-Recognition/index.html",
  },
  {
    id: "3",
    genre_ids: ["CSS", "FFT", "JS"],
    poster_path: "./img/poster-fft1.jpg",
    title: "Analyse spectrale d'une musique",
    overview:
      "Utilisation d'une transformée de Fourier rapide pour décomposer un son en bande de fréquence",
    url: "../sites/audio/audioAnalyserV1/index.html",
  },
  {
    id: "5",
    genre_ids: ["CSS", "Canevas", "JS"],
    poster_path: "./img/poster-pumpkinAnimation.jpg",
    title: "Animation graphique basée sur le microphone",
    overview:
      "Animation graphique basée sur le microphone du PC (vous devez autoriser le micro et parler)",
    url: "../sites/audio/pumpkinAnimation/index.html",
  },
  {
    id: "6",
    genre_ids: ["CSS", "Canevas", "JS"],
    poster_path: "./img/poster-snail-audio-visualizer.jpg",
    title: "Animation graphique basée sur le microphone",
    overview:
      "Animation graphique basée sur le microphone du PC (vous devez autoriser le micro et parler)",
    url: "../sites/audio/Snail-audio-visualizer/index.html",
  },
  {
    id: "9",
    genre_ids: ["CSS", "Canevas", "JS"],
    poster_path: "./img/poster-sortingVisualizer3.jpg",
    title: "Sorting visualizer 3",
    overview: "Animation graphique autour d'un algoritme de tri des données",
    url: "../sites/algo/sortingvisualizer/3/index.html",
  },
  {
    id: "10",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-CSS-3D-Box-Move.jpg",
    title: "Home page avec animation 3D",
    overview: "Animation graphique en CSS",
    url: "../sites/html-css/CSS-3D-Box-JS-move/index.html",
  },
  {
    id: "14",
    genre_ids: ["CSS", "JS"],
    poster_path: "./img/poster-matrix-drum-kit.jpg",
    title: "Matrix Drum kit",
    overview:
      "Fond d'écran animé façon Matrix, utilisez les touches QSDFGHJ pour jouer !!",
    url: "../sites/game/Matrix-Drum-kit/index.html",
  },
  {
    id: "17",
    genre_ids: ["Webcam", "JS"],
    poster_path: "./img/poster-kameamea.jpg",
    title: "Kamé Hamé Ha !! (Webcam)",
    overview:
      "Vous devez présenter un objet bleu (genre bic bleu) à la caméra pour déclencher l'effet",
    url: "../sites/CameraAndMic/Kamehameha/index.html",
  },
  {
    id: "18",
    genre_ids: ["Webcam", "JS", "Canevas"],
    poster_path: "./img/poster-torchEffect.jpg",
    title: "Effet torche (Webcam)",
    overview:
      "Vous devez présenter un objet bleu (genre bic bleu) à la caméra pour déclencher l'effet torche",
    url: "../sites/CameraAndMic/Torch-Camera-Animation/index.html",
  },
  {
    id: "20",
    genre_ids: ["Webcam", "Mic", "JS", "Canevas"],
    poster_path: "./img/poster-CameraAndSountAPI.jpg",
    title: "Effet modulation de l'image",
    overview:
      "En parlant dans le micro, vous modulez la taille de l'image de la Webcam",
    url: "../sites/CameraAndMic/CameraAndSoundAPI/index.html",
  },
  {
    id: "19",
    genre_ids: ["JS", "Canevas"],
    poster_path: "./img/poster-UI-Animations.jpg",
    title: "Animation UI au survol",
    overview: "Un exemple de menu fait en Canevas/Javascript",
    url: "../sites/CameraAndMic/UI-Animations/index.html",
  },
  {
    id: "7",
    genre_ids: ["JS", "CSS", "Greensock"],
    poster_path: "./img/poster-Homepage-GreenSock2.jpg",
    title: "Landing page animée",
    overview: "Une landing page animée avec la librairie Greensock",
    url: "../sites/LandingPages/HomePage-GreenSock2/index.html",
  },
  {
    id: "8",
    genre_ids: ["JS", "CSS", "Greensock"],
    poster_path: "./img/poster-Homepage-SkeletonEffect.jpg",
    title: "Landing page animée",
    overview: "Une landing page animée avec le skeleton effect",
    url: "../sites/LandingPages/HomePage-SkeletonEffect/index.html",
  },
];

const Webproject = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Form projets={projetsWeb} />
    </div>
  );
};

export default Webproject;
