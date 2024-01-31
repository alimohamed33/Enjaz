import Slider from "react-slick";
import image1 from "../../../public/assets/images/app/1.png";
import image2 from "../../../public/assets/images/app/2.png";
import image3 from "../../../public/assets/images/app/3.png";
import image4 from "../../../public/assets/images/app/4.png";
import image5 from "../../../public/assets/images/app/5.png";
import image6 from "../../../public/assets/images/app/6.png";
import image7 from "../../../public/assets/images/app/7.png";
import image8 from "../../../public/assets/images/app/8.png";
import image9 from "../../../public/assets/images/app/9.png";
import image10 from "../../../public/assets/images/app/10.png";
import image11 from "../../../public/assets/images/app/11.png";

function AppSteps() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[#9ff2bb33]" id="opinions">
      <div className="section-container">
        <h2 className="mb-[1rem] sm:mb-[2rem] text-center text-4xl font-bold">
          <span className="text-[#1BAC4B]">الشاشات الخاصة بالتطبيق</span>
        </h2>

        <Slider {...settings}>
          {images?.map((image, index) => {
            return <img src={image} alt="" key={`image-${index}`} />;
          })}
        </Slider>
      </div>
    </section>
  );
}
export default AppSteps;
