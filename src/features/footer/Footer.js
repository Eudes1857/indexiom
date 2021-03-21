import React from "react";
import {
  InfoSection,
  ColumnLeft,
  Container,
  ColumnRight,
  Logo,
  LogoLink,
  IconWrap,
  IconSvg,
  IconLink,
  Texth,
  RowTop,
  RowBottom
} from "./FooterElement";
import ReactHtmlParser from "react-html-parser"

const Footer = ({footerData}) => {
  return (
    <>
      <InfoSection>
        <Container>
          <RowTop>
          <ColumnLeft>
            <LogoLink>
              <Logo src={footerData.logo} />
            </LogoLink>
          </ColumnLeft>
          <ColumnRight>
            <Texth>{footerData.label}</Texth>
            <IconWrap>
              {footerData.socialsIcon.map((i, index) => (
                <IconLink to={i.path} key={index}>
                  <IconSvg src={i.icon_}/>
                </IconLink>
              ))}
            </IconWrap>
          </ColumnRight>
          </RowTop>
          <RowBottom>
              {ReactHtmlParser(footerData.copyright)}
          </RowBottom>
        </Container>
      </InfoSection>
    </>
  );
};

export default Footer;
