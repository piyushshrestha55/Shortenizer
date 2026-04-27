import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100  900"
});
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-5 items-center justify-center ">
          <p className={`text-2xl font-bold px-10 ${poppins.className}`}>
            The best URL Shortenizer that you can get in the market
          </p>
          <p className="text-center px-30">
            We are most simplified and easy to use URL Shortenizer as most of
            the online shortner will ask you to log in for the service and
            tracks your every moves in the application.
          </p>
          <div className="flex gap-3 justify-start">
            <Link href="/generate">
              <button className="text-white bg-linear-to-br from-purple-400 to-purple-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-base text-sm px-4 py-2 text-center leading-5 rounded-2xl font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="text-white bg-linear-to-br from-purple-400 to-purple-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-base text-sm px-4 py-2 text-center leading-5 rounded-2xl font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative ">
          <Image alt="Image of a vector" src={"/vector.jpg"} fill />
        </div>
      </section>
    </main>
  );
}
