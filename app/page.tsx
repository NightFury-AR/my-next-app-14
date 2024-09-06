import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[dvh] h-[dvw] flex flex-col items-center justify-center bg-white">
        <div className="text-purple-800 font-extrabold">HOME</div>
        <div className="flex flex-row space-x-3">
            <div className="hover:bg-slate-400"><Link href={'/docs'}>Docs</Link></div>
            <div className="hover:bg-slate-400"><Link href={'/product'}>Product</Link></div>
            <div className="hover:bg-slate-400"><Link href={'/dashboard'}>Dashboard</Link></div>
            <div className="hover:bg-slate-400"><Link href={'/gallery'}>Gallery</Link></div>
        </div>
    </main>
  );
}
