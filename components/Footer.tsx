import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative bg-gradient-to-t from-black-900 via-black-800 to-black-700 text-white" id="contact">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center text-center px-5">
        <h1 className="heading lg:max-w-[45vw] text-4xl md:text-5xl font-extrabold leading-tight text-gradient">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-lg md:text-xl">
          Let's collaborate! Get in touch and see how I can transform your ideas into reality.
        </p>
        <a href="mailto:Puneetpunia7982@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-center px-5">
        <p className="text-sm md:text-base font-light">
          Copyright © 2024 <span className="font-semibold">Punit Kumar</span> | Built with ❤️ by Punit Kumar
        </p>

        <div className="flex items-center gap-6 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-300 rounded-lg border border-gray-700 hover:scale-110 transition-transform duration-300"
            >
              <img src={info.img} alt={info.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
