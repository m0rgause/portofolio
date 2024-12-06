import Icon from "@mdi/react";
import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-lg">You can reach me at:</p>
      </div>
      <div className="cards max-w-[300px] mx-auto">
        <div className="contact | flex items-center gap-3 mb-5">
          {/* <div className="i-mdi-gmail w-6 h-6 bg-red-500"></div> */}
          <Icon path={mdiEmail} size={1} color="#D93025" />
          <a href="baihaki.dev@gmail.com">baihaki.dev@gmail.com</a>
        </div>
        <div className="contact | flex items-center gap-3 mb-5">
          {/* <div className="i-mdi-telegram w-6 h-6 bg-[#2294cf]"></div> */}
          <Icon path={mdiGithub} size={1} color="#ffffff" />
          <a href="https://github.com/m0rgause" target="_blank">
            @m0rgause
          </a>
        </div>
        <div className="contact | flex items-center gap-3 mb-5">
          {/* <div className="i-mdi-linkedin w-6 h-6 bg-blue-500"></div> */}
          <Icon path={mdiLinkedin} size={1} color="#0077B5" />
          <a
            href="https://www.linkedin.com/in/ahmad-baihaki-nur-257803216"
            target="_blank"
          >
            Ahmad Baihaki Nur
          </a>
        </div>
      </div>
    </>
  );
}
