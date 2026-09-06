import CardCarousel from "./CardCarousel";
import imgImage20 from "@/imports/Home/569438527af95f2f8544f6ee0c1ddcf8c70f9cb6.png";
import imgImage18 from "@/imports/Home/72b57c7810377d73746722196224894bf1eb4e34.png";
import imgImage19 from "@/imports/Home/f6753cb2da3ccc18c321a1802706c9b00986b384.png";

const CARDS = [
  { image: imgImage20, title: "Robot and programming", description: "gymnastics contains many elements, such as: speed, strength, coordination, and flexibility. It also requires a lot of perseverance and skills." },
  { image: imgImage18, title: "Gymnastics", description: "gymnastics contains many elements, such as: speed, strength, coordination, and flexibility. It also requires a lot of perseverance and skills." },
  { image: imgImage19, title: "Drawing", description: "gymnastics contains many elements, such as: speed, strength, coordination, and flexibility. It also requires a lot of perseverance and skills." },
];

export default function ServicesSection() {
  return (
    <div className="w-[1440px] flex flex-col gap-[64px] items-center justify-center px-[80px] py-[160px]">
      <div className="font-['Aclonica:Regular',sans-serif] flex flex-col gap-[24px] items-center leading-[48px] text-center w-full whitespace-nowrap">
        <p className="text-[#53669a] text-[20px]">What We Offer</p>
        <p className="text-[#ef514c] text-[32px]">We Provide Awesome Program To Build Bright Future</p>
      </div>
      <div className="flex flex-col gap-[32px] items-center">
        <CardCarousel cards={CARDS} />
        <div className="relative shrink-0 group cursor-pointer">
          <div className="flex items-center justify-center py-2">
            <p className="font-['Poppins:Medium',sans-serif] font-medium text-[#3e5082] text-[18px] leading-[24px] group-hover:text-[#ef514c] transition-colors duration-150">All Services</p>
          </div>
          <div className="absolute border-[#3e5082] border-b border-solid inset-0 pointer-events-none group-hover:border-[#ef514c] transition-colors duration-150" />
        </div>
      </div>
    </div>
  );
}
