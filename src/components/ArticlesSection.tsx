import CardCarousel from "./CardCarousel";
import imgImage21 from "@/imports/Home/46e0ad5d2292588534735da85f39f1fb7a1ccd61.png";
import imgImage23 from "@/imports/Home/f85ff10a38f501a32384c05b3ad21addca94bb76.png";
import imgImage22 from "@/imports/Home/ebd6d59171a68894f8c53edbc36f4e6468db61e2.png";

const CARDS = [
  { image: imgImage21, title: "Be Careful", description: "gymnastics contains many elements, such as: speed, strength, coordination, and flexibility. It also requires a lot of perseverance and skills." },
  { image: imgImage23, title: "Nursery Interview", description: "gymnastics contains many elements, such as: speed, strength, coordination, and flexibility. It also requires a lot of perseverance and skills." },
  { image: imgImage22, title: "Your Child Daily Routine", description: "gymnastics contains many elements, such as: speed, strength, coordination, and flexibility. It also requires a lot of perseverance and skills." },
];

export default function ArticlesSection() {
  return (
    <div className="w-[1440px] flex flex-col gap-[64px] items-center justify-center px-[80px] py-[160px]">
      <div className="font-['Aclonica:Regular',sans-serif] flex flex-col gap-[24px] items-center leading-[48px] text-center w-full whitespace-nowrap">
        <p className="text-[#53669a] text-[20px]">Our Articles</p>
        <p className="text-[#ef514c] text-[32px]">{`Get Every Single Updates Latest News & Articles`}</p>
      </div>
      <div className="flex flex-col gap-[32px] items-center">
        <CardCarousel cards={CARDS} />
        <div className="relative shrink-0 group cursor-pointer">
          <div className="flex items-center justify-center py-2">
            <p className="font-['Poppins:Medium',sans-serif] font-medium text-[#3e5082] text-[18px] leading-[24px] group-hover:text-[#ef514c] transition-colors duration-150">All Articles</p>
          </div>
          <div className="absolute border-[#3e5082] border-b border-solid inset-0 pointer-events-none group-hover:border-[#ef514c] transition-colors duration-150" />
        </div>
      </div>
    </div>
  );
}
