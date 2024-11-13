import NotFound from "@/app/not-found";
import Image from "next/image";
import socialTitle from "@/public/gallery/socials/socialTitle.svg";
import bg1 from "@/public/gallery/socials/bg1.svg";
import bg2 from "@/public/gallery/socials/bg2.svg";
import GalleryImages from "@/components/gallery/GalleryImages";
import { PICTURES } from "@/data/gallery/Pictures";

export async function generateStaticParams() {
  const allPages = ["socials", "cultural-events", "tabling", "fundraisers"];
  return allPages.map((page) => ({ type: page }));
}

const Page = async ({ params }: { params: { type: string } }) => {
  const { type } = await Promise.resolve(params);

  const PAGES: Record<string, string> = {
    socials: "Socials",
    "cultural-events": "Cultural Events",
    tabling: "Tabling",
    fundraisers: "Fundraisers",
  };

  console.log("Page Type:", type);
  console.log("Page Title:", PAGES[type]);
  console.log("Images:", PICTURES[type]);

  if (!PAGES[type] || !PICTURES[type]) {
    return <NotFound />;
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <Image
        src={bg1}
        alt="Background Top Right"
        className="absolute right-0 top-0 w-1/4 opacity-75 md:w-1/5"
        width={300}
        height={300}
      />
      <Image
        src={bg2}
        alt="Background Bottom Left"
        className="absolute bottom-0 left-0 w-1/4 opacity-75 md:w-1/5"
        width={300}
        height={300}
      />

      <Image
        className="my-4 w-2/3 max-w-xs md:max-w-sm lg:max-w-md"
        src={socialTitle}
        alt="Social Title"
        width={200}
        height={100}
      />

      <GalleryImages images={PICTURES[type]} pageTitle={PAGES[type]} />
    </div>
  );
};

export default Page;
