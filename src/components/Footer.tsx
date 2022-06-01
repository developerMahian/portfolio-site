import { FaArrowCircleUp, FaGithub, FaSkype, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 mb-3">
      <div className="flex md:flex-col justify-center items-center gap-4 md:fixed right-10 bottom-10 z-10">
        <a
          href="https://github.com/developerMahian"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <FaGithub
            className={`${socialIconClasses} text-black dark:text-gray-50 border-black dark:border-gray-50`}
          />
        </a>
        <a
          href="https://github.com/developerMahian"
          target="_blank"
          rel="noreferrer"
          title="Skype"
        >
          <FaSkype
            className={`${socialIconClasses} text-2xl text-[#00aff0]  border-[#00aff0] animate-scalePing`}
          />
        </a>
        <a
          href="https://github.com/developerMahian"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
        >
          <FaTwitter
            className={`${socialIconClasses} text-[#1DA1F2]  border-[#1DA1F2]`}
          />
        </a>
      </div>

      <div className="font-mono text-sm text-center my-4">
        Designed and Built by Mahian Ahmed
      </div>

      <button
        className="block mx-auto"
        onClick={() =>
          document
            .getElementById("main-el")
            ?.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
      >
        <FaArrowCircleUp className="text-4xl text-primary hover:text-primary-focus hover:scale-110 transition-all duration-300 animate-bounce" />
      </button>
    </footer>
  );
};

const socialIconClasses =
  "text-xl border-[3px] rounded-full p-[5px] box-content opacity-80 hover:opacity-100 hover:-translate-y-1 hover:!text-primary hover:!border-primary transition duration-300";

export default Footer;
