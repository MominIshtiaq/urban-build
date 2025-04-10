import React from "react";
import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <div className="container max-auto">
        <div className="w-full xl:h-[730px] shadow-lg p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-[#ffca3b]">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* Info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-[#ffca3b]/40 h-[640px]">
              <h4 className="text-[26px] font-bld mb-6">Contact Us</h4>
              <p className="mb-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              {/* contact item list */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item 1 */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-[#ffca3b]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold text-[#121315]">
                      hi@urbanbuild.com
                    </p>
                  </div>
                </div>
                {/* contact item 2 */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-[#ffca3b]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at out office.</p>
                    <p className="font-semibold text-[#121315]">
                      1250 Brickstone Ave, Dallas, TX 75201, USA
                    </p>
                  </div>
                </div>
                {/* contact item 3 */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-[#ffca3b]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-[#121315]">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles={"flex gap-[40px]"}
                iconStyles={"text-[#121315] text-[20px]"}
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
