import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import DynamicIcon from "~/components/shared/DynamicIcon";
import logo from "public/image/gedocs.png";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div
        className="
          w-50 flex
          max-w-md
          flex-col
          rounded
          bg-white
          px-4
          py-8
          shadow-md
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <img alt="logo" src={logo} className="h-16 self-center" />
          <div className="self-center text-lg font-medium text-gray-600 sm:text-xl">
            Esqueceu a senha?
          </div>
          <div className="mt-4 self-center text-xl text-gray-800 sm:text-sm">
            Insira suas credenciais para recuperar sua senha
          </div>
        </div>

        <div className="mt-6">
          <form action="/">
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="username"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Usuário
              </label>
              <div className="relative">
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  "
                >
                  <DynamicIcon
                    icn="IconUser"
                    cn=" w-5 h-5 fas fa-at text-blue-500"
                  />
                </div>

                <input
                  id="username"
                  type="text"
                  name="usarname"
                  className="
                    w-full
                    rounded
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  "
                  placeholder="1_usuario"
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
              >
                Email
              </label>
              <div className="relative">
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  "
                >
                  <span>
                    <DynamicIcon
                      icn="IconMail"
                      cn=" w-5 h-5 fas fa-at text-blue-500"
                    />
                  </span>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="
                    w-full
                    rounded
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  "
                  placeholder="1_usuario@gedocs.com.br"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded bg-blue-500
                  py-2
                  text-sm
                  text-white
                  transition
                  duration-150
                  ease-in
                  hover:bg-blue-600
                  focus:outline-none
                  sm:text-base
                "
              >
                <span className="mr-2 uppercase font-medium">Recuperar</span>
                <span>
                  <DynamicIcon icn="IconSend" cn="h-5 w-5" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <a
          href="/"
          target="_blank"
          className="
            inline-flex
            items-center
            text-center
            text-xs
            font-medium text-gray-700
          "
        >
          <span className="ml-2">
            Retornar ao
            <Link
              to="/login"
              prefetch="intent"
              className="ml-2 text-xs font-semibold text-blue-500"
            >
              Login
            </Link>
          </span>
        </a>
      </div>
    </div>
  );
}
