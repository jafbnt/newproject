import React from "react";
import * as Icons from "@tabler/icons-react";

interface DynamicIconProps {
  icn: keyof typeof Icons | string | undefined;
  cn: string;
  wdh?: number;
  hgt?: number
}

const DynamicIcon: React.FC<DynamicIconProps> = (props) => {
  const { icn, cn, wdh, hgt } = props;
  const IconComponent = Icons[icn as keyof typeof Icons] as
    | React.FC<any>
    | undefined;

  if (!IconComponent) {
    return null;
  }

  return (
    <>
      {React.createElement(IconComponent, {
        className: `${cn}`,
        width: wdh,
        height: hgt,
      })}
    </>
  );
};

export default DynamicIcon;