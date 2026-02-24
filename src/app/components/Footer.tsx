
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#172347]/80 flex items-center justify-between px-6 py-3 border-t border-[#23243a] mt-auto">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={48} height={48} className="rounded-full" />
        <span className="text-white text-sm font-semibold">Built by AethericSync.</span>
      </div>
      <span className="text-[#e0e0e0cc] text-xs">Copyright © 2026. All rights reserved</span>
    </footer>
  );
}
