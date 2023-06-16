import type { V2_MetaFunction } from "@remix-run/node";
import DynamicIcon from "~/components/shared/DynamicIcon";
import { useState } from "react";
import OffSetFilter from "~/components/system/table/system_tables/materials/OffSetFilter";
import OffSetInsert from "~/components/system/table/system_tables/materials/OffSetInsert";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tabedas do Sistema" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const people = [
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
  {
    descricao: "Caixa 20 Kg",
    default_price: "R$ 7,50",
    company: "Franquia Maringá",
    default: "Não",
  },
];

export default function Index() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openInsert, setOpenInsert] = useState(false);
  return (
    <>
      <div className="hidden h-full w-80 flex-col rounded bg-white p-2 shadow lg:flex">
        <ul className="space-y-2 text-sm  text-gray-500">
          <li className="flex flex-row space-x-2 rounded p-2 checked:bg-gray-100 hover:bg-gray-100 hover:text-gray-700">
            <DynamicIcon icn="IconBriefcase" cn="w-5 h-5" />
            <span>Materiais</span>
          </li>
          <li className="flex flex-row space-x-2 rounded p-2 hover:bg-gray-100 hover:text-gray-700">
            <DynamicIcon icn="IconArchive" cn="w-5 h-5" />
            <span> Tipos de Repositório</span>
          </li>
          <li className="flex flex-row space-x-2 rounded p-2 hover:bg-gray-100 hover:text-gray-700">
            <DynamicIcon icn="IconUserCog" cn="w-5 h-5" />
            <span>Operações</span>
          </li>
          <li className="flex flex-row space-x-2 rounded p-2 hover:bg-gray-100 hover:text-gray-700">
            <DynamicIcon icn="IconSettings" cn="w-5 h-5" />
            <span>Serviços</span>
          </li>
        </ul>
      </div>

      <div className="flex h-full w-full flex-col space-y-2 rounded ">
        <div className="rounded  border bg-white  p-2 lg:hidden">
          <ul className="flex flex-row space-x-2 text-sm  text-gray-500">
            <li className="flex flex-row space-x-2 rounded p-2 checked:bg-gray-100 hover:bg-gray-100 hover:text-gray-700">
              <DynamicIcon icn="IconBriefcase" cn="w-5 h-5" />
              <span>Materiais</span>
            </li>
            <li className="flex flex-row space-x-2 rounded p-2 hover:bg-gray-100 hover:text-gray-700">
              <DynamicIcon icn="IconArchive" cn="w-5 h-5" />
              <span> Tipos de Repositório</span>
            </li>
            <li className="flex flex-row space-x-2 rounded p-2 hover:bg-gray-100 hover:text-gray-700">
              <DynamicIcon icn="IconUserCog" cn="w-5 h-5" />
              <span>Operações</span>
            </li>
            <li className="flex flex-row space-x-2 rounded p-2 hover:bg-gray-100 hover:text-gray-700">
              <DynamicIcon icn="IconSettings" cn="w-5 h-5" />
              <span>Serviços</span>
            </li>
          </ul>
        </div>

        <div className="h-full rounded border  bg-white p-2 ">
          <div className="px-1 sm:px-2 lg:px-3">
            <div className="mt-2 flex flex-row items-center justify-between">
              <div className="">
                <button
                  onClick={() => setOpenFilter(!openFilter)}
                  type="button"
                  className="block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Filtrar
                </button>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  onClick={() => setOpenInsert(!openInsert)}
                  type="button"
                  className="block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Inserir Material
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr className="text-left text-xs font-semibold text-gray-900">
                          <th scope="col" className="py-3.5 pl-4 pr-3  sm:pl-6">
                            <input className="rounded" type="checkbox" />
                          </th>

                          <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                            Descrição
                          </th>
                          <th scope="col" className="px-3 py-3.5 ">
                            Preço Padrão
                          </th>
                          <th scope="col" className="px-3 py-3.5 ">
                            Empresa
                          </th>
                          <th scope="col" className="px-3 py-3.5 ">
                            Padrão
                          </th>
                          <th scope="col" className="px-3 py-3.5 ">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white ">
                        {people.map((person) => (
                          <tr
                            className="hover:bg-gray-50 "
                            key={person.descricao}
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs sm:pl-6">
                              <input className="rounded" type="checkbox" />
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-6">
                              {person.descricao}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                              {person.default_price}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                              {person.company}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                              {person.default}
                            </td>
                            <td className="relative flex space-x-2  whitespace-nowrap py-4 pl-3  text-xs font-medium ">
                              <a
                                href="/"
                                className="group relative text-blue-600 hover:text-blue-900"
                              >
                                <DynamicIcon icn="IconPencil" cn=" h-5 w-5" />
                                <span className="absolute bottom-full  hidden rounded bg-blue-300 p-1 text-[10px] text-blue-800 group-hover:block">
                                  Editar
                                </span>
                              </a>
                              <a
                                href="/"
                                className="group relative text-red-600 hover:text-red-900"
                              >
                                <DynamicIcon icn="IconTrash" cn=" h-5 w-5" />
                                <span className="absolute bottom-full hidden rounded bg-red-300 p-1 text-[10px] text-red-800 group-hover:block">
                                  Excluir
                                </span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OffSetFilter open={openFilter} setOpen={setOpenFilter} />

      <OffSetInsert open={openInsert} setOpen={setOpenInsert} />

    </>
  );
}
