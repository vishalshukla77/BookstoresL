import React, { useEffect, useState, useRef } from 'react';
import Bookcard from '../books/Bookcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi.js';

const categories = ["choose a genre", "Business", "Fiction", "Horror", "Adventure"];

function Topsell() {
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { data: books = [] } = useFetchAllBooksQuery();


  const filteredBooks =
    selectedCategory === "choose a genre"
      ? books
      : books.filter(
          (book) => book.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute z-10 top-1/2 -left-1 transform -translate-y-1/2 bg-gray-800 text-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-600 hover:scale-110 transition-all duration-300"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          ref={nextRef}
          className="absolute z-10 top-1/2 -right-1 transform -translate-y-1/2 bg-gray-800 text-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-600 hover:scale-110 transition-all duration-300"
        >
          <FaChevronRight className="text-xl" />
        </button>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Ensure refs are attached before Swiper initializes
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
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
          {filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <Bookcard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Topsell;
