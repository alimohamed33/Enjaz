import { contact } from "../../utils/data";

function Contact() {
  return (
    <section id="contact" className="bg-[#9FF2BB14] contact">
      <div className="section-container" style={{position:"relative"}}>
        <div className="flex items-center justify-center gap-x-24 lg:flex-row flex-col gap-y-8">
          <div>
            <h2 className="mb-[1rem] sm:mb-[2rem] text-4xl font-bold">
              <span className="text-[#1BAC4B]">تواصل معنا</span>
            </h2>
            <div className="flex flex-col gap-y-4">
              {contact.map((item) => {
                const { id, image, title, text } = item;

                return (
                  <article key={id} className="flex items-center gap-4">
                    <img src={image} alt="" className="max-w-[18px]" />
                    <span className="flex items-center">
                      <span className="font-bold">{title}</span>
                      <span>{text}</span>
                    </span>
                  </article>
                );
              })}
            </div>
          </div>

          <form className="flex flex-col gap-y-4 lg:min-w-[500px]  min-w-full max-w-full px-8">
            <input
              className="w-full bg-[#ECEEED99] outline-none p-4 rounded-lg"
              type="text"
              placeholder="الاسم كامل"
            />
            <input
              className="w-full bg-[#ECEEED99] outline-none p-4 rounded-lg"
              type="text"
              placeholder="البريد الإلكتروني"
            />
            <textarea
              className="w-full bg-[#ECEEED99] outline-none p-4 rounded-lg"
              type="text"
              placeholder="رسالتك"
            />

            <button className="w-full text-white p-4 rounded-lg bg-[#1BAC4B]">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
