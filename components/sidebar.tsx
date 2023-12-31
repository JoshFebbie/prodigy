"use client";

import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-[#ff52e2]",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-[#a648f3]",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-[#2efcff]",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-[#effd27]",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex
            items-center pl-3 mb-14"
        >
          <div className="relative w-24 h-16 mr-4">
            <Image fill alt="Logo" src="/Logo.png" />
          </div>
          <h1
            className={cn(
              "text-2xl font-bold text-[#3de934]",
              orbitron.className
            )}
          >
            Prodigy.Ai
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", orbitron.className,
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

//Original Code-------------------------------//

// "use client" is a special comment that tells Vercel to only run this code on the client side.
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Exo } from "next/font/google";
// import { cn } from "@/lib/utils";
// import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react"
// import { usePathname } from "next/navigation";

// const exo = Exo ({
//   weight: "500",
//   subsets: ["latin"],
// });

// const routes = [
//   {
//   lable: "Dashboard",
//   icon: LayoutDashboard,
//   href: "/dashboard",
//   color: "text-[#00ff6f]"
//   },
//   {
//   lable: "Conversation",
//   icon: MessageSquare,
//   href: "/conversation",
//   color: "text-[#ff6cab]"
//   },
//   {
//   lable: "Image Generation",
//   icon: ImageIcon,
//   href: "/image",
//   color: "text-[#BA972F]"
//   },
//   {
//   lable: "Video Generation",
//   icon: VideoIcon,
//   href: "/video",
//   color: "text-[#10498a]"
//   },
//   {
//   lable: "Music Generation",
//   icon: Music,
//   href: "/music",
//   color: "text-[#7a108a]"
//   },
//   {
//   lable: "Code Generation",
//   icon: Code,
//   href: "/code",
//   color: "text-[#3aa4e6]"
//   },
//   {
//   lable: "Settings",
//   icon: Settings,
//   href: "/settings",
//   color: "text-white"
//   },
// ]

// const Sidebar = () => {
// //usePathname is a custom hook that returns the current pathname.
//   const pathname = usePathname();
//   return (
//     <div className="space-y-4 py-4 flex flex-col h-full Sbg-[#3058ae] text-white font">
//       <div className="px-3  flex-1">
//         <Link
//           href="/dashboard"
//           className="flex
//              items-center  mb-14"
//         >
//           <div className="relative w-24 h-16 mr-4">
//             <Image
//               fill
//               alt="Logo"
//               src="/Logo.png" />
//           </div>
//           <h1 className={cn("text-2xl font-bold text-[#00ff6f]", exo.className)}>
//             PRODIGY-AI
//           </h1>
//         </Link>
//         <div className="space-y-1">
//             {routes.map((route) => (
//               <Link
//                 href={route.href}
//                 key={route.href}
//                 className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
//                 pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
//                 >
//                 <div className="flex items-center flex-1">
//                   <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
//                   {route.lable}
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;
