import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-64 h-[97%] bg-gray-800 text-white flex flex-col items-center p-4 rounded-lg m-3">
      <Image
        src="/assets/images/profile.jpg"
        alt="Your Name"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h1 className="text-2xl font-semibold mt-4">Your Name</h1>
      <p className="mt-2">Web Developer</p>

      <div className="mt-8 space-y-4">
        <div>
          <h2 className="text-lg font-medium">Contact</h2>
          <p>Email: youremail@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>

        <div>
          <h2 className="text-lg font-medium">Location</h2>
          <p>Your City, Country</p>
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
