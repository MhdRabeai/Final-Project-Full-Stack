/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import cardsData from "../Components/cardsData";
import Card from "../Components/card";
import BodySlide from "../Components/BodySlide";
import Testimonial from "../Components/Testimonial";
import BlogCard from "../Components/BlogCard";
import { Link } from "react-router-dom";
import TeamCard from "../Components/TeamCard";

export const Home = () => {
  return (
    <div className="">
      <div className="container max-w-[86rem] w-full mx-auto px-4 ">
        <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-6 mb-6 border-b-2 border-[#ddd]">
          <div className="lg:col-span-3 flex flex-col ">
            <h1 className="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-center lg:text-left">
              Your Journey to Mental Clarity
            </h1>
            <h1 className="block text-3xl font-semibold text-[#4f9451] sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
              Starts Here
            </h1>

            <ul className="mt-5 marker:text-[#4f9451] list-disc ps-5 space-y-1 text-sm text-gray-600 dark:text-neutral-400">
              <li>Take control of your health</li>
              <li>Seek expert guidance</li>
              <li>Access preventive care</li>
              <li>Find solutions for long-standing health concerns</li>
              <li>Recieve Support with Doctor X</li>
            </ul>
            <div className="mt-5 lg:mt-8 flex ">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)] disabled:opacity-50 disabled:pointer-events-none"
              >
                Start therapy
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-3xl "
              src="hero.png"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center  justify-between pb-6 mb-6 border-b-2 border-[#ddd]">
          <div className="lg:col-span-2 flex  ">
            <div>
              <div className="w-full">
                <span className="block mb-1 text-lg font-semibold text-[#4F9451]">
                  Our Features
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Why choose Us
                </h2>
                <p className="mb-5 text-md text-gray-600 dark:text-gray-700">
                  In our time together, we aim to create a safe and supportive
                  environment where you can explore your thoughts, feelings, and
                  experiences. Together, we’ll work towards not only addressing
                  your immediate concerns but also empowering you to thrive in
                  every aspect of your life.
                </p>
                <div className="mt-5 lg:mt-8 flex ">
                  <button
                    type="button"
                    className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:block hidden "></div>
          <div className="md:block hidden "></div>
          <div class="lg:col-span-3 mt-10 lg:mt-0">
            <div className="flex justify-between  gap-y-6  flex-wrap homeFeatures">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  headline={card.headline}
                  content={
                    "Access to licensed mental health professionals who provide personalized care and support."
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="homeTeam pb-6 mb-6 border-b-2 border-[#ddd]">
          <div class="flex flex-wrap pb-6">
            <div class="w-full px-4">
              <div class="mx-auto  max-w-[510px] text-center">
                <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                  Our Team
                </span>
                <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Awesome Team
                </h2>
                <p class="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div
            data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "isInfiniteLoop":true,
  "slidesQty": {
    "xs": 1,
    "md": 2,
    "lg": 3
  }
}'
            className="relative "
          >
            <div className="hs-carousel w-full overflow-hidden rounded-lg">
              <div className="relative min-h-[450px] -mx-1">
                <div className="hs-carousel-body  absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div className="hs-carousel-slide px-1 ">
                    <BodySlide />
                  </div>
                  <div className="hs-carousel-slide px-1 ">
                    <BodySlide />
                  </div>
                  <div className="hs-carousel-slide px-1 ">
                    <BodySlide />
                  </div>
                  <div className="hs-carousel-slide px-1 ">
                    <BodySlide />
                  </div>
                  <div className="hs-carousel-slide px-1 ">
                    <BodySlide />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-start items-center w-[25px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f9451"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-end items-center w-[25px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f9451"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div className="hs-carousel-pagination flex justify-center absolute bottom-[-25px] start-0 end-0 space-x-2"></div>
          </div>
          <div class="flex justify-center pt-6">
            <Link
              class="bg-[#4F9451] dark:bg-dark-2 border-[#4F9451] dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color mt-5 transition hover:scale-105"
              to="/team"
            >
              View
            </Link>
          </div>
        </div>
        <div className=" pb-6 mb-6  ">
          <div class="flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto  max-w-[510px] text-center">
                <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                  Our Testimonial
                </span>
                <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What Our Patients Are Saying
                </h2>
                <p class="text-base text-body-color dark:text-dark-6">
                  Discover how Hope horizon has made a difference in the lives
                  of patients through personalized care and compassionate
                  service.
                </p>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
      <div className={`relative Facts mb-10`}>
        <div className=" -inset-0 w-full h-full pt-8 pb-10">
          <div class="mx-auto  max-w-[510px] text-center ">
            <span class="mb-2 block text-base font-semibold text-primary text-[#4F9451]">
              Fun Facts
            </span>
            <h2 class="mb-3 text-xl font-semibold leading-[1.2] text-white dark:text-white sm:text-4xl md:text-[40px]">
              Our achievements
            </h2>
          </div>
          <div className="pt-4 container grid justify-center gap-4 max-w-[800px] mx-auto lg:grid-cols-2 xl:grid-cols-4 text-white">
            <div className="flex flex-col items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font dark:text-gray-800">
                50+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed dark:text-gray-600">
                Happy Patients
              </p>
            </div>
            <div className="flex flex-col  items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font dark:text-gray-800">
                15+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed dark:text-gray-600">
                Campaign Complete
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font dark:text-gray-800">
                30+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed dark:text-gray-600">
                Award Won
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-1 md:text-4xl font-semibold sm:text-xl title-font dark:text-gray-800">
                25+
              </h2>
              <p className="flex-1  text-light text-base leading-relaxed dark:text-gray-600">
                Expert Doctors
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[86rem] w-full mx-auto px-4">
        <div className="blogs pb-6 mb-4 border-b-2 border-[#ddd]">
          <div class=" mx-auto  max-w-[510px] text-center pb-6">
            <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
              Our Blogs
            </span>
            <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Our Recent Articles
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              Discover expert advice and personal stories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            <BlogCard
              id={1}
              date={new Date().toLocaleDateString()}
              CardTitle={"title"}
              CardDescription={"lorem ...."}
              image="https://via.placeholder.com/150"
            />
            <BlogCard
              id={1}
              date={new Date().toLocaleDateString()}
              CardTitle={"title"}
              CardDescription={"lorem ...."}
              image="https://via.placeholder.com/150"
            />
            <BlogCard
              id={1}
              date={new Date().toLocaleDateString()}
              CardTitle={"title"}
              CardDescription={"lorem ...."}
              image="https://via.placeholder.com/150"
            />
            <BlogCard
              id={1}
              date={new Date().toLocaleDateString()}
              CardTitle={"title"}
              CardDescription={"lorem ...."}
              image="https://via.placeholder.com/150"
            />
          </div>
          <div className="flex justify-center pt-4">
            <Link
              class="bg-[#4F9451] dark:bg-dark-2 border-[#4F9451] dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color mt-5 transition hover:scale-105"
              to="/blogs"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="pb-6 mb-6 border-b-2 border-[#ddd]">
          <div class=" mx-auto  max-w-[510px] text-center pb-6">
            <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
              FAQs
            </span>
            <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Frequent Questions{" "}
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              Know more about how to deal with our website and have the best
              experience.{" "}
            </p>
          </div>

          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="grid md:grid-cols-5 gap-10">
              <div class="md:col-span-2 flex items-center">
                <div class="">
                  <img src="faq.png" alt="img" className="rounded-lg" />
                </div>
              </div>

              <div class="md:col-span-3">
                <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                  <div
                    class="hs-accordion pb-3 active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="true"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      Can I cancel at anytime?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p class="text-gray-600 dark:text-neutral-400">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  </div>

                  <div
                    class="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      My team has credits. How do we use them?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <p class="text-gray-600 dark:text-neutral-400">
                        Once your team signs up for a subscription plan. This is
                        where we sit down, grab a cup of coffee and dial in the
                        details.
                      </p>
                    </div>
                  </div>

                  <div
                    class="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      How does Preline's pricing work?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                    >
                      <p class="text-gray-600 dark:text-neutral-400">
                        Our subscriptions are tiered. Understanding the task at
                        hand and ironing out the wrinkles is key.
                      </p>
                    </div>
                  </div>

                  <div
                    class="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      How secure is Preline?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                    >
                      <p class="text-gray-600 dark:text-neutral-400">
                        Protecting the data you trust to Preline is our first
                        priority. This part is really crucial in keeping the
                        project in line to completion.
                      </p>
                    </div>
                  </div>

                  <div
                    class="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      How do I get access to a theme I purchased?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                    >
                      <p class="text-gray-600 dark:text-neutral-400">
                        If you lose the link for a theme you purchased, don't
                        panic! We've got you covered. You can login to your
                        account, tap your avatar in the upper right corner, and
                        tap Purchases. If you didn't create a login or can't
                        remember the information, you can use our handy
                        Redownload page, just remember to use the same email you
                        originally made your purchases with.
                      </p>
                    </div>
                  </div>

                  <div
                    class="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      Upgrade License Type
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                    >
                      <p class="text-gray-600 dark:text-neutral-400">
                        There may be times when you need to upgrade your license
                        from the original type you purchased and we have a
                        solution that ensures you can apply your original
                        purchase cost to the new license purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-10">
          <div class=" mx-auto  max-w-[510px] text-center pb-6">
            <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
              Our Awesome our Leadership
            </span>
            <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Our Recent Articles
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            <div className="hover:scale-105 transition">
              <BodySlide />
            </div>
            <div className="hover:scale-105 transition">
              <BodySlide />
            </div>
            <div className="hover:scale-105 transition">
              <BodySlide />
            </div>
            <div className="hover:scale-105 transition">
              <BodySlide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
