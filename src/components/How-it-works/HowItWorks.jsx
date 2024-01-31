import { howItWorks } from "../../utils/data";

function HowItWorks() {
  return (
    <section className="section-container" id="how-it-works">
      <h2 className="text-4xl font-bold text-center">
        كيف يعمل <span className="text-[#1BAC4B]">إنجاز </span>
      </h2>

      <div className="mt-16 flex justify-center gap-8 flex-wrap">
        {howItWorks.map((item) => {
          const { id, title, text, image } = item;
          return (
            <article
              key={id}
              className="p-4 rounded-xl w-fit min-w-[300px] max-w-[100%] text-center border-solid border-2 border-[#1BAC4B]"
            >
              <img src={image} alt={text} className="mx-auto mb-8" />
              <h5 className="text-xl font-bold mb-4">{title}</h5>
              <p className="text-lg max-w-[300px] text-center">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default HowItWorks;
