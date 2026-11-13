interface ProgramProps {
  data: {
    programs?: {
      title?: string;
      description?: string;
    }[];
    [key: string]: any;
  };
}

export default function Program({ data }: ProgramProps) {
  // API-dən gələn programs massivinin ilk elementini götürürük
  const programData = data?.programs && data.programs.length > 0 ? data.programs[0] : null;

  return (
    <section id="program" className="py-24 px-6 md:px-16 bg-[#EAEAEA] text-black border-t border-gray-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Başlıq */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-8">
          {programData?.title || "OUR PROGRAMS"}
        </h2>

        {/* API-dən gələn HTML tərkibli zəngin mətn (description) */}
        {programData?.description ? (
          <div 
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>strong]:font-bold [&>strong]:text-black"
            dangerouslySetInnerHTML={{ __html: programData.description }}
          />
        ) : (
          <p className="text-gray-600">Loading program details...</p>
        )}
      </div>
    </section>
  );
}