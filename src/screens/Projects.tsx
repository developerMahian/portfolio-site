import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold text-center mb-6">
        My <span className="text-primary opacity-80">Portfolio</span>
      </h1>

      <div className="max-w-[500px] sm:max-w-none mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 pb-52 lg:px-20">
          <ProjectCard
            video="airhotel"
            title="Airbnb Clone"
            shortDesc="Ultimate UAE properties listing app with fantastic map and autosuggesion search bar."
            tools={[
              "NextJS",
              "Tailwind",
              "React-Query",
              "Server Side Rendering",
            ]}
          />
          <ProjectCard
            video="shoppydash"
            title="ShoppyDash"
            shortDesc="Premium feature rich Admin Dashboard with tons of Data visualization apps."
            tools={[
              "React",
              "Tailwind",
              "SyncFusion Components",
              "Context API",
            ]}
          />
          <ProjectCard
            video="cryptoverse"
            title="CryptoVerse"
            shortDesc="Get to know the latest trends of Cryptocurrencies around the Globe."
            tools={["React", "Redux-Toolkit", "Ant-Design", "ChartJS"]}
          />
          <ProjectCard
            video="gsearch"
            title="gSearch"
            shortDesc="Twin-Brother of Google with major search functionalities and elegant image gallery"
            tools={[
              "NextJS",
              "Tailwind",
              "API Integration",
              "Context API",
              "LightGallery",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
