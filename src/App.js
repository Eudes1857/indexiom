import React, { useState } from "react";
import { DiscoverDataLeft, DiscoverDataRight } from "./data/DiscoverData";
import { FooterData } from "./data/FooterData";
import { MenuData } from "./data/MenuData";
import {
  iZeroSectionData,
  iStudioData,
  iCommandoData,
} from "./data/SectionData";
import DiscoverSection from "./features/discoverSection/DiscoverSection";
import Footer from "./features/footer/Footer";
import Hero from "./features/hero/Hero";
import Navbar from "./features/navbar/Navbar";
import Section from "./features/section/Section";
import Sidebar from "./features/sidebar/Sidebar";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CataloguePage from "./pages/catalogues/CataloguePage";
import Home from "./pages/Home/Home";
import FondationPage from "./pages/fondation/FondationPage";
import MethodePage from "./pages/methode/MethodePage";
import Title from "./features/title/Title";
import {isFondationTitle, isMethodeTitle } from "./data/TitleData"
import RdvPage from "./pages/rdv";
import ProductView from "./pages/catalogues/views/ProductView";
import Basket from "./pages/catalogues/basket/Basket";
import Equip from "./pages/equipe/Equip";
import ContactPage from "./pages/contact/ContactPage";
/* import { Counter } from './features/counter/Counter'; */

function App() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle/>
      <Navbar menuData={MenuData} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} menuData={MenuData} />
      {/*<Title {...isFondationTitle}/>
      <Title {...isMethodeTitle}/>*/}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/catalogue-indexiom" component={CataloguePage}/>
          <Route path="/notre-methode" component={MethodePage}/>
          <Route path="/fondation" component={FondationPage}/>
          <Route path="/rdv" component={RdvPage}/>
          <Route exact path="/expert">
            <h4>Become an expert</h4>
          </Route>
          <Route path="/notre-equipe" component={Equip}/>
          <Route exact path={`/catalogue-indexiom/:id`}>
            <ProductView />
            </Route>
          <Route exact path="/panier">
            <Basket/> 
          </Route> 
          <Route path="/nous-contacter" component={ContactPage }/>        
        </Switch>
      {/*<Section {...iZeroSectionData} />
      <Section {...iStudioData} />
      <Section {...iCommandoData} />
      <DiscoverSection left={DiscoverDataLeft} right={DiscoverDataRight} />*/}
      {<Home/> ? '' : (<Footer footerData = {FooterData}/>)}
    </>
  );
}

export default App;
