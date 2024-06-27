"use client";
import User from "../../public/svg/user.svg";
import Search from "../../public/svg/search.svg";

import BurgerButton from "./burger-button";

import { useState } from "react";

import { motion, AnimatePresence, cubicBezier } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <TopBanner />
        <div className="border-b border-black h-16 flex items-center justify-between">
          <div
            className="w-16 h-16 flex items-center justify-center border-r border-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BurgerButton />
          </div>
          <div className="w-16 h-16 flex items-center justify-center border-l border-black">
            <div className="cursor-pointer">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Menu>
            <MenuTileBig
              title="Articoli"
              subtitle="Trend, dati e novità del Terzo Settore."
            />
            <MenuTileBig
              title="Storie"
              subtitle="Letture ed approfondimenti dei fenomeni complessi."
            />
            <MenuTileBig
              title="Interviste"
              subtitle="Racconti reali di persone ed organizzazioni"
            />
            <MenuTileBig
              title="Opinioni"
              subtitle="Riflessioni e confronti dei nostri opinionisti."
            />
            <MenuTileBig
              title="Podcast"
              subtitle="Un luogo per dare voce ai protagonisti della sostenibilità."
            />
            <MenuTileBig
              title="Bookazine"
              subtitle="Una rivista da leggere e un libro da conservare."
            />
            <MenuTileLittle title="Chi siamo" />
            <MenuTileLittle title="Comitato editoriale" />
            <MenuTileLittle title="Servizi" />
            <MenuTileLittle title="Agenda / Eventi" />
            <MenuTileLittle title="Mappa dell’attivismo" />
            <MenuTileLittle title="Inchieste crowdfunding" />
          </Menu>
        )}
      </AnimatePresence>
    </>
  );
}

type MenuProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Menu = (props: MenuProps) => {
  return (
    <>
      <motion.div
        className="fixed w-full h-full pt-32 top-0 left-0 bg-black z-[44] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }}
      ></motion.div>
      <motion.div
        className="fixed w-full h-full pt-32 top-0 left-0 bg-white z-[45]"
        initial={{ y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }}
      >
        <div className="grid grid-cols-12 grid-rows-12 bg-black gap-[1px] h-full">{props.children}</div>
      </motion.div>
    </>
  );
};

type MenuTileProps = {
  title: string;
  subtitle?: string;
};
const MenuTileBig = (props: MenuTileProps) => {
  return (
    <div className="menu-tile bg-white h-full w-full col-span-6 row-span-3 lg:col-span-4 lg:row-span-5  hover:bg-red-500 transition-colors duration-300 cursor-pointer p-2 lg:p-8 flex justify-start items-end group">
      <div className="content">
        <h2 className=" text-title-m lg:text-title-xxl lg:pb-4 lg:scale-75 lg:group-hover:scale-100 group-hover:text-white origin-bottom-left transition-all duration-300">
          {props.title}
        </h2>
        <p className=" text-note lg:text-body group-hover:text-white origin-bottom-left transition-all duration-300">
          {props.subtitle && props.subtitle}
        </p>
      </div>
    </div>
  );
};

const MenuTileLittle = (props: MenuTileProps) => {
  return (
    <div className="menu-tile bg-white h-full w-full col-span-6 row-span-1 lg:col-span-2 lg:row-span-2  hover:bg-red-500 hover:text-white transition-colors duration-300 cursor-pointer flex justify-center items-center overflow-hidden">
      <h3 className="text-note lg:text-body text-center">{props.title}</h3>
    </div>
  );
};

const TopBanner = () => {
  return (
    <div>
      <div className="flex items-center justify-center lg:justify-between px-10 border-b border-black h-16">
        <div className="flex items-center">
          <a
            href="#"
            className=" group leading-tight border-r border-black lg:border-none flex justify-center items-center pr-4 h-16 "
          >
            <span className=" underline-animate group-hover:underline-animate-active">Contribuisci</span>
          </a>
          <a
            href="#"
            className=" group leading-tight flex justify-center items-center pl-4 h-16 "
          >
            <span className=" underline-animate group-hover:underline-animate-active">Abbonati</span>
          </a>
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="flex items-center gap-2 leading-tight group"
          >
            <User />
            <span className="underline-animate group-hover:underline-animate-active">Accedi</span>
          </a>
        </div>
      </div>
    </div>
  );
};
