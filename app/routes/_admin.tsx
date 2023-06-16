import type { V2_MetaFunction } from "@remix-run/node";
import { Fragment, useState } from "react";
import DynamicIcon from "~/components/shared/DynamicIcon";
import logoxl from "public/image/gedocs.png";
import logomd from "public/image/gedocsmd.png";
import { Menu, Transition } from "@headlessui/react";
import { Outlet } from "@remix-run/react";

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
    <div className="flex h-full flex-row">
      <div
        className={`hidden h-full  flex-col border-r bg-white shadow lg:flex   ${
          !isOpen ? `w-64` : `w-16`
        }`}
      >
        <div
          className={`relative flex  h-16 items-center bg-white p-2 ${
            !isOpen ? `justify-start` : `justify-start`
          }`}
        >
          <div>
            <img className="h-8" src={!isOpen ? logoxl : logomd} alt="Gedocs" />
          </div>
          <div
            onClick={() => SetIsOpen(!isOpen)}
            className="absolute -right-4 top-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white  p-2 text-gray-500 shadow-md hover:bg-gray-100  hover:text-gray-700"
          >
            <DynamicIcon
              icn={`${!isOpen ? `IconChevronLeft` : `IconChevronRight`}`}
              cn=""
            />
          </div>
        </div>
        <div className="flex h-full flex-col justify-between p-2">
          <ul className="ml-1 flex select-none flex-col justify-center space-y-2">
            {menu.map((m) => (
              <li
                key={m.label}
                className={`group relative flex cursor-pointer flex-row p-2 ${
                  !isOpen ? `w-full` : `w-10 hover:scale-110`
                }   space-x-2 rounded border border-gray-200 text-gray-500 duration-300 hover:border-gray-300   hover:bg-gray-100 hover:text-gray-600 `}
              >
                <DynamicIcon icn={m.icon} cn="h-5 w-5" />
                {!isOpen && <span className="text-sm">{m.label}</span>}
                {isOpen && (
                  <div className="absolute left-full  top-1 z-50 rounded bg-gray-500 px-2 py-1 text-sm text-white opacity-0 transition duration-200 ease-in-out group-hover:opacity-90">
                    {m.label}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ul className="ml-1 flex select-none flex-col justify-center space-y-2">
            <li
              className={`group relative flex cursor-pointer flex-row p-2 ${
                !isOpen ? `w-full` : `w-10`
              }   space-x-2 rounded border border-gray-200 text-gray-500 hover:border-gray-400 hover:bg-gray-200  hover:text-gray-700 `}
            >
              <DynamicIcon icn="IconAdjustmentsHorizontal" cn="h-5 w-5" />
              {!isOpen && <span className="text-sm">Configurações</span>}
              {isOpen && (
                <div className="absolute left-full  top-1 z-50 rounded bg-gray-500 px-2 py-1 text-sm text-white opacity-0 transition duration-200 ease-in-out group-hover:opacity-90">
                  Configurações
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex h-16 flex-row items-center justify-between border-b bg-white shadow-sm lg:justify-end">
          <div className="flex flex-row items-center justify-start space-x-4 lg:hidden">
            <div className="group relative flex h-14 items-center justify-center">
              <DynamicIcon
                icn="IconMenu2"
                cn="text-gray-600 w-6 h-6 ml-2 cursor-pointer"
              />
              <div className="absolute left-2 top-12 hidden w-56 rounded border border-gray-100 bg-white p-2 shadow-sm group-hover:block">
                <ul className="space-y-2">
                  {menu.map((m) => (
                    <li
                      className="flex  flex-row  space-x-2 rounded p-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 "
                      key={m.label}
                    >
                      <DynamicIcon icn={m.icon} cn="w-5 h-5" />
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img className="h-8" src={logoxl} alt="Gedocs" />
          </div>
          <div className="mr-4 flex flex-row space-x-4 ">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <div className="absolute right-0 top-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
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
        <div className="flex h-full flex-row space-x-5 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
