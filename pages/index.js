import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Bookmark</title>
      </Head>

      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <Image
              src="/imgs/logo-bookmark.svg"
              alt="Bookmark"
              width="148"
              height="25"
            />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase">
              Login
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="text-2xl fas fa-bars"></i>
          </div>
        </nav>
      </header>

      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              A Simple Bookmark Manager
            </h2>
            <p className="text-bookmark-grey mb-6 text-lg text-center lg:text-left">
              A clean and simple interface to organize your favorite
              websites.Open a new browser tab and see load infinity. Try it fo
              free!
            </p>
            {/* Buttons */}
            <div className="flex justify-center flex-wrap gap-6">
              <button className="btn btn-purple hover:bg-yellow-400 hover:text-bookmark-white">
                Get it on Chrome
              </button>
              <button className="btn btn-white hover:bg-bookmark-red hover:text-bookmark-white">
                Get it on Firefox{" "}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <Image
              src="/imgs/hero-bg.png"
              alt="Bookmark"
              className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              width="579"
              height="386"
            />
          </div>
        </div>

        {/* Rounded rectagle */}
        <div
          className="hidden 
        md:block overflow-hidden 
        bg-bookmark-purple rounded-l-full 
        absolute h-80 w-2/6 top-32 right-0 
        lg:-bottom-28 lg:-right-30"
        ></div>
      </section>

      {/* Features */}
      <section className="bg-bookmark-white py-20 mt-20 lg:mt-60 ">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-6/12 mx-auto px-2">
          <h2 className="text-3xl text-center text-bookmark-purple">
            Features
          </h2>
          <p className="text-center text-bookmark-grey mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium quisquam debitis ipsam recusandae asperiores ullam
          </p>
        </div>

        {/* Features #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 lg:mb-0">
              <Image
                src="/imgs/illustration-features-tab-1.png"
                className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
                alt="Bookmark"
                width="579"
                height="386"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
              <h1 className="text-3xl text-bookmark-blue ">
                Bookmark in one click
              </h1>
              <p className="text-3xl text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                fugit?
              </p>
              <button className="btn btn-purple hover:bg-bookmark-white hover:text-bookmark-purple">
                More info
              </button>
            </div>
          </div>
          {/* Rounded rectagle */}
          <div
            className="
            hidden lg:block 
            overflow-hidden bg-bookmark-purple 
            rounded-r-full 
            absolute 
            h-80 
            w-2/4
            -bottom-24 
            -left-36"
          ></div>
        </div>

        {/* Features #2 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
              <h1 className="text-3xl text-bookmark-blue ">
               Intelligent Search
              </h1>
              <p className="text-3xl text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                fugit?
              </p>
              <button className="btn btn-purple hover:bg-bookmark-white hover:text-bookmark-purple">
                More info
              </button>
            </div>

            {/* Img */}
            <div className="flex flex-1 justify-center z-10 lg:mb-0">
              <Image
                src="/imgs/illustration-features-tab-2.png"
                className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
                alt="Bookmark"
                width="478"
                height="393"
              />
            </div>
          </div>

          {/* Rounded rectagle */}
          <div
              className="hidden 
              md:block overflow-hidden 
              bg-bookmark-purple rounded-l-full 
              absolute h-80 w-2/6 top-32 right-0 
              lg:-bottom-28 lg:-right-30"
          ></div>
        </div>
      </section>
    </>
  );
}
