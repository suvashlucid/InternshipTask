import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/key.svg";
import "./Carosel.css";

const image1 =
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJgK7gnV-m3t1mQD4e4nF8YRRllFQ28Y95ibElIyjaF26w_0xaIjTWp811dTi4uFQul0&usqp=CAU";
const image2 = " https://www.svgrepo.com/show/56338/man.svg";
const image3 =
  " data:image/png;base64,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";

function Carosel() {
  const settings = {
    dots: true, // Add dots for navigation
    dotsClass: "slick-dots slick-thumb", // Define class for dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="carosel-container">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="carosel-item">
            <div className="h-56 bg-black-500 flex justify-center items-center  ">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className="bg-yellow-500 text-white text-lg px-6 py-1 rounded-xl">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `${image3}`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: `${image1}`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: `${image2}`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `${image1}`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `${image1}`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Carosel;
