import Link from "next/link";

export default function Projects() {
  return (
    <section className="container">
      <div className="flex justify-center my-[60px] content__header">
        <h1 className="dark:text-white text-3xl text-center font-semibold">
          Projects
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="content__body">
          <p className="dark:text-gray-300 mb-4 leading-8">
            Here are some of the projects that I have worked on. You can find
            more of my projects on my{" "}
            <Link
              className="underline dark:text-gray-500"
              href={"https://github.com/m0rgause"}
              target="_blank"
            >
              GitHub
            </Link>
            .
          </p>
          <div className="project__list">
            <ProjectCard
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
              tags={["React", "Tailwind CSS", "Next.js"]}
              link="#"
            />
            <ProjectCard
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
              tags={["React", "Tailwind CSS", "Next.js"]}
              link="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="project__card">
      <h2 className="dark:text-white text-xl font-semibold">{title}</h2>
      <p className="dark:text-gray-300 mb-4">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="dark:text-gray-500 bg-gray-800 px-2 py-1 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link className="underline dark:text-gray-500" href={link}>
        View Project
      </Link>
    </div>
  );
};
