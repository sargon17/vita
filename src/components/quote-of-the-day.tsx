import Image from "next/image";

import Quote from "../../public/svg/quote.svg";

// revalidate once a day
export const revalidate = 86400;
export default async function QuoteOfTheDay() {
  const quote = await fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => data);

  return (
    <div className="relative border-b border-black lg:border-white bg-gray-100">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Quote of the day"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 px-2 py-4 lg:px-10 lg:py-24 text-black lg:text-white">
        <div>
          <p className="invert lg:filter-none opacity-20">
            <Quote />
          </p>
          {quote && (
            <div className="pl-8 lg:pl-16">
              <p className="text-title-m lg:text-title-xl text-pretty mb-4">{quote.content}</p>
              <p className="text-body lg:text-subtitle text-pretty italic">[{quote.author}]</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
