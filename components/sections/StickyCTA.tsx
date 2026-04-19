import CTA from "../ui/CTA";

export default function StickyCTA({ phone, theme }: any) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden z-[100]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Need Advice?</span>
          <span className="text-sm font-bold text-gray-900">Get Instant Guidance</span>
        </div>
        <div className="flex-shrink-0">
          <CTA 
            type="whatsapp" 
            phone={phone} 
            label="Chat Now" 
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
