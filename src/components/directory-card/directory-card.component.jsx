//libs
import React from "react";

//styles
import { TiltCard, TiltCardImage, DirectoryCardDiv } from "./directory-card.styles";

const DirectoryCard = ({ url }) => (
  <DirectoryCardDiv>
    <TiltCard
      options={{
        max: 15,
        perspective: 4000
      }}
    >
      <TiltCardImage src={`${url}`} />
    </TiltCard>
  </DirectoryCardDiv>
);

export default DirectoryCard;
