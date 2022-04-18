import request from "../utils/request";
import Slider from "react-slick";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <nav className="">
      <Slider {...settings} className=" text-xl sm:text-2xl container mx-auto 3xl:flex flex-wrap justify-center ">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 text-center"
          >
            {title}
          </h2>
        ))}
      </Slider>
    </nav>
  );
};

export default Nav;
