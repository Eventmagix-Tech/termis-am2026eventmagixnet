import photo0 from "@/assets/rising-stars/elizabeth-blaber.jpg.asset.json";
import photo1 from "@/assets/rising-stars/maria-coronel.jpg.asset.json";
import photo2 from "@/assets/rising-stars/tomas-gonzalez-fernandez.jpg.asset.json";
import photo3 from "@/assets/rising-stars/nisha-iyer.jpg.asset.json";
import photo4 from "@/assets/rising-stars/irene-de-lazaro.jpg.asset.json";
import photo5 from "@/assets/rising-stars/christopher-madl.jpg.asset.json";
import photo6 from "@/assets/rising-stars/aaron-morris.jpg.asset.json";
import photo7 from "@/assets/rising-stars/ana-maria-porras.jpg.asset.json";
import photo8 from "@/assets/rising-stars/muhammad-rizwan.jpg.asset.json";
import photo9 from "@/assets/rising-stars/brittany-taylor.jpg.asset.json";
import content from "./risingStarsContent.json";

export const risingStarsIntro = content.intro;
const photos: Record<string, string> = {
  "elizabeth-blaber": photo0.url,
  "maria-coronel": photo1.url,
  "tomas-gonzalez-fernandez": photo2.url,
  "nisha-iyer": photo3.url,
  "irene-de-lazaro": photo4.url,
  "christopher-madl": photo5.url,
  "aaron-morris": photo6.url,
  "ana-maria-porras": photo7.url,
  "muhammad-rizwan": photo8.url,
  "brittany-taylor": photo9.url
};
export const risingStars = content.people.map(person => ({ ...person, image: photos[person.imageKey] }));
export type RisingStar = (typeof risingStars)[number];
