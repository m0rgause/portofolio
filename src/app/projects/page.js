import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Projects() {
  const projects = prisma.projects.findMany();
  console.log(projects);

  return (
    <section className="container">
      <div className="flex justify-center my-[60px] content__header">
        <h1 className="dark:text-white text-3xl text-center font-semibold">
          My Project
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="project__body">
          <div className="project__list grid md:grid-cols-2 sm:grid-cols-1 gap-3">
            <ProjectCard
              title="Movie Rest API"
              description=""
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
    <div className="project__card bg-gray-800 max-w-sm  rounded-lg shadow">
      <div className="p-4">
        <h2 className="dark:text-white text-xl font-semibold">{title}</h2>
        <p className="dark:text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-gray-100 bg-blue-400 px-2 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
