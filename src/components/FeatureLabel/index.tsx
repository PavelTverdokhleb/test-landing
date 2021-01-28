import * as React from "react";
import './FeatureLabel.scss';

interface IFeatureLabelProps {
    value: string;
}

export const FeatureLabel: React.FC<IFeatureLabelProps> = ({ value }) => (
    <span className="feature-label">{value}</span>
);