import React, { useEffect, useState, useRef } from 'react';
import Bookcard from '../books/Bookcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi';

function Recommended() {
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

const {data:books=[]}=useFetchAllBooksQuery();

  return (
    <div className="py-10 relative">
      <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {books.length>0 && books.slice(8,18).map((book, index) => (
          <SwiperSlide key={index}>
            <Bookcard book={book} />
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute z-10 top-1/2 -left-2 transform -translate-y-1/2 bg-gray-800 text-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-600 hover:scale-110 transition-all duration-300"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 top-1/2 -right-2 transform -translate-y-1/2 bg-gray-800 text-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-600 hover:scale-110 transition-all duration-300"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </Swiper>
    </div>
  );
}

export default Recommended;
