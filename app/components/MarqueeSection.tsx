interface MarqueeProps {
  data: {
    text_slider?: {
      xline1?: string;
      xline2?: string;
      xline3?: string;
    };
    [key: string]: any;
  };
}

export default function MarqueeSection({ data }: MarqueeProps) {
  const slider = data?.text_slider || {
    xline1: "we make difference",
    xline2: "we care",
    xline3: "we bring efficiency"
  };

  const items = [slider.xline1, slider.xline2, slider.xline3].filter(Boolean);

  return (
    <div className="py-12 bg-black text-white overflow-hidden whitespace-nowrap">
      <div className="inline-flex space-x-12 animate-marquee uppercase text-2xl sm:text-4xl font-black tracking-wider">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-12">
            <span>{text}</span>
            <span className="text-gray-600">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}