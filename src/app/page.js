import Link from "next/link";

export default function About() {
  return (
    <section className="container">
      <div className="flex justify-center my-[60px] content__header">
        <h1 className="dark:text-white text-3xl text-center  font-semibold">
          Hi, its me!
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="content__body">
          <p className="dark:text-gray-300 mb-4 leading-8">
            I'm Ahmad Baihaki Nur, a passionate student pursuing a Bachelor's
            degree in Computer Science.
          </p>
          <p className="dark:text-gray-300 mb-4 leading-8">
            My true passion lies in transforming innovative ideas into reality
            through intuitive and polished software interfaces. I’m dedicated to
            crafting exceptional user experiences, robust architectures, and
            writing clean, maintainable code.
          </p>
          <p className="dark:text-gray-300 mb-4 leading-8">
            As a software engineer, sometimes i make a mini project, which you
            can explore{" "}
            <Link className="underline dark:text-gray-500" href={"/projects"}>
              here
            </Link>
            . im happy to share my knowledge and experience with others, and i
            love to learn from others as well. and i'm always open to new
            opportunities and challenges.
          </p>
          <p className="dark:text-gray-300 mb-4 leading-8">
            Beyond programming, I enjoy playing games, watching movies, and
            doing some sports.
          </p>
        </div>
      </div>
    </section>
  );
}
