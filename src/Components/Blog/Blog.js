import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import star from "../../Images/star.png";
import blogCover from "../../Images/blog-details.jpeg";
import blogDetailsPic1 from "../../Images/project1.jpeg";
import blogDetailsPic2 from "../../Images/project3.jpeg";
import blogDetailsPic3 from "../../Images/project4.jpeg";
import Footer from "../Footer/Footer";
import HelmetHook from "../../Hooks/HelmetHook";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: "2rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Blog"} />
      <NavBar />

      <div className="flex flex-col gap-10">
        <div className="w-[85%] m-auto">
          <div className="mt-[3rem]">
            <p className="text-accent text-[3rem] tracking-[1px] font-[700] text-left">
              CONSULTED ADMITTING IS POWER
            </p>
          </div>
        </div>

        <div>
          <img src={blogCover} alt="" />
        </div>

        <div className="w-[85%] m-auto">
          <div className="flex flex-col gap-6 text-left">
            <h1 className="text-accent mt-5 font-semibold text-3xl">
              I neglect my talents
            </h1>
            <p className="text-primary leading-relaxed text-[15px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6 pb-10 text-left">
            <div className="grid grid-cols-3 gap-4">
              <img className="w-full h-full" src={blogDetailsPic1} alt="" />
              <img className="w-full h-full" src={blogDetailsPic2} alt="" />
              <img className="w-full h-full" src={blogDetailsPic3} alt="" />
            </div>
            <p className="text-primary leading-relaxed text-[15px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country in which roasted parts of sentences fly into
              your mouth. Even the all-powerful Pointing has no control about
              the blind texts it is an almost unorthographic life One day
              however a small line.
            </p>

            <span className="pl-5 text-lg leading-loose">
              <p className="lg:text-[16px] text-primary">
                1. Impenetrable foliage of my trees, and but a few stray gleams.
              </p>
              <p className="lg:text-[16px] text-primary">
                2. A wonderful serenity has taken possession of my entire soul.
              </p>
              <p className="lg:text-[16px] text-primary">
                3. I should be incapable of drawing a single stroke at the
                present moment.
              </p>
            </span>

            <p className="text-primary leading-relaxed text-[15px]">
              I am so happy, my dear friend, so absorbed in the exquisite sense
              of mere tranquil existence, that I neglect my talents. I should be
              incapable of drawing a single stroke at the present moment and yet
            </p>

            <div className="bg-[#1d1d1d] px-10 py-8 border-l-4 border-[#4D66D0]">
              <p className="text-[#767676] leading-relaxed text-[16px] lg:text-[18px] font-bold italic">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarks.
              </p>
            </div>

            <span className="pl-5 text-lg leading-loose">
              <p className="text-primary text-[15px]">
                1. Impenetrable foliage of my trees, and but a few stray gleams.
              </p>
              <p className="text-primary text-[15px]">
                2. A wonderful serenity has taken possession of my entire soul.
              </p>
              <p className="text-primary text-[15px]">
                3. I should be incapable of drawing a single stroke at the
                present moment.
              </p>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
