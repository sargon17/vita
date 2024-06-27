import Image from "next/image";

export default function TheBlogBanner() {
  return (
    <div className="relative bg-black grid grid-cols-2 lg:grid-cols-6 gap-[1px]">
      <div className="bg-white w-[50vw] lg:w-auto aspect-square lg:max-h-80 flex justify-center items-center">
        <h3 className="text-title-xl text-red-500">Il Blog</h3>
      </div>
      {bloggers.map((blogger) => (
        <div
          className="bg-white w-[50vw] lg:w-auto aspect-square lg:max-h-80 flex justify-center items-center"
          key={blogger.title}
        >
          <div className="w-full text-center flex flex-col items-center justify-center">
            <div className=" w-20 h-20 rounded-full overflow-hidden mb-2">
              <Image
                src={blogger.image}
                alt={blogger.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-title-s ">{blogger.title}</h4>
            <p>{blogger.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const bloggers = [
  {
    title: "Il Becco dell’oca",
    name: "Di Paolo Dell’Oca",
    image: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Disarmato",
    name: "Di Pasquale Pugliese",
    image: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "Battitiperminuto",
    name: "Di Lorenzo Maria Alvaro",
    image: "https://picsum.photos/id/12/200/300",
  },
  {
    title: "La Zanzarella",
    name: "Di Elena Zanella",
    image: "https://picsum.photos/id/13/200/300",
  },
  {
    title: "Impact Q&A",
    name: "Di Laura Orestano",
    image: "https://picsum.photos/id/14/200/300",
  },
];
