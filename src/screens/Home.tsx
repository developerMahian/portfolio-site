import { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import { HiChevronDoubleDown } from "react-icons/hi";
import ThreeDModel from "../components/threeDModel/ThreeDModel";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    screenHandler();
    window.addEventListener("resize", screenHandler);
    return () => window.removeEventListener("resize", screenHandler);
  }, []);

  const screenHandler = () => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <div className="max-h-[90vh] relative overflow-hidden">
      <div className="w-screen h-[90vh]">
        <ThreeDModel isMobile={isMobile} />
      </div>

      <div
        className={`main-container absolute top-1/2 left-1/2 -translate-x-1/2 ${
          isMobile ? "-translate-y-[35%]" : "-translate-y-[15%]"
        } select-none z-0`}
      >
        <div className="text-primary text-base sm:text-[22px] font-bold mb-2">
          Hey there👋 I am..
        </div>

        <h1 className="text-[39px] sm:text-6xl md:text-7xl font-extrabold mb-3">
          Mahian Ahmed
        </h1>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold opacity-80 mb-8">
          <ReactTypingEffect
            typingDelay={200}
            speed={30}
            eraseSpeed={30}
            eraseDelay={1500}
            text={[`React Developer`, `JavaScript Geek`, `Coding Mentor`]}
          />
        </h2>

        <h3 className="sm:text-xl font-medium max-w-4xl">
          As a Digital Craftsman I love to craft fast, robust and scalable
          frontend products with greatly enhanced user experience.
        </h3>

        <HiChevronDoubleDown className="mt-[70px] mx-auto text-3xl opacity-80 animate-bouncePing" />
      </div>
    </div>
  );
};

export default Home;
