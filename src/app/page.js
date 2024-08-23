"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {isSidebarOpen && <Sidebar />}
      <main className="flex-grow">
        <Navbar />
        <div className="bg-slate-700 text-white py-5 px-10 flex justify-between items-center mr-5 rounded-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          sem in tortor pretium cursus. Nulla arcu ex, suscipit quis velit a,
          posuere molestie nibh. Nullam nec ex id augue imperdiet aliquam a eget
          dolor. Pellentesque dictum ipsum mi, sit amet porttitor ligula
          vestibulum sit amet. Sed vehicula tincidunt dui, vitae imperdiet justo
          sagittis vitae. Nulla facilisi. Duis eu lacus interdum, gravida libero
          id, auctor est. Sed congue erat turpis, et condimentum nulla
          vestibulum sit amet. Maecenas eleifend et mi vitae condimentum.
          Aliquam vel purus aliquam risus varius porttitor. Etiam posuere
          scelerisque fermentum. Aliquam id magna sem. Pellentesque ac ante
          vitae lacus aliquam volutpat. Donec sed tellus id purus efficitur
          finibus. Sed molestie nisi sed urna rhoncus egestas. Proin augue
          nulla, tempor vel eros non, sodales faucibus nulla. Etiam dignissim
          venenatis leo, id egestas eros maximus eget. Quisque suscipit interdum
          nisl ac vehicula. Maecenas ultricies, leo vitae pretium tincidunt,
          tellus nibh auctor tellus, et pellentesque libero nulla a erat. Mauris
          nec efficitur lacus. Donec pharetra, arcu non dignissim dapibus, mi
          lectus finibus augue, et convallis nulla nulla a orci. Aliquam in
          dolor justo. Nullam congue arcu nulla, eu sagittis erat sagittis sed.
          Sed auctor finibus ipsum non ornare. Nunc luctus commodo turpis, ac
          dictum purus rutrum id. Nulla pellentesque venenatis nisi eu aliquam.
          Nulla diam massa, vestibulum non porttitor vitae, commodo vel dui.
          Curabitur blandit lorem quis arcu fermentum maximus. Praesent pretium
          consectetur ligula, et placerat massa tincidunt ut. Donec eget
          pulvinar leo. Curabitur vitae nisl varius, tempor enim ac, consequat
          libero. Fusce rutrum porttitor congue. Pellentesque imperdiet nisl at
          turpis lacinia efficitur. Aliquam erat volutpat. Phasellus varius elit
          in tempor interdum. Mauris quis imperdiet sem. Morbi imperdiet velit
          et nisl faucibus lobortis. Mauris consequat, odio in aliquam
          ultricies, urna sapien ullamcorper justo, ac ullamcorper libero nisl
          eget ex. Nulla sit amet fringilla justo. Etiam imperdiet, massa id
          tristique dignissim, velit diam tempus neque, nec accumsan lorem erat
          ac mauris. Proin vulputate ligula nisl, quis ornare ligula tempus
          eget. Sed vulputate lacinia pulvinar. Aenean et luctus velit, in
          consectetur nunc. Nullam finibus condimentum massa. Integer orci elit,
          hendrerit vitae iaculis vel, suscipit vel nunc. Mauris ligula neque,
          auctor ut commodo in, posuere in neque. Curabitur id diam nibh. In
          maximus enim at orci viverra facilisis. Fusce volutpat faucibus quam,
          eu tincidunt lorem fringilla a. In mattis enim id leo ultrices, sed
          pharetra urna interdum. Nunc dignissim non libero vel vulputate.
          Quisque at consequat velit. Nulla feugiat sem sed quam accumsan, ac
          volutpat velit placerat. Donec et mollis leo. Proin at neque
          consequat, eleifend quam quis, mattis tellus. Nulla posuere neque
          nunc, quis molestie ante luctus id. Proin sit amet sapien nisl. In
          faucibus enim augue, a accumsan lectus sodales non. Pellentesque
          mattis lacinia erat ut rutrum. Suspendisse ultricies tincidunt purus,
          et aliquam arcu lacinia ac. Pellentesque euismod risus felis, et
          pulvinar nisl tincidunt eu. Integer eu tincidunt diam, sit amet semper
          sem. Nam vel pulvinar felis. Curabitur eu cursus purus. Pellentesque
          est est, viverra sed ornare vitae, lobortis sed lacus. Phasellus sed
          erat non urna luctus vehicula vel vitae elit. Maecenas non elit eros.
          Morbi volutpat neque quam, eget cursus lectus volutpat non.
          Suspendisse diam eros, pellentesque id lacus ut, pretium vestibulum
          leo. Proin sed enim a mi pretium auctor at id ex. Ut justo erat,
          scelerisque nec risus at, volutpat cursus diam.
        </div>
      </main>
    </div>
  );
}
