import * as React from "react";
import { IClient } from "../../constants/clients";
import "./ClientCard.scss";

interface IClientCardProps extends Omit<IClient, "id"> {}

export const ClientCard: React.FC<IClientCardProps> = ({ name, image }) => {
  return (
    <div className="client-card">
      <img src={image} alt={name} />
    </div>
  );
};
