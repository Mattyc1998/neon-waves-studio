import { Link } from "react-router-dom";

const BookCTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between items-center z-0">
        <div className="w-64 h-64 border-8 border-[#003300] rounded-full translate-x-[-20%] translate-y-[20%]"></div>
        <div className="w-48 h-48 border-8 border-[#003300] transform rotate-45 translate-x-[20%] -translate-y-[20%]"></div>
        <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[150px] border-b-[#003300] absolute left-1/4 top-[-20%]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl text-black mb-4 font-display">Ready for your next great hair day?</h2>
        <p className="text-[#111] font-body mb-8 max-w-lg mx-auto font-medium">
          Give us a call or book online — we would love to welcome you to The Hair Studio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          
            href="tel:01825763042"
            className="bg-black text-[#39FF14] px-7 py-3 rounded-md font-semibold hover:opacity-90 transition font-body"
          >
            Call 01825 763042
          </a>
          <Link
            to="/contact"
            className="bg-black text-[#39FF14] px-7 py-3 rounded-md font-semibold hover:opacity-90 transition font-body"
          >
            Book Online
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;