import React from "react";
import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0">
            <Pretitle text={"Testimonials"} />
            <h2 className="h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we've helped them bring
              their dreams to live with expert craftsmanship.
            </p>
            <Button text={"Work with us"} />
          </div>
          {/* image and slider */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end md:items-center">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src={"/assets/img/testimonials/img.jpg"}
                alt=""
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max">
              <div className="xl:flex w-[95%] h-[193px] bg-[#ffca3b] absolute -top-2 -left-2 z-1"></div>
              {/* quote icon imag */}
              <Image
                src={"/assets/img/testimonials/quote.svg"}
                alt=""
                width={54}
                height={36}
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
