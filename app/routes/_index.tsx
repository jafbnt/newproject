import type { V2_MetaFunction } from "@remix-run/node";
import { Fragment, useState } from "react";
import DynamicIcon from "~/components/shared/DynamicIcon";
import logoxl from "public/image/gedocs.png";
import logomd from "public/image/gedocsmd.png";
import { Menu, Transition } from "@headlessui/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Painel" },
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

function classNames(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="h-full flex flex-row">
      <div
        className={`h-full flex flex-col bg-white border-r shadow ${
          !isOpen ? `w-64` : `w-16`
        }`}
      >
        <div
          className={`relative flex  p-2 items-center h-16 bg-white ${
            !isOpen ? `justify-start` : `justify-start`
          }`}
        >
          <div>
            <img className="h-8" src={!isOpen ? logoxl : logomd} alt="Gedocs" />
          </div>
          <div
            onClick={() => SetIsOpen(!isOpen)}
            className="absolute -right-4 top-4 flex justify-center items-center bg-white border-gray-100 rounded-full p-2 w-7 h-7 border  shadow-md cursor-pointer text-gray-500 hover:text-gray-700  hover:bg-gray-100"
          >
            <DynamicIcon
              icn={`${!isOpen ? `IconChevronLeft` : `IconChevronRight`}`}
              cn=""
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-between p-2">
          <ul className="flex flex-col justify-center space-y-2 ml-1 select-none">
            {menu.map((m) => (
              <li
                key={m.label}
                className={`flex flex-row p-2 cursor-pointer group relative ${
                  !isOpen ? `w-full` : `w-10`
                }   rounded text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-200  space-x-2 `}
              >
                <DynamicIcon icn={m.icon} cn="h-5 w-5" />
                {!isOpen && <span className="text-sm">{m.label}</span>}
                {isOpen && (
                  <div className="absolute z-50  left-full top-1 py-1 px-2 bg-gray-500 text-white rounded opacity-0 text-sm group-hover:opacity-90 transition ease-in-out duration-200">
                    {m.label}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col justify-center space-y-2 ml-1 select-none">
            <li
              className={`flex flex-row p-2 cursor-pointer group relative ${
                !isOpen ? `w-full` : `w-10`
              }   rounded text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-200  space-x-2 `}
            >
              <DynamicIcon icn="IconAdjustmentsHorizontal" cn="h-5 w-5" />
              {!isOpen && <span className="text-sm">Configurações</span>}
              {isOpen && (
                <div className="absolute z-50  left-full top-1 py-1 px-2 bg-gray-500 text-white rounded opacity-0 text-sm group-hover:opacity-90 transition ease-in-out duration-200">
                  Configurações
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full w-full flex flex-col w">
        <div className="h-16 flex flex-row justify-between items-center bg-white border-b shadow-sm">
          <div></div>
          <div className="flex flex-row mr-4 space-x-4">
            <button
              type="button"
              className="rounded-full relative bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              
              <div className="absolute right-0 top-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </div>

              <span className="sr-only">View notifications</span>
              <DynamicIcon icn="IconBell" cn="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Perfil
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Configurações
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sair
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="h-full flex flex-row p-4 space-x-5">
          <div className="h-full bg-white w-80 rounded p-2 shadow">left</div>
          <div className="h-full bg-white w-full rounded p-2 shadow">right</div>
        </div>
      </div>
    </div>
  );
}
