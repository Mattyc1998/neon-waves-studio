const GeometricDecoration = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Triangles */}
      <div className="absolute top-10 left-[10%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-secondary/10 rotate-12" />
      <div className="absolute top-[40%] right-[8%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-accent/10 -rotate-45" />
      <div className="absolute bottom-20 left-[25%] w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[31px] border-b-primary/10 rotate-[30deg]" />

      {/* Circles */}
      <div className="absolute top-[20%] right-[20%] w-16 h-16 rounded-full border-2 border-primary/10" />
      <div className="absolute bottom-[30%] left-[5%] w-10 h-10 rounded-full border-2 border-secondary/10" />
      <div className="absolute top-[60%] right-[40%] w-6 h-6 rounded-full bg-accent/8" />

      {/* Dots */}
      <div className="absolute top-[15%] left-[60%] w-3 h-3 rounded-full bg-primary/15" />
      <div className="absolute top-[70%] left-[80%] w-2 h-2 rounded-full bg-secondary/15" />
      <div className="absolute bottom-[15%] right-[15%] w-4 h-4 rounded-full bg-accent/10" />
      <div className="absolute top-[50%] left-[40%] w-2 h-2 rounded-full bg-primary/10" />
    </div>
  );
};

export default GeometricDecoration;
