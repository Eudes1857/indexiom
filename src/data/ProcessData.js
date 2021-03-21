import React from 'react'
import Paiement from "../images/paiement.png"
import Reunion from "../images/reunion.png"
import Accord from "../images/accord.png"
import ServiceClient from "../images/service-client.png"
import Livraison from "../images/livraison.png"


export const isOurProcess = {
    header: "Notre process",
    context:[
        {
            title: "Confirmation du paiement",
            content: `<p>Une fois vos prestations choisies, ajoutées au panier et votre paiement est effectué, nous vous envoyons immédiatement un courriel de confirmation auquel nous joignons votre facture. Cette dernière indique notamment le montant que vous avez versé et ce qui vous reste à payer dans le cas d'une avance, les prestations auxquelles vous avez droit, le délai d'exécution estimé et nos conditions générales d'utilisation. </p>`,
            image: Paiement
        },
        {
            title: "Rendez-vous Brief",
            content: `<p>Dans un délai maximum de 3 jours ouvrables après la réception de votre facture, notre directrice clientèle vous contactera pour convenir avec vous d'un rendez-vous brief destiné à cerner les spécificités de la mission afin que nos équipes vous fournissent un service de la meilleure qualité possible pour le succès de votre projet (sondage, campagne de communication, application mobile, etc).</p>`,
            image: ServiceClient
        },
        {
            title: "Séance Technique",
            content: `<p>Dans un délai maximum d'une semaine ouvrable après la confirmation du paiement, vous êtes contactés par l'associé gérant pour une séance de travail technique avec les directeurs des pôles Indexiom (Zéro, Studios et/ou Commandos) concernés par votre projet ou leurs représentants pour passer en revue ses détails techniques de mise en œuvre et vous communiquer le calendrier et le budget définitif d'exécution qui peuvent excéder les mentions de la facture pour des besoins techniques ou opérationnels.</p>`,
            image: Reunion
        },
        {
            title: "Démarrage de la mission",
            content: `<p>L'exécution de la mission relative à notre prestation démarre dans un délai de 2 jours maximum après encaissement d'un règlement cumulé au moins égal à 80% du total TTC du budget communiqué à la séance technique (ou ultérieurement si vous le souhaitez, principalement, dans le cas des campagnes de communication Commandos) et s'étend sur le délai d'exécution communiqué à la séance technique. Nous vous précisons cependant que le démarrage de toute prestation est subordonné au règlement total d'au moins 80% du solde TTC de la facture car elles sollicitent le concours de partenaires et de plateformes digitales internationales qui n'autorisent pas de paiements fractionnés.</p>`,
            image: Accord
        },
        {
            title: "Rapport de Mission et Livrables",
            content: `<p>Le rapport de mission et les livrables afférants à votre commande vous sont envoyés à votre adresse email au terme du délai d'exécution de la mission et dès que nous encaissons le solde de votre facture. Un questionnaire de satisfaction et une attestation de bonne exécution vous seront enfin soumis pour évaluer notre prestation. Un avoir allant jusqu'à 5% du montant reglé pourra vous être retrocédé en cas d'évaluation globale positive en contrepartie de l'utilisation de votre image et de votre témoignage sur notre plateforme Web et nos réseaux sociaux. cette obligation est caduque en cas d'évaluation globale négative(inférieure à 50%) et vous pourrez, dans ce cas, bénéficier d'un geste commercial. </p>`,
            image: Livraison
        },
    ]
}