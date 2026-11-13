interface BannerProps {
  data: {
    banner_title?: string;
    banner_description?: string;
    banner_image?: string;
    [key: string]: any;
  };
}

export default function Banner({ data }: BannerProps) {
  // API-dən gələn başlığı və ya ehtiyat mətni götürürük
  const title = data?.banner_title || data?.title || "WE ANSWER FASTER YOU EXPECT DON'T WORRY";
  
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-start px-6 md:px-16 bg-[#1a1a1a] text-white overflow-hidden">
      {/* Arxa fondakı şəkil və qaranlıq overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60" 
        style={{ 
          backgroundImage: `url('${data?.banner_image || "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"}')` 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>

      <div className="relative z-10 max-w-5xl pt-20">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase whitespace-pre-line">
          {title}
        </h1>
      </div>
    </section>
  );
}