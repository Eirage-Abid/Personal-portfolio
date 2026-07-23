import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const FeatureCards = () => (
  <div className="w-full padding-x-lg mt-32">
    <TitleHeader title="Why Work With Me" />
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <CardContainer
          key={title}
          className="h-full w-full"
          containerClassName="!py-0 h-full w-full">
          <CardBody className="group/card relative flex h-full min-h-72 w-full flex-col gap-4 overflow-hidden rounded-3xl border border-black/10 bg-white p-8 text-black-50 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]">
            <CardItem translateZ="40" className="size-14 flex items-center justify-center rounded-full bg-black-100/5 p-3">
              <img src={imgPath} alt={title} />
            </CardItem>
            <CardItem translateZ="50" className="mt-2 text-2xl font-semibold text-black-50">
              {title}
            </CardItem>
            <CardItem translateZ="60" as="p" className="text-lg leading-7 text-black-50/80">
              {desc}
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
);

export default FeatureCards;