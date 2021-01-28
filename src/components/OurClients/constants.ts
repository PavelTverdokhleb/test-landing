import webMoneyImg from '../../assets/images/clients/webMoney.png';
import lifeCellImg from '../../assets/images/clients/lifecell.png';
import buddyPressImg from '../../assets/images/clients/buddyPress.png';
import gitImg from '../../assets/images/clients/git.png';
import gSkillImg from '../../assets/images/clients/gSkill.png';
import psdImg from '../../assets/images/clients/psd.png';
import duraCloudImg from '../../assets/images/clients/duraCloud.png';

export interface IClient {
    id: string;
    name: string;
    image: string;
}

export const CLIENTS: IClient[] = [
    {
        id: '1',
        name: 'WebMoney',
        image: webMoneyImg
    },
    {
        id: '2',
        name: 'lifecell',
        image: lifeCellImg
    },
    {
        id: '3',
        name: 'BuddyPress',
        image: buddyPressImg
    },
    {
        id: '4',
        name: 'git',
        image: gitImg
    },
    {
        id: '5',
        name: 'gSkill',
        image: gSkillImg
    },
    {
        id: '6',
        name: 'psd',
        image: psdImg
    },
    {
        id: '7',
        name: 'duraCloud',
        image: duraCloudImg
    },
    {
        id: '8',
        name: 'webMoney',
        image: webMoneyImg
    },
]