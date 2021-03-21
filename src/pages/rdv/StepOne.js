import React from "react";
import TemplateRdv from "./Templates";
import { isStepOneData } from "../../data/rdvData"

const StepOne = () =>{
    
    return(
        <>
            <TemplateRdv {...isStepOneData}/>
        </>
    )
}

export default StepOne