import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `
  ${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} Games
  `;

  return (
    <Heading as='h1' marginY={4} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};
export default GameHeading;
