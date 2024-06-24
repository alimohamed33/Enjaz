import Slider from "react-slick";
import { clients } from "../../utils/data";
import { MdDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

import classes from "./clients-openion.module.css";

function ClientsOpenion() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[#9ff2bb33] opinions" id="opinions">
      <div className="section-container">
        <h2 className="mb-[1rem] sm:mb-[2rem] text-center text-4xl font-bold">
          آراء <span className="text-[#1BAC4B]">عملائنا</span>
        </h2>

        <Slider {...settings}>
          {clients.map((client) => {
            const { id, image, text, title, rate, calender, name } = client;

            return (
              <div key={client.id} className="w-full text-center mx-auto ">
                <article
                  className={`bg-white border-solid border-2 border-[#1BAC4B] max-w-[800px] w-full mx-auto relative p-8 rounded-2xl flex items-center justify-end gap-x-12 sm:flex-row flex-col-reverse`}
                >
                  <div className="text-right">
                    <p className="text-[#1BAC4B] text-lg">{title}</p>
                    <p className="text-lg mt-4 mb-8">{text}</p>

                    <div className="flex flex-row-reverse items-center justify-between">
                      <span className="flex items-center gap-x-2 py-1 px-4 border-solid border-2 border-[#1BAC4B] rounded-[100px] ">
                        <MdDateRange className="fill-[#1bac4b]" />
                        {calender}
                      </span>
                      <span className="flex items-center gap-x-2 py-1 px-4 border-solid border-2 border-[#1BAC4B] rounded-[100px] ">
                        <FaRegStar className="fill-[#1bac4b]" />
                        {rate}
                      </span>
                      <span className="py-1 px-4 border-solid border-2 border-[#1BAC4B] rounded-[100px]">
                        {name}
                      </span>
                    </div>
                  </div>

                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "110px",
                      borderRadius: "30px 0",
                      height: "130px",
                      objectFit: "cover",
                    }}
                  />
                </article>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default ClientsOpenion;
