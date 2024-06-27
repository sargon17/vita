import { TopicSelector, SingleTopicSelector } from "@/components/topic-selector";
import Tag from "@/components/tag";
import Parser from "rss-parser";
import Arrow from "../../public//svg/arrow.svg";

import QuoteOfTheDay from "@/components/quote-of-the-day";
import TheBlogBanner from "@/components/the-blog-banner";
import SupportBanner from "@/components/support-banner";
import News from "@/components/news";

import Link from "next/link";

export const revalidate = 86400;

type HomeProps = {
  searchParams: {
    topic: string;
  };
};

export default async function Home(props: HomeProps) {
  const TOPIC = topics.find((topic) => topic.label === props.searchParams.topic) || topics[0];

  const parser = new Parser();
  const feed = await parser.parseURL(TOPIC.value);

  const mainNews = feed.items.slice(0, 4);
  const secodnaryNews = feed.items.slice(4, 9);
  const followingNews = feed.items.slice(9, 19);

  return (
    <main className="pt-32 ">
      <div className="border-b border-black px-10 sticky top-32 z-40 bg-white hidden lg:block">
        <TopicSelector>
          {topics.map((topic) => (
            <SingleTopicSelector
              key={topic.label}
              active={topic.label === TOPIC.label}
              value={topic.label}
            >
              {topic.label}
            </SingleTopicSelector>
          ))}
        </TopicSelector>
      </div>
      <div className="lg:flex p-2 py-4 lg:p-10 bg-gray-100 justify-between items-center">
        <h2 className=" pb-4 lg:pb-0 text-title-xl capitalize">{TOPIC.label}</h2>
        <div className=" flex gap-2 lg:gap-4 flex-wrap">
          {topics.map((topic) => (
            <Link
              key={topic.label}
              href={{
                pathname: "/",
                search: `?topic=${topic.label}`,
              }}
            >
              <Tag classes={topic.color}>{topic.label}</Tag>
            </Link>
          ))}
        </div>
      </div>
      <div className="main-grid">
        {mainNews.map((newsItem: any) => (
          <div key={newsItem.title}>
            <NewsBrick
              title={newsItem.title}
              description={newsItem.description}
              link={newsItem.link}
              enclosure={newsItem.enclosure}
              categories={newsItem.categories}
              creator={newsItem.creator}
              pubDate={newsItem.pubDate}
            />
          </div>
        ))}
      </div>
      <SupportBanner />
      <div className="secondary-grid">
        {secodnaryNews.map((newsItem: any) => (
          <div key={newsItem.title}>
            <NewsBrick
              title={newsItem.title}
              description={newsItem.description}
              link={newsItem.link}
              enclosure={newsItem.enclosure}
              categories={newsItem.categories}
              creator={newsItem.creator}
              pubDate={newsItem.pubDate}
            />
          </div>
        ))}
      </div>
      <QuoteOfTheDay />
      <TheBlogBanner />
      <div className="third-grid">
        {followingNews.map((newsItem: any) => (
          <div key={newsItem.title}>
            <NewsBrick
              title={newsItem.title}
              description={newsItem.description}
              link={newsItem.link}
              enclosure={newsItem.enclosure}
              categories={newsItem.categories}
              creator={newsItem.creator}
              pubDate={newsItem.pubDate}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

type NewsBrickProps = {
  title: string;
  description: string;
  link: string;
  enclosure: {
    url: string;
  };
  categories: Array<any>;
  creator: string | undefined;
  pubDate: string;
};

const NewsBrick = (props: NewsBrickProps) => {
  return (
    <News
      key={props.title}
      bg={props.enclosure && props.enclosure.url}
      href={props.link}
    >
      <div className="flex gap-4 items-center justify-start pb-4">
        {props.categories.map((category: any) => (
          <Tag
            size="sm"
            key={category["_"]}
            classes={topics.find((topic) => topic.label === category["_"])?.color}
          >
            {category["_"]}
          </Tag>
        ))}
      </div>
      <News.Title>{props.title}</News.Title>
      {props.creator && typeof props.creator === "string" && (
        <News.Author>
          <span dangerouslySetInnerHTML={{ __html: props.creator }} />
        </News.Author>
      )}
      <News.Date>
        {new Date(props.pubDate).toLocaleDateString("it-IT", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </News.Date>
      <News.Arrow>
        <Arrow />
      </News.Arrow>
    </News>
  );
};

const topics = [
  {
    label: "Tutti i temi",
    value: "https://www.ilsole24ore.com/rss/italia.xml",
    color: "bg-gray-100",
  },
  {
    label: "Ambiente",
    value: "https://www.ilsole24ore.com/rss/sostenibilita--energia-e-ambiente.xml",
    color: "bg-green-100",
  },
  {
    label: "Economia",
    value: "https://www.ilsole24ore.com/rss/economia.xml",
    color: "bg-blue-100",
  },
  {
    label: "Mondo",
    value: "https://www.ilsole24ore.com/rss/mondo.xml",
    color: "bg-red-100",
  },
  {
    label: "Salute",
    value: "https://www.ilsole24ore.com/rss/salute.xml",
    color: "bg-yellow-100",
  },
  {
    label: "Politica",
    value: "https://www.ilsole24ore.com/rss/italia--politica.xml",
    color: "bg-yellow-100",
  },
  { label: "Scuola", value: "https://www.ilsole24ore.com/rss/scuola.xml", color: "bg-orange-100" },
];
