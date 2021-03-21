import React from "react";
import {
  ColumnLeft,
  ColumnRight,
  Discover,
  Container,
  DiscoverWrapper,
  RightList,
  RightListItem,
} from "./DiscoverSectionElements";
import ReactHtmlParser from "react-html-parser";

const DiscoverSection = ({ left, right }) => {
  return (
    <Discover>
      <DiscoverWrapper>
        <Container>
          <ColumnLeft>
            <h1>{ReactHtmlParser(left.heading)}</h1>
          </ColumnLeft>

          <ColumnRight>
            <h2>{ReactHtmlParser(right.heading)}</h2>
            <RightList>
              {right.items.map((item, index) => (
                <RightListItem key={index}><span></span>
                  {ReactHtmlParser(item.label)}
                </RightListItem>
              ))}
            </RightList>
          </ColumnRight>
        </Container>
      </DiscoverWrapper>
    </Discover>
  );
};

export default DiscoverSection;
