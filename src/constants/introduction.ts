import { v4 as uuidv4 } from "uuid";

interface IFeatureLabel {
  id: string;
  value: string;
}

export const INTRODUCTION_FEATURES: IFeatureLabel[] = [
  {
    id: uuidv4(),
    value: "Liquidity",
  },
  {
    id: uuidv4(),
    value: "Technology",
  },
  {
    id: uuidv4(),
    value: "Infrastructure",
  },
];
