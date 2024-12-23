import Head from "next/head";
import Image from "next/image";
import heroimg from "./images/heroimg.png";
import heroimg2 from "./images/heroimg2.png";
import Logo from "./images/Logo.png";

export default function Home() {
  return (
    <div className="min-h-fit">
      <Image
        src={Logo}
        alt="logo"
        style={{ display: "block", marginLeft: "5%", marginTop: "3%" }}
      />

      <header >
        <div className="container mx-auto  px-6 flex items-center justify-between">
          <p className="text-8xl Jomhuria-regular text-purple-600 ">
            LOOK
            <Image src={Logo} alt="logo" style={{ display: "inline" }} />
            <span className="text-teal-400 inline-block">LIKES</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 main">
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="Jomhuria-regular text-8xl text-gray-800">
              An ERP System to Run Your Entire Business
            </h1>
            <p className="mt-4 text-gray-600 poppins-regular text-3xl">
              Manage your business, from sales and invoicing, your books, your
              clientele and workforce to your inventory and operations.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <button className="poppins-extrabold text-2xl bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                Contact Us
              </button>
              <button className="poppins-extrabold text-2xl bg-white border-purple-600 border-solid border-4 rounded-lg text-purple-600 py-2 px-4 ">
                Watch Video
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div
              className="rounded-full overflow-hidden shadow-lg w-full max-w-[600px] hidden lg:block"
              style={{ height: "auto" }}
            >
              <Image
                src={heroimg}
                alt="Decorative"
                className="absolute right-0 top-0 z-10 w-1/2 h-screen"
                style={{maxHeight:"670px"}}
              />
              <Image
                src={heroimg2}
                alt="Decorative"
                className="absolute right-10 top-0 w-1/2 h-screen"
                style={{maxHeight:"670px"}}
              />
            </div>
          </div>
        </section>

  
        <section className="" style={{ marginTop: "10vh" }}>
          <div className="text-center">
            <p className="text-8xl Jomhuria-regular text-purple-600">
              LOOK
              <Image src={Logo} alt="logo" style={{ display: "inline" }} />
              <span className="text-teal-400">LIKES</span>
            </p>
            <p className="mt-4 text-gray-600 poppins-medium text-3xl">
              <span className="poppins-black text-3xl bg-gradient-to-r from-purple-500 to bg-teal-400 text-transparent bg-clip-text">
                LookLikes
              </span>{" "}
              is here to improve the way brands handle their merchandising,
              sales and promotion efforts by offering a field force management
              solution that optimizes every step of the process, every second of
              the day.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
