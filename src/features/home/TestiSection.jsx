import Divider from "../../components/Divider";

function TestiSection() {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-6xl px-6">
        <div>
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] text-center uppercase text-[#FF5F22]">Testimonials</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 tracking-normal text-center text-[#101828]">What Clients Say</h2>
          <p className="pt-4 md:px-15 md:max-w-xl font-normal text-base leading-6.5 tracking-normal place-self-center text-center text-[#6A7282]">Feedback from people I've had the pleasure of working with.</p>
          <Divider />
        </div>
        <div className="pt-14">
          <div className="grid gap-7">
            <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] p-7 bg-[#F9FAFB]">
              <p className="font-normal italic text-sm leading-[22.75px] tracking-normal text-[#4A5565]">““Alex delivered our e-commerce platform ahead of schedule. The code quality was outstanding and the UI exceeded our expectations.””</p>
              <div className="pt-6 flex gap-4 items-center">
                <img src="/images/testi1Image.jpg" alt="Testimonial 3" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-sm leading-5 tracking-normal text-[#101828]">Sarah Johnson</p>
                  <p className="font-normal text-xs leading-4 tracking-normal text-[#6A7282]">CEO, BrightShop Inc.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] p-7 bg-[#F9FAFB]">
              <p className="font-normal italic text-sm leading-[22.75px] tracking-normal text-[#4A5565]">““Working with Alex was a pleasure. They understood our requirements immediately and brought creative solutions to complex problems.””</p>
              <div className="pt-6 flex gap-4 items-center">
                <img src="/images/testi2Image.jpg" alt="Testimonial 3" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-sm leading-5 tracking-normal text-[#101828]">Michael Chen</p>
                  <p className="font-normal text-xs leading-4 tracking-normal text-[#6A7282]">CTO, Velocity Labs</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] p-7 bg-[#F9FAFB]">
              <p className="font-normal italic text-sm leading-[22.75px] tracking-normal text-[#4A5565]">“Alex transformed our outdated website into a modern, responsive platform. Traffic increased 40% within the first month of launch.”</p>
              <div className="pt-6 flex gap-4 items-center">
                <img src="/images/testi3Image.jpg" alt="Testimonial 3" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-sm leading-5 tracking-normal text-[#101828]">Emily Rodriguez</p>
                  <p className="font-normal text-xs leading-4 tracking-normal text-[#6A7282]">Marketing Director, Apex Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestiSection;
