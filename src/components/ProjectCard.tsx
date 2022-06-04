import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = (props: {
  video: string;
  title: string;
  shortDesc: string;
  tools: string[];
}) => {
  const projectUrl: any = {
    airhotel: {
      siteUrl: "https://airhotelclone.vercel.app/",
      sourceUrl: "https://github.com/developerMahian/Airbnb_Next_Clone",
    },
    shoppydash: {
      siteUrl: "https://shoppydash.vercel.app/",
      sourceUrl: "https://github.com/developerMahian/shoppydash",
    },
    cryptoverse: {
      siteUrl: "https://cryptoversereact.vercel.app/",
      sourceUrl: "https://github.com/developerMahian/React-Cryptocurrency-App",
    },
    gsearch: {
      siteUrl: "https://greact.vercel.app/",
      sourceUrl: "https://github.com/developerMahian/google-clone",
    },
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center mx-auto rounded-xl shadow-lg overflow-hidden group">
      <video
        playsInline
        autoPlay
        loop
        muted
        src={`./videos/${props.video}.mp4`}
        className="w-full min-h-[300px] bg-base-100 bg-center bg-cover rounded-lg shadow-md"
      />

      <div className="goup absolute inset-0 h-full flex flex-col justify-end p-6">
        <div
          className="absolute inset-0 z-0 sm:opacity-0 group-hover:sm:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1))",
          }}
        />

        <div className="sm:translate-y-96 group-hover:sm:translate-y-0 transition-transform duration-300 z-10">
          <h1 className="flex gap-6 items-center">
            <a
              href={projectUrl[props.video].siteUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 w-fit text-2xl font-bold text-gray-100 hover:underline underline-offset-4 mb-2"
            >
              {props.title} <FaExternalLinkAlt className="text-base" />
            </a>

            <a
              href={projectUrl[props.video].sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl text-white hover:scale-125 transition-transform duration-200 -translate-y-1" />
            </a>
          </h1>

          <p className="text-sm font-medium text-gray-50 mb-6">
            {props.shortDesc}
          </p>
          <div className="flex flex-wrap gap-2">
            {props.tools?.map((stack, index) => (
              <span
                key={index}
                className="text-xs font-semibold text-gray-100 bg-gray-100/30 px-3 py-1 rounded-full hover:scale-110 transition-transform"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
