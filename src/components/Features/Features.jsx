import { useEffect } from "react";
import { features } from "../../utils/data";
import "./features.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Features() {

  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <section className="section-container" id="features" data-aos="fade-down" data-aos-easing="linear"
    >
      <h2 className="mb-[1rem] sm:mb-[2rem] text-center text-4xl font-bold">
        <span className="text-[#1BAC4B]">مميزاتنا</span>
      </h2>

      <div className="flex items-center justify-center gap-8 flex-wrap sm:flex-row flex-col">
        {features.map((feature) => {
          const { id, text, image } = feature;
          return (
            <div key={id} className="sm:min-w-[30%] min-w-full text-center">
              <article
                key={id}
                className="mx-auto w-[200px] h-[200px] rounded-full p-8 bg-[#1BAC4B80] flex items-center justify-center flex-col"
              >
                <img src={image} alt="" className="mb-8" />
                <p className="font-semibold">{text}</p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Features;
