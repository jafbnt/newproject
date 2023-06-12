import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import DynamicIcon from "~/components/shared/DynamicIcon";
import logoxl from "public/image/gedocs.png";
import logomd from "public/image/gedocsmd.png";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const menu = [
  { href: "/account-settings", label: "Pesquisas", icon: "IconSearch" },
  { href: "/account-settings", label: "Sistema", icon: "IconBrandWindows" },
  {
    href: "/support",
    label: "Administração",
    icon: "IconDeviceIpadHorizontalCog",
  },
  { href: "/sign-out", label: "Requisições", icon: "IconFileOrientation" },
  { href: "/support", label: "Produção", icon: "IconTopologyStar3" },
  { href: "/license", label: "Atendimento", icon: "IconPhoneIncoming" },
  { href: "/sign-out", label: "Relatórios", icon: "IconDeviceAnalytics" },
];

export default function Index() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="h-full flex flex-row">
      <div
        className={`h-full flex flex-col bg-white border-r duration-300 shadow ${
          !isOpen ? `w-64` : `w-16`
        }`}
      >
        <div
          className={`relative flex  p-2 items-center h-16 bg-white ${
            !isOpen ? `justify-start` : `justify-start`
          } transition duration-300`}
        >
          <div>
            <img className="h-8" src={!isOpen ? logoxl : logomd} alt="Gedocs" />
          </div>
          <div
            onClick={() => SetIsOpen(!isOpen)}
            className="absolute -right-4 top-4 flex justify-center items-center bg-white border-gray-100 rounded-full p-2 w-7 h-7 border  shadow-md cursor-pointer text-gray-500 hover:text-gray-700  hover:bg-gray-100 transition ease-out duration-300"
          >
            <DynamicIcon
              icn={`${!isOpen ? `IconChevronLeft` : `IconChevronRight`}`}
              cn=""
            />
          </div>
        </div>
        <div className="h-full p-2">
          <ul className="flex flex-col justify-center space-y-2 ml-1 select-none">
            {menu.map((m) => (
              <li
                className={`flex flex-row p-2 cursor-pointer ${
                  !isOpen ? `w-full` : `w-10`
                }   rounded text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-200 transition duration-300 space-x-2 `}
              >
                <DynamicIcon icn={m.icon} cn="h-5 w-5" />
                {!isOpen && <span className="text-sm">{m.label}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-full w-full flex flex-col w">
        <div className="h-16 bg-white border-b shadow-sm"></div>
        <div className="h-full flex flex-row p-4 space-x-5">
          <div className="h-full bg-white w-80 rounded p-2 shadow">left</div>
          <div className="h-full bg-white w-full rounded p-2 shadow">right</div>
        </div>
      </div>
    </div>
  );
}
