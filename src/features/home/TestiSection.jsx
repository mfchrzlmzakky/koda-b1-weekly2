import Divider from "../../components/Divider";
import TestiCard from "./TestiCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightShop Inc.",
    image: "/images/testi1Image.jpg",
    quote: "Alex delivered our e-commerce platform ahead of schedule. The code quality was outstanding and the UI exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "CTO, Velocity Labs",
    image: "/images/testi2Image.jpg",
    quote: "Working with Alex was a pleasure. They understood our requirements immediately and brought creative solutions to complex problems.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Apex Digital",
    image: "/images/testi3Image.jpg",
    quote: "Alex transformed our outdated website into a modern, responsive platform. Traffic increased 40% within the first month of launch.",
  },
];

function TestiSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-334.5 mx-auto px-6 lg:px-29.25">
        <div className="text-center">
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">Testimonials</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 text-[#101828] md:text-4xl md:leading-10">What Clients Say</h2>
          <p className="pt-4 mx-auto max-w-xs md:max-w-xl font-normal text-base leading-6.5 text-[#6A7282]">Feedback from people I've had the pleasure of working with.</p>
          <Divider />
        </div>
        <div className="pt-14 mx-auto max-w-5xl grid gap-7 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestiCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestiSection;
