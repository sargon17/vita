import React from "react";

import Image from "next/image";

type NewsProps = {
  children: React.ReactNode | React.ReactNode[];
  bg: string | null;
  href: string;
};
function News(props: NewsProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full h-full lg:min-h-96 px-2 py-4 lg:px-10 lg:py-11 bg-black/opacity-20 flex-col justify-end items-start gap-6 inline-flex group overflow-hidden bg-white"
    >
      <span className="absolute inset-0 z-10 after:absolute after:inset-0 after:bg-black after:opacity-20 bg-red-500 group-hover:after:opacity-50 after:transition-opacity after:duration-300 hidden lg:block">
        {props.bg && (
          <Image
            src={props.bg}
            alt={props.children as string}
            quality={100}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-md transition-all duration-300"
          />
        )}
      </span>
      <span className="relative z-10">{props.children}</span>
    </a>
  );
}

type TitleProps = {
  children: string;
};

const title = (props: TitleProps) => {
  return (
    <span className=" block text-black lg:text-white font-bold text-balance pb-4 text-title-m lg:text-title-xl lg:scale-75 origin-bottom-left lg:group-hover:scale-100 transition-all duration-300">
      {props.children}
    </span>
  );
};

type AuthorProps = {
  children: React.ReactNode | React.ReactNode[];
};

const author = (props: AuthorProps) => {
  return <span className="block text-black lg:text-white text-body pb-2">{props.children}</span>;
};

type DateProps = {
  children: React.ReactNode | React.ReactNode[];
};

const date = (props: DateProps) => {
  return <span className="block text-black lg:text-white text-note pb-2">{props.children}</span>;
};

type ArrowProps = {
  children: React.ReactNode | React.ReactNode[];
};
const arrow = (props: ArrowProps) => {
  return (
    <span className=" *:fill-black  lg:*:fill-white text-body pb-2 group-hover:translate-x-1 motion-reduce:translate-x-0 transition-transform hidden lg:">
      {props.children}
    </span>
  );
};

News.Title = title;
News.Author = author;
News.Date = date;
News.Arrow = arrow;

export default News;
