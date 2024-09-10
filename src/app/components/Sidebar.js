import Image from "next/image";

const Sidebar = () => {
  return (
    <div
      className="w-80 h-[96%] bg-slate-700 text-white flex flex-col items-center pt-10 px-14 rounded-[24px] m-5"
      id="sidebar"
    >
      <Image
        src="/assets/images/profile.jpg"
        alt="Your Name"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h1 className="text-2xl font-semibold mt-4">Ahmad Baihaki Nur</h1>
      <p className="mt-2">Software Engineer</p>

      <div className="mt-8 space-y-4">
        <div>
          <h2 className="text-lg font-medium">Contact</h2>
          <p>Email: kikiaf193@gmail.com</p>
          <p>Whatsapp: +62 858 8186 1075</p>
        </div>

        <div>
          <h2 className="text-lg font-medium">Location</h2>
          <p>Jakarta Barat</p>
        </div>

        <div>
          <h2 className="text-lg font-medium">Social Links</h2>
          <a href="https://linkedin.com/in/yourprofile" className="block">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" className="block">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
