import React, { FC } from "react";

interface CorrectIconProps {
  className: string;
}
const CorrectIcon: FC<CorrectIconProps> = ({ className }) => {
  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 335.765 335.765"
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <g>
          <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 		" />
        </g>
      </g>
    </svg>
  );
};

export default CorrectIcon;
