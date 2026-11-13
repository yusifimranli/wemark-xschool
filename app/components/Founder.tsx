interface FounderProps {
  data: {
    founder_title?: string;
    founder_subtitle?: string;
    founder_description?: string;
    founder_image?: string;
    founder_name?: string;
    founder_position?: string;
    [key: string]: any;
  };
}

export default function Founder({ data }: FounderProps) {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#EAEAEA] text-black border-t border-gray-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-16">
          {data?.founder_title || "FOUNDER"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sol tərəf: Şəkil və üzərindəki ad/vəzifə etiketi */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-300 h-[450px] shadow-sm">
            <img 
              src={data?.founder_image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"} 
              alt="Founder" 
              className="w-full h-full object-cover grayscale" 
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm">
              <p className="text-sm font-bold text-black">
                {data?.founder_name || "Vugar Mehdiyev"}
              </p>
              <p className="text-xs text-gray-600">
                {data?.founder_position || "CEO & Founder"}
              </p>
            </div>
          </div>

          {/* Sağ tərəf: Başlıq və Mətn */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              {data?.founder_subtitle || "MESSAGE OF THE FOUNDER"}
            </h3>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed whitespace-pre-line">
              {data?.founder_description || "Lorem ipsum dolor sit amet consectetur. Nascetur dui sit suspendisse lectus vulputate maecenas massa ultricies urna. Porttitor sit placerat hac sit consequat ipsum."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}