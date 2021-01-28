import * as React from "react";
import {IFeature} from "../Features/constants";
import './FeatureCard.scss';

interface IFeatureCardProps extends Omit<IFeature, 'id'>{}

export const FeatureCard: React.FC<IFeatureCardProps> = ({image, title, description}) => (
  <div className="feature">
      <div>
          <div className="feature-logo">
              <img src={image} alt={title}/>
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
      </div>
      <button className="feature-button">
          Learn more
      </button>
  </div>
);