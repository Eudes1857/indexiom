import React from "react"
import Title from "../../features/title/Title"
import { isCatalogueTitle } from '../../data/TitleData';
import StepOne from "./StepOne";

const RdvPage = () =>{

    return(

        <>
            <Title {...isCatalogueTitle}/>
            <StepOne/>
        </>
    )
}

export default RdvPage