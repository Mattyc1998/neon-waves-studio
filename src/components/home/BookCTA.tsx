import { Link } from "react-router-dom";

const BookCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl text-primary-foreground mb-4">Ready for your next great hair day?</h2>
        <p className="text-primary-foreground/80 font-body mb-8 max-w-lg mx-auto">
          Give us a call or book online — we'd love to welcome you to The Hair Studio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:01825763042"
            className="bg-background text-foreground px-7 py-3 rounded-md font-semibold hover:opacity-90 transition font-body"
          >
            Call 01825 763042
          </a>
          <Link
            to="/contact"
            className="border-2 border-background text-background px-7 py-3 rounded-md font-semibold hover:bg-background hover:text-foreground transition font-body"
          >
            Book Online
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;
