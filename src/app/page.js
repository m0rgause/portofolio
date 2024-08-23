import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <Navbar />
        {/* Konten utama portofolio */}
        <h1>Welcome to My Portfolio</h1>
        {/* Tambahkan konten lainnya di sini */}
      </main>
    </div>
  );
}
