interface ContentCardProps { image: string; title: string; description: string; }
export default function ContentCard({ image, title, description }: ContentCardProps) {
  return (
    <div className="bg-[#fefefe] rounded-[10px] overflow-hidden shrink-0 w-[346px] shadow-[0px_0px_4px_0px_rgba(21,21,21,0.15)] hover:shadow-[0px_0px_8px_0px_rgba(21,21,21,0.3)] transition-shadow duration-200 cursor-pointer">
      <div className="h-[274px] w-full overflow-hidden relative">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="px-4 py-8 flex flex-col gap-6">
        <p className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[#ef514c] text-[20px] leading-[28px]">{title}</p>
        <p className="font-['Poppins:Regular',sans-serif] text-[#808080] text-[16px] leading-[24px]">{description}</p>
      </div>
    </div>
  );
}
