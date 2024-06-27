import Arrow from "../../public/svg/arrow.svg";
export default function SupportBanner() {
  return (
    <div className="w-full px-2 py-12 lg:px-10 lg:py-[84px] bg-orange-100 justify-start items-center gap-4 lg:flex">
      <div className="grow shrink basis-0 text-black mb-2 text-title-m lg:text-title-xl font-bold font-anybody">
        Il tuo supporto è fondamentale
      </div>
      <div className="justify-start items-center gap-1 flex">
        <a
          href="#"
          className="text-right text-black text-sm font-bold font-anybody flex gap-2 items-center group"
        >
          <span className=" leading-tight underline-animate group-hover:underline-animate-active">
            Dai il tuo contributo
          </span>
          <div className="group-hover:translate-x-1 motion-reduce:translate-x-0 transition-transform *:fill-black">
            <Arrow />
          </div>
        </a>
      </div>
    </div>
  );
}
