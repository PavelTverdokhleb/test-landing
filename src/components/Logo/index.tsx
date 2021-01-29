import React, { useCallback } from "react";
import logoDarkImage from "../../assets/images/logo_dark.svg";
import logoWhiteImage from "../../assets/images/logo_white.svg";

export enum LogoType {
  dark = "dark",
  white = "white",
}

interface ILogoProps {
  type: LogoType;
}

export const Logo: React.FC<ILogoProps> = ({ type }) => {
  const getLogoImg = useCallback((): string | undefined => {
    switch (type) {
      case LogoType.dark:
        return logoDarkImage;
      case LogoType.white:
        return logoWhiteImage;
      default:
        return undefined;
    }
  }, [type]);

  return (
    <a href="#" rel="noopener nofollow">
      <img src={getLogoImg()} alt="logo" />
    </a>
  );
};
