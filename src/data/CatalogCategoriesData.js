import IzeroBlack from "../images/izeroBlack.png"
import IcommandoBlack from "../images/icommandoBlack.png"
import IStudioBlack from "../images/istudioBlack.png";
import IzeroOrange from "../images/izeroOrange.png";
import IcommandoOrange from "../images/icommandoOrange.png";
import IStudioOrange from "../images/istudioOrange.png";
import Isecure from "../images/isecure.png"
import Iappmobile from "../images/iappmobile.png"
import Idecollage from "../images/idecollage.png"
import IsecureWhite from "../images/isecure-white.png"
import IappmobileWhite from "../images/iappmobile-white.png"
import IdecollageWhite from "../images/idecollage-white.png"
import Imarket from "../images/imarketBlack.png";
import ImarketWhite from "../images/imarketWhite.png"


export const isCatalogCatData = {
    categories: [
        {
            id: 0,
            title: "Indexiom Zéro",
            icon: IzeroBlack,
            icon_orange: IzeroOrange
        },
        {
            id: 1,
            title: "Indexiom Studios",
            icon: IStudioBlack,
            icon_orange: IStudioOrange
        },
        {
            id: 2,
            title: "Indexiom Commandos",
            icon: IcommandoBlack,
            icon_orange: IcommandoOrange
        }

    ]
}

export const isPrestationSubGroup = {
    headerZero: "Prénez des décisions éclairées",
    headerStudios: "Insert Indexiom Studio Title",
    headerCommando: "Insert Indexiom Commandos Title",

    prestElement:[
        {
            head: "Produits & Services",
            icon: Idecollage,
            icon_white: IdecollageWhite,
            id: 0,
        },
        {
            head: 'Clients',
            icon: Iappmobile,
            icon_white: IappmobileWhite,
            id: 1,
        },
        {
            head: `marché & concurrence`,
            icon: Imarket,
            icon_white: ImarketWhite,
            id: 2,
        },
        {
            head: `stratégie marketing`,
            icon: Isecure,
            icon_white: IsecureWhite,
            id: 3,
        }
    ]
}

