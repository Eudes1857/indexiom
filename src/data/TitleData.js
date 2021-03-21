import TitleFondation from "../images/title-fondation.jpg"
import Header from "../images/header.jpg"
import catalogueTitle from "../images/catalogueTitle.jpg"
import EquipTitle from "../images/title-equipe.jpg"
import TitleContact from "../images/titleContact.jpg"

export const isFondationTitle = {
    id: "titleFondation",
    heading: "Indexiom",
    title: "La Fondation",
    background: TitleFondation,
    button: {
        b1:{
            name: "Audit marketing 360° gratuit",
            path: "/rdv"
        },
        b2:{
            name: "Démarrer mon projet",
            path: "/#"
        }
    }
};

export const isMethodeTitle = {
    id: "titleMethode",
    heading: "Indexiom",
    title: "Notre méthode",
    background: Header,
    button: {
        b1:{
            name: "Audit marketing 360° gratuit",
            path: "/rdv"
        },
        b2:{
            name: "Démarrer mon projet",
            path: "/#"
        }
    }
};

export const isCatalogueTitle = {
    id: "titleCatalogue",
    heading: "Indexiom",
    title: "Le catalogue",
    background:catalogueTitle,
    button: {
        b1:{
            name: "Audit marketing 360° gratuit",
            path: "/#"
        },
        b2:{
            name: "Démarrer mon projet",
            path: "/#"
        }
    }
}

export const isEquipTitleData = {
    id: "titleEquip",
    heading: "Indexiom",
    title: "Notre équipe",
    background:EquipTitle,
    button: {
        b1:{
            name: "Audit marketing 360° gratuit",
            path: "/#"
        },
        b2:{
            name: "Démarrer mon projet",
            path: "/#"
        }
    }
}

export const isContactTitleData = {
    id: "titleContact",
    heading: "Indexiom",
    title: "Contacts",
    background: TitleContact,
    button: {
        b1:{
            name: "Audit marketing 360° gratuit",
            path: "/#"
        },
        b2:{
            name: "Démarrer mon projet",
            path: "/#"
        }
    }
}