import React from "react";
import {
  InfoSection,
  ColumnLeft,
  Container,
  ColumnRight,
  BtnWrap,
  ContentWrapper
} from "./SectionElements";

import Button from "../button/Button";

const Section = ({
  heading,
  subheading,
  description,
  buttonLabel,
  path,
  background
}) => {
  return (
    <InfoSection>
      <Container img={background}>
        <ContentWrapper>
          <ColumnLeft>
            <h1>{heading}</h1>
            <h1>{subheading}</h1>
            <p>{description}</p>
            <BtnWrap>
              <Button to={path} primary="false">{buttonLabel}</Button>
            </BtnWrap>
          </ColumnLeft>
        </ContentWrapper>
      </Container>
    </InfoSection>
  );
};

export default Section;
