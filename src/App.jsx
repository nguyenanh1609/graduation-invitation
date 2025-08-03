import { useRef, useState } from "react";
import DoorLeft from "./assets/imgs/door-left.png";
import DoorRight from "./assets/imgs/door-right.png";
import Bg from "./assets/imgs/bg.png";
import Dresscode from "./assets/imgs/dresscode.png";
import Thankyou from "./assets/imgs/thankyou.png";
import Volume from "./assets/svg/volume.svg?react";
import VolumeX from "./assets/svg/volume-x.svg?react";
import { motion } from "motion/react";
import NameSvg from "./assets/svg/name.svg";
import Information from "./assets/svg/information.svg";
import audioMp3 from "./assets/audio/audio.mp3";

function App() {
  const audioRef = useRef(null);
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
    <div className="m-0 p-0 overflow-hidden">
      {/* audio */}
      <audio autoPlay loop ref={audioRef}>
        <source src={audioMp3} type="audio/mpeg" />
      </audio>

      <div
        className="fixed bottom-2 left-2 p-1 border rounded-full cursor-pointer"
        onClick={autoPlayAudio}
      >
        {playAudio ? <Volume /> : <VolumeX />}
      </div>

      {/* door */}

      <motion.div
        className="fixed inset-0 flex"
        style={{ display: showDoor ? "flex" : "none" }}
      >
        <motion.div
          className="absolute top-1/2 -translate-1/2 left-1/2 z-30"
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{ y: "-250%", opacity: 0.1, scale: 1.4 }}
          transition={{ duration: 3, ease: "easeOut" }}
          onAnimationComplete={() => {
            setShowDoor(false);
          }}
        >
          <img src="/logo.svg" alt="" />
        </motion.div>
        <motion.div
          className="flex-1 h-full relative"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <img src={DoorLeft} alt="" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div
          className="flex-1 h-full"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <img src={DoorRight} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="h-screen flex items-center justify-center snap-start">
          <div className="h-full w-full flex flex-col">
            <div className="flex-1">
              <img
                src="/avt.png"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src={NameSvg} alt="" />
            </div>
          </div>
        </section>
        <section
          className="h-screen flex items-center justify-center snap-start bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('${Bg}')`,
          }}
        >
          <div className="h-full w-full flex flex-col">
            <div className="flex-1 flex justify-center items-center">
              <img src={Information} alt="" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-6">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.1501765154742!2d105.78725844006766!3d21.005618002627372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acac08698957%3A0xcb92e58f7f3e275c!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgUXXhu5FjIGdpYSAoTkNDKQ!5e0!3m2!1svi!2s!4v1754201420184!5m2!1svi!2s"
                  width="10"
                  height="10"
                  loading="lazy"
                  className="w-full h-full rounded-3xl border-4 border-[#F9E1BC]"
                ></iframe>
              </div>
              <div className="text-center text-[#513C1C] flex flex-col gap-3">
                <div className="font-bold text-[32px]">Location</div>
                <div className="text-[14px] font-light">
                  <div>Hoi Truong MMH, Trung Tam Hoi Nghi Quoc Gia,</div>
                  <div>Cong So 2, Duong Pham Hung, Tu Liem, Ha Noi</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center snap-start bg-[#FFEECF]">
          <div className="h-full w-full flex flex-col px-5 py-16">
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
            <div className="flex-1">
              <img
                src={Dresscode}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center snap-start bg-[#FFEECF]">
          <div className="h-full w-full flex flex-col gap-6 px-5 py-16">
            <div className="text-[#513C1C] text-center">
              <div className="font-bold text-[32px] mb-5">Thank you !</div>
              <div className="font-light text-[16px]">
                <div>Thank you for joining me on this journey of</div>
                <div>youth. I have graduated 🎓 I hope to see you at</div>
                <div>the upcoming happy and meaningful</div>
                <div>graduation ceremony!</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="h-full">
                <img
                  src={Thankyou}
                  alt=""
                  className="h-full object-cover rounded-2xl"
                />
              </div>
            </div>
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
    </div>
  );
}

export default App;
