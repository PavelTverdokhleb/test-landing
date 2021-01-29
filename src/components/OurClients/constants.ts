import { v4 as uuidv4 } from "uuid";
import webMoneyImg from "../../assets/images/clients/webMoney.png";
import lifeCellImg from "../../assets/images/clients/lifecell.png";
import buddyPressImg from "../../assets/images/clients/buddyPress.png";
import gitImg from "../../assets/images/clients/git.png";
import gSkillImg from "../../assets/images/clients/gSkill.png";
import psdImg from "../../assets/images/clients/psd.png";
import duraCloudImg from "../../assets/images/clients/duraCloud.png";

export interface IClient {
  id: string;
  name: string;
  image: string;
}

export const CLIENTS: IClient[] = [
  {
    id: uuidv4(),
    name: "WebMoney",
    image: webMoneyImg,
  },
  {
    id: uuidv4(),
    name: "lifecell",
    image: lifeCellImg,
  },
  {
    id: uuidv4(),
    name: "BuddyPress",
    image: buddyPressImg,
  },
  {
    id: uuidv4(),
    name: "git",
    image: gitImg,
  },
  {
    id: uuidv4(),
    name: "gSkill",
    image: gSkillImg,
  },
  {
    id: uuidv4(),
    name: "psd",
    image: psdImg,
  },
  {
    id: uuidv4(),
    name: "duraCloud",
    image: duraCloudImg,
  },
  {
    id: uuidv4(),
    name: "webMoney",
    image: webMoneyImg,
  },
];
