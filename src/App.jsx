import { useRef, useState } from "react";
import DoorLeft from "./assets/imgs/mobile/door-left.png";
import DoorRight from "./assets/imgs/mobile/door-right.png";
import Bg from "./assets/imgs/mobile/bg.png";
import Dresscode from "./assets/imgs/mobile/dresscode.png";
import Avt from "./assets/imgs/mobile/avt.png";

import Thankyou from "./assets/svg/thank.svg";
import Volume from "./assets/svg/mobile/volume.svg?react";
import VolumeX from "./assets/svg/mobile/volume-x.svg?react";
import { motion, useInView } from "motion/react";
import Information from "./assets/svg/mobile/information.svg";
import Logo from "./assets/svg/mobile/logo.svg";
import audioMp3 from "./assets/audio/audio.mp3";

import AvtDesktop from "./assets/imgs/desktop/avt.png";
import NameSvgDesktop from "./assets/svg/desktop/name.svg";
import DresscodeDesktop from "./assets/imgs/desktop/dresscode.png";
import AvtSvg from "./assets/svg/mobile/avt.svg";
import NameSvg from "./assets/svg/mobile/name.svg";

const Scroll = () => {
  return (
    <div className="flex flex-col animate-bounce fixed bottom-1 right-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevrons-up-icon lucide-chevrons-up"
      >
        <path d="m17 11-5-5-5 5" />
        <path d="m17 18-5-5-5 5" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevrons-down-icon lucide-chevrons-down"
      >
        <path d="m7 6 5 5 5-5" />
        <path d="m7 13 5 5 5-5" />
      </svg>
    </div>
  );
};

