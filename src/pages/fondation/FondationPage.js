import React from 'react'
import Title from '../../features/title/Title'
import { isFondationTitle } from '../../data/TitleData'

const FondationPage = () =>{

    return(
        <>
        <Title {...isFondationTitle}/>
        </>
    )
}

export default FondationPage;