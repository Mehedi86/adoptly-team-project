"use client"
import Link from "next/link";
const btnStyle = "text-white font-medium bg-[#E76F51] px-4 py-1 rounded";

const UseBanner = ({title}) => {
    return (
        <section
            className="relative w-full h-[300px] bg-center bg-cover flex items-center"
            style={{
                backgroundImage:
                    "url('/about/hero.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0  bg-black/40"></div>
            <div className="relative z-10 container mx-auto px-4">
                <h1 className=" text-4xl md:text-5xl font-extrabold text-white mb-4">
                    {title}
                </h1>
                <nav className="flex flex-wrap gap-2 items-center text-sm space-x-2 ">
                    <Link href="/" className={btnStyle}>
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/about" className={btnStyle}>
                        About
                    </Link>
                    <span>/</span>
                    <Link href="/contact" className={btnStyle}>
                        <span className={btnStyle}>contact us</span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog" className={btnStyle}>
                        <span className={btnStyle}>Blog</span>
                    </Link>
                </nav>
            </div>
        </section>
    );
};

export default UseBanner;