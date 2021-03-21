import sectionBG_zero from "../images/zero.jpeg";
import sectionBG_studio from "../images/studio.jpg";
import sectionBG_commando from "../images/commando.jpg";

export const iZeroSectionData = {
  id : 'iZero',
  heading: "indexiom zero",
  background: sectionBG_zero,
  subheading: "Tout commence par la bonne question",
  description:
    "Faites parler vos clients avec des études de marchés qui vous donneront les reponses dont vous avez besoin pour décoller.",
  buttonLabel: "Acceder au catalogue zéro",
  path: "/catalogue-indexiom-zero",
  delay: 100,
  reverse: false
};

export const iStudioData = {
  id:'iStudio',
  heading: "indexiom studio",
  background: sectionBG_studio,
  buttonLabel: "Acceder au catalogue studio",
  path: "/catalogue-indexiom-studio",
  delay: 300,
  reverse: false,
  subheading: "La bonne image vaut cent mots, et la vidéo: mille",
  description:
    "nous parlons  pour vous en eblouissant votre audiance avec des visuels et vidéos qui resteront gravés dans leurs esprits et vous feront décoller.",
};

export const iCommandoData = {
  id:'iStudio',
  heading: "indexiom commando",
  background: sectionBG_commando,
  buttonLabel: "Acceder au catalogue commando",
  path: "/catalogue-indexiom-commando",
  delay: 400,
  reverse: false,
  subheading: "La guerre se gagne sur le terrain, sous le soleil",
  description:
    "faite parler de vous avec des campagnes urbaines et rurales innovantes qui vous rapprocheront vraiment des clients potentiels qui vous feront emmerger.",
};
