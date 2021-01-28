import * as React from "react";
import {IClient} from "../constants";
import './ClientCard.scss';

interface IClientCardProps extends Pick<IClient, 'name' | 'image'> {
}

export const ClientCard: React.FC<IClientCardProps> = ({name, image}) => {
  return (
    <div className="our-clients-card">
        <img src={image} alt={name} />
    </div>
  );
};