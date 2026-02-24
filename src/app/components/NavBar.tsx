"use client";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-4 flex gap-x-8 px-12 py-4 rounded-[48px] backdrop-blur-md bg-[#172347]/80 z-50 shadow-lg min-w-150 max-w-[90vw] justify-center items-center">
      <Link
        href="/"
        title="HOME"
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white focus:bg-white/20 ${isActive("/") ? "bg-[#4DB5FF] text-black" : "bg-white/10"}`}
      >
        <HomeIcon sx={{ fontSize: 28, color: isActive("/") ? "#172347" : "#fff" }} />
      </Link>
      <Link
        href="/services"
        title="SERVICES"
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white focus:bg-white/20 ${isActive("/services") ? "bg-[#4DB5FF] text-black" : "bg-transparent"}`}
      >
        <DesignServicesOutlinedIcon sx={{ fontSize: 28, color: isActive("/services") ? "#172347" : "#fff" }} />
      </Link>
      <Link
        href="/projects"
        title="PROJECTS"
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white focus:bg-white/20 ${isActive("/projects") ? "bg-[#4DB5FF] text-black" : "bg-transparent"}`}
      >
        <BusinessCenterOutlinedIcon sx={{ fontSize: 28, color: isActive("/projects") ? "#172347" : "#fff" }} />
      </Link>
      <Link
        href="/about"
        title="ABOUT"
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white focus:bg-white/20 ${isActive("/about") ? "bg-[#4DB5FF] text-black" : "bg-transparent"}`}
      >
        <Person2OutlinedIcon sx={{ fontSize: 28, color: isActive("/about") ? "#172347" : "#fff" }} />
      </Link>
      <Link
        href="/contact"
        title="CONTACT"
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white focus:bg-white/20 ${isActive("/contact") ? "bg-[#4DB5FF] text-black" : "bg-transparent"}`}
      >
        <PhoneTwoToneIcon sx={{ fontSize: 28, color: isActive("/contact") ? "#172347" : "#fff" }} />
      </Link>
    </nav>
  );
}
