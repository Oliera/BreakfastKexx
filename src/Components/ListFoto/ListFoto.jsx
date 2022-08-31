// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'

const ListFoto = ({ data }) => {
  return (
    <div
    // style={{
    //   width: "330px",
    //   height: "360px",
    //   borderRadius: "50%",
    //   overflow: "hidden",
    // }}
    >
      <Swiper
        style={{
          width: "300px",
          height: "300px",
          // borderRadius: "50%",
          // overflow: "hidden",
        }}
        // install Swiper modules
        // eslint-disable-next-line no-undef
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${item})`,
                backgroundSize: "contain",
                // backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              // src={item}
              // width='100%'
              // height='auto'
              alt='logo'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListFoto;
