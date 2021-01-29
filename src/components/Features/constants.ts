import { v4 as uuidv4 } from "uuid";
import liquidityImg from "../../assets/images/features/liquidity.svg";
import technologyImg from "../../assets/images/features/technology.svg";
import infrastructureImg from "../../assets/images/features/infrastructure.svg";

export interface IFeature {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const FEATURES: IFeature[] = [
  {
    id: uuidv4(),
    title: "Liquidity",
    description:
      "Get proper CFD and Physical crypto liquidity at wholesale rates",
    image: liquidityImg,
  },
  {
    id: uuidv4(),
    title: "Technology",
    description: "Start your own turn key Crypto Exchnage",
    image: technologyImg,
  },
  {
    id: uuidv4(),
    title: "Infrastructure",
    description: "Mitigate counterparty when trading",
    image: infrastructureImg,
  },
];