function App() {
  const audioRef = useRef(null);
  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const isInViewDay = useInView(dayRef, { once: true });
  const isInViewHour = useInView(hourRef, { once: true });
  const dayRefMobile = useRef(null);
  const hourRefMobile = useRef(null);
  const isInViewDayMobile = useInView(dayRefMobile, { once: true });
  const isInViewHourMobile = useInView(hourRefMobile, { once: true });
  const [showDoor, setShowDoor] = useState(true);
  const [playAudio, setPlayAudio] = useState(false);

  const autoPlayAudio = () => {
    if (!playAudio) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setPlayAudio((e) => !e);
  };

  return (
    <div className="font-lora">
      {/* audio */}
      <audio loop ref={audioRef}>
        <source src={audioMp3} type="audio/mpeg" />
      </audio>

      <div
        className="fixed bottom-1 left-1 p-1 border rounded-full cursor-pointer"
        onClick={autoPlayAudio}
      >
        {playAudio ? <Volume /> : <VolumeX />}
      </div>

      {/* door */}

      <div className="block sm:hidden">
        <motion.div
          className="fixed inset-0 flex z-40"
          style={{ display: showDoor ? "flex" : "none" }}
        >
          <motion.div
            className="flex-1 h-full relative"
            initial={{ x: 0 }}
            animate={{ x: "-150%" }}
            transition={{ duration: 3, ease: "easeOut" }}
            onAnimationComplete={() => {
              setShowDoor(false);
            }}
          >
            <div className="w-[166px] h-auto absolute top-1/2 -translate-y-1/2 -right-[83px] z-50">
              <img src={Logo} alt="" className="h-full w-full " />
            </div>
            <img src={DoorLeft} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            className="flex-1 h-full"
            initial={{ x: 0 }}
            animate={{ x: "150%" }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <img
              src={DoorRight}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* mobile */}

      <div className="h-svh overflow-y-scroll snap-y snap-mandatory block sm:hidden">
        <section className="h-svh snap-start">
          <div className="h-svh w-full flex flex-col">
            <div
              className="flex-1 bg-no-repeat bg-cover bg-top"
              style={{
                backgroundImage: `url('${AvtSvg}')`,
              }}
            ></div>
            <div className="flex-1 p-4 flex flex-col gap-10">
              <div
                className="bg-no-repeat bg-contain bg-center w-auto h-full"
                style={{
                  backgroundImage: `url('${NameSvg}')`,
                }}
              ></div>
              <div className="text-center flex flex-col gap-5">
                <div className="text-base font-normal text-[#262728]">
                  Join us for a graduation party
                </div>
                <motion.div
                  initial={{ y: "500%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className=" font-bold text-4xl text-[#46361C] z-20"
                >
                  TRAN THI LINH
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="h-svh snap-start bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('${Bg}')`,
          }}
        >
          <div className="h-svh w-full flex flex-col">
            <div className="h-full p-4 flex flex-col gap-10 justify-center text-center">
              <div className="text-4xl font-bold text-[#513C1C]">
                Event Information
              </div>
              <div className="flex flex-col gap-5 lg:gap-10 flex-1">
                <div className="flex-1 justify-start flex flex-col gap-5 lg:gap-10 items-center">
                  <motion.div
                    ref={dayRefMobile}
                    initial={{ opacity: 0 }}
                    animate={
                      isInViewDayMobile ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[#262728] font-normal text-2xl border-y-1 border-[#513c1c7e] py-2 lg:py-5 min-w-[136px]"
                  >
                    SUNDAY
                  </motion.div>
                  <div className="text-3xl font-normal text-[#262728]">
                    AUGUST
                  </div>
                  <div className="font-bold text-8xl text-[#B88E63]">10</div>
                  <motion.div
                    ref={hourRefMobile}
                    initial={{ opacity: 0 }}
                    animate={
                      isInViewHourMobile ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="text-[#262728] font-normal text-2xl border-y-1 :border-[#513C1C] py-2 min-w-[136px]"
                  >
                    AT 15:00 PM
                  </motion.div>
                </div>
                <div className="grid-cols-1 grid">
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.1501765154742!2d105.78725844006766!3d21.005618002627372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acac08698957%3A0xcb92e58f7f3e275c!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgUXXhu5FjIGdpYSAoTkNDKQ!5e0!3m2!1svi!2s!4v1754201420184!5m2!1svi!2s"
                      width="10"
                      height="10"
                      loading="lazy"
                      className="w-full min-h-[150px] rounded-3xl border-4 border-[#F9E1BC]"
                    ></iframe>
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#513C1C]">
                  Location
                </div>
                <div className="font-normal text-base text-black">
                  Hoi Truong MMH, Trung Tam Hoi Nghi Quoc Gia, Cong So 2, Duong
                  Pham Hung, Tu Liem, Ha Noi
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-svh  snap-start bg-[#FFEECF]">
          <div className="h-svh w-full flex flex-col p-4">
            <div className="flex-1">
              <div className="text-center text-[#513C1C] font-bold text-[32px] mb-5">
                Dresscode
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-[#9F7447] rounded-full"></div>
                  <div>
                    <div className="text-black font-bold text-[16px]">
                      Brown Caramel
                    </div>
                    <div className="text-[#595959] font-normal text-[14px]">
                      #9F7447
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-[#000000] rounded-full"></div>
                  <div>
                    <div className="text-black font-bold text-[16px]">
                      Black
                    </div>
                    <div className="text-[#595959] font-normal text-[14px]">
                      #000000
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-[#FFFFFF] rounded-full"></div>
                  <div>
                    <div className="text-black font-bold text-[16px]">
                      White
                    </div>
                    <div className="text-[#595959] font-normal text-[14px]">
                      #FFFFFF
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{
                backgroundImage: `url('${Dresscode}')`,
              }}
            ></div>
          </div>
        </section>
        <section className="h-svh  snap-start bg-[#FFEECF]">
          <div className="h-svh w-full flex flex-col gap-6 p-4">
            <div className="text-[#513C1C] text-center">
              <div className="font-bold text-[32px] mb-5">Thank you !</div>
              <div className="font-light text-[16px]">
                <div>Thank you for joining me on this journey of</div>
                <div>youth. I have graduated 🎓 I hope to see you at</div>
                <div>the upcoming happy and meaningful</div>
                <div>graduation ceremony!</div>
              </div>
            </div>
            <div
              className="bg-center bg-no-repeat bg-contain flex-1"
              style={{
                backgroundImage: `url('${Thankyou}')`,
              }}
            ></div>
            <div className="text-[#513C1C]">
              <div className="font-bold text-[20px] mb-6">
                Contact Information
              </div>
              <div className="font-light text-[14px]">
                <div className="grid grid-cols-4 gap-3">
                  <div>Phone/Zalo:</div>
                  <div className="col-span-3">0345565923</div>
                  <div>Email:</div>
                  <div className="col-span-3">Linht1928@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden sm:block">
        <Scroll />
      </div>

      {/* desktop */}
      <div className="h-svh scrollbar-hide overflow-y-scroll snap-y snap-mandatory hidden sm:block">
        <section className="h-svh snap-start bg-[#EECF97]">
          <div className="flex h-full">
            <div
              className="flex-2 lg:flex-1 bg-cover bg-top bg-no-repeat"
              style={{
                backgroundImage: `url('${AvtDesktop}')`,
              }}
            ></div>
            <div className="p-6 flex-1 grid grid-cols-1 lg:grid-cols-6 2xl:grid-cols-4 ">
              <div className="lg:col-start-2 lg:col-span-4 2xl:col-start-2 2xl:col-span-2 flex flex-col justify-center gap-20">
                <img src={NameSvgDesktop} alt="" className="h-auto w-full" />
                <div className="text-center flex flex-col gap-10">
                  <div className="text-base font-normal text-[#262728]">
                    Join us for a graduation party
                  </div>
                  <motion.div
                    initial={{ y: "500%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className=" font-bold text-3xl lg:text-5xl text-[#46361C]"
                  >
                    TRAN THI LINH
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-svh snap-start">
          <div className="grid grid-cols-3 h-full">
            <div className="p-6 col-span-1 lg:col-span-2 flex flex-col gap-10 lg:gap-32 justify-center text-center">
              <div className="text-4xl font-bold text-[#513C1C]">
                Event Information
              </div>
              <div className="flex flex-col gap-5 lg:gap-10">
                <div className="text-3xl font-normal text-[#262728]">
                  AUGUST
                </div>
                <div className="flex lg:flex-row flex-col gap-5 lg:gap-10 justify-center items-center">
                  <motion.div
                    ref={dayRef}
                    initial={{ opacity: 0 }}
                    animate={isInViewDay ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[#262728] font-normal text-2xl border-y-1 lg:border-y-2 border-[#513c1c7e] lg:border-[#513C1C] py-2 lg:py-5 min-w-full lg:min-w-[136px]"
                  >
                    SUNDAY
                  </motion.div>
                  <div className="font-bold text-8xl text-[#B88E63]">10</div>
                  <motion.div
                    ref={hourRef}
                    initial={{ opacity: 0 }}
                    animate={isInViewHour ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="text-[#262728] font-normal text-2xl border-y-1 lg:border-y-2 border-[#513c1c7e] lg:border-[#513C1C] py-2 lg:py-5 min-w-full lg:min-w-[136px]"
                  >
                    AT 15:00 PM
                  </motion.div>
                </div>
                <div className="grid-cols-1 lg:grid-cols-3 grid">
                  <div className="lg:col-start-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.1501765154742!2d105.78725844006766!3d21.005618002627372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acac08698957%3A0xcb92e58f7f3e275c!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgUXXhu5FjIGdpYSAoTkNDKQ!5e0!3m2!1svi!2s!4v1754201420184!5m2!1svi!2s"
                      width="10"
                      height="10"
                      loading="lazy"
                      className="w-full min-h-[150px] lg:min-h-[220px] rounded-3xl border-4 border-[#F9E1BC]"
                    ></iframe>
                  </div>
                </div>
                <div className="font-normal text-base text-black">
                  Hoi Truong MMH, Trung Tam Hoi Nghi Quoc Gia, Cong So 2, Duong
                  Pham Hung, Tu Liem, Ha Noi
                </div>
              </div>
            </div>
            <div
              className="bg-contain lg:bg-cover bg-top bg-no-repeat col-span-2 lg:col-span-1"
              style={{
                backgroundImage: `url('${DresscodeDesktop}')`,
              }}
            ></div>
          </div>
        </section>
        <section className="h-svh snap-start bg-[#EECF97] p-6">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-20 lg:gap-32">
              <div className="flex flex-col gap-10 text-center">
                <div className="text-4xl font-bold text-[#4D2600]">
                  Dresscode
                </div>
                <div className="font-normal text-base text-black">
                  I hope you wear these colors to my graduation day.
                </div>
              </div>
              <div className="flex justify-center gap-10">
                <div className="flex flex-col gap-5 items-center">
                  <div className="w-32 h-32 rounded-full bg-white"></div>

                  <div className="font-semibold text-base text-black">
                    White
                  </div>
                  <div className="italic font-normal text-base text-black">
                    #FFFFFF
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center">
                  <div className="w-32 h-32 rounded-full bg-black"></div>
                  <div className="font-semibold text-base text-black">
                    Black
                  </div>
                  <div className="italic font-normal text-base text-black">
                    #000000
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center">
                  <div className="w-32 h-32 rounded-full bg-[#9F7447]"></div>
                  <div className="font-semibold text-base text-black">
                    Brown Caramel
                  </div>
                  <div className="italic font-normal text-base text-black">
                    #9F7447
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-svh snap-start p-6">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-5 md:gap-10 lg:gap-32">
              <div className="flex flex-col gap-10 text-center">
                <div className="text-4xl font-bold text-[#4D2600]">
                  Thank you !
                </div>
                <div className="font-normal text-base text-black">
                  Thank you for joining me on this journey of youth. I have
                  graduated 🎓 I hope to see you at the upcoming happy and
                  meaningful graduation ceremony!
                </div>
              </div>
              <div className="flex justify-center">
                <img src={Thankyou} alt="" />
              </div>
              <div className="flex flex-col gap-10 text-center">
                <div className="text-3xl font-bold text-[#4D2600]">
                  Contact Information
                </div>
                <div className="font-light text-[14px] grid grid-cols-3">
                  <div className="grid grid-cols-2 gap-3 text-left col-start-2 col-span-1">
                    <div>Phone/Zalo:</div>
                    <div>0345565923</div>
                    <div>Email:</div>
                    <div>Linht1928@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
