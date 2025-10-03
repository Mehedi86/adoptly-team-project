"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const photos = [
  "/about/gallery1.jpg",
  "/about/gallery2.jpg",
  "/about/gallery3.jpg",
  "/about/gallery4.jpg",
  "/about/gallery5.jpg",
  "/about/gallery6.jpeg",
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl text-black sm:text-3xl lg:text-4xl font-bold mb-12">
          Our Latest Photos
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1 },  // small phone
            640: { slidesPerView: 2 },  // tablet portrait
            768: { slidesPerView: 3 },  // tablet landscape
            1024: { slidesPerView: 4 }, // desktop
            1280: { slidesPerView: 5 }, // large screen
          }}
          className="pb-12"
        >
          {photos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-md shadow-md cursor-pointer">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
