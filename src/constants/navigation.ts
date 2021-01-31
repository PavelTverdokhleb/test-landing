import { v4 as uuidv4 } from "uuid";

interface INavigationItem {
  id: string;
  title: string;
  classes?: string;
}

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    id: uuidv4(),
    title: "Home",
    classes: "active",
  },
  {
    id: uuidv4(),
    title: "Services",
  },
  {
    id: uuidv4(),
    title: "Clients",
  },
  {
    id: uuidv4(),
    title: "Why Us",
  },
  {
    id: uuidv4(),
    title: "Partner",
  },
  {
    id: uuidv4(),
    title: "Blog",
  },
];
