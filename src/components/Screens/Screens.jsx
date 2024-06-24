import Slider from "react-slick";
import { screens } from "../../utils/data";

function Screens() {
  const settings = {
    dots: true,  
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className="bg-[#9ff2bb33] opinions" id="opinions">
      <div className="section-container">
        <h2 className="mb-[1rem] sm:mb-[2rem] text-center text-4xl font-bold">
          <span className="text-[#1BAC4B]"> بعض الشاشات الخاصة بنا:</span>
        </h2>
        <Slider {...settings}>
          {screens.map((screen) => {
            const { image } = screen;
            return (
              <div key={screen.id}>
                <div
                  className={`w-full relative sm:flex-row flex-col-reverse`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"#ecfcf1"
                  }}
                >
                  <img src={image} alt="" className="hide-bg" />
                </div>
              </div>
            );
          })}
        </Slider>

      </div>
    </section>
  );
}

export default Screens;
