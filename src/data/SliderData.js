import indexiomMain from "../images/slider1.png";
import indexiomZero from "../images/slider2.png";
import indexiomStudio from "../images/slider3.png";
import indexiomCommando from "../images/slider4.png";

export const SliderData = [
  {
    name: "INDEXIOM",
    title: "Indexez vos problèmes<br/> pour vraiment décoller",
    description:
      "Nous vous accompagnons <br />pour faire parler vos clients,<br/> leur parler pour vous<br /> et les faire parler de vous (en bien)",
    path: "/main",
    image: indexiomMain,
    alt: "Indexiom zero",
    cta: [
      { label: "audit 360° gratuit", path: "/audit-360-gratuit" },
      { label: "demarrer mon projet", path: "/demarrer" },
    ],
  },
  {
    name: "INDEXIOM ZERO",
    title: "Tout commence <br/>par la bonne question",
    description:
      "Faites parler vos clients potentiels<br/> avec des études de marchés<br/> qui vous donneront les reponses<br/> dont vous avez besoin pour décoller.",
    path: "/catalogue-zero",
    image: indexiomZero,
    alt: "Indexiom zero",
    cta: [
      { label: "acceder au catalogue zéro", path: "/catalogue-indexiom-zero" },
    ],
  },
  {
    name: "INDEXIOM STUDIOS",
    title: "La meilleure publicité<br/> est celle que l'on retient",
    description:
      "Nous parlons  pour vous en eblouissant<br/> votre audiance avec des visuels et vidéos<br/> qui resteront gravés dans leurs esprits<br/> et vous feront décoller.",
    path: "/catalogue-studios",
    image: indexiomStudio,
    alt: "Indexiom studios",
    cta: [
      {
        label: "acceder au catalogue studios",
        path: "/catalogue-indexiom-studio",
      },
    ],
  },
  {
    name: "INDEXIOM COMMANDO",
    title: "La guerre se gagne<br/> sur le terrain, sous le soleil",
    description:
      "Faites parler de vous avec des campagnes<br/> urbaines et rurales innovantes qui vous<br/> rapprocheront vraiment des clients<br /> potentiels qui vous feront émerger.",
    path: "/catalogue-commando",
    image: indexiomCommando,
    alt: "Indexiom commando",
    cta: [
      {
        label: "acceder au catalogue commando",
        path: "/catalogue-indexiom-commando",
      },
    ],
  },
];
