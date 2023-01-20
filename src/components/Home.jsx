import { useState } from "react"
import imageWeb3 from "../assets/images/image-web-3-desktop.jpg"
import imageWeb3Phn from "../assets/images/image-web-3-mobile.jpg"
import retroPics from "../assets/images/image-retro-pcs.jpg"
import gamingGrowth from "../assets/images/image-gaming-growth.jpg"
import topLapops from "../assets/images/image-top-laptops.jpg"

const Home = ({ toggle }) => {
  return (
    <main className="grid md:grid-cols-3 gap-4 m-6 font-inter">
      <section className="md:col-span-2">
        <img src={imageWeb3} alt="" className="h-80 md:h-auto" />
        <div className="grid md:grid-cols-2 mt-4">
          <h2 className="max-w-sm my-3 text-5xl font-bold md:text-6xl mt-6 md:max-w-xs">
            The Bright Future of Web 3.0?
          </h2>
          <div className="mt-6">
            <p className="text-xl text-darkGrayishBlue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfillin its promise?
            </p>
            <button className=" bg-softRed hover:bg-veryDarkBlue text-white font-bold text-center uppercase py-3 px-10 mt-6">
              Read more
            </button>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="bg-veryDarkBlue text-white p-4 sm:text-md md:text-xl">
        <h2 className="text-softOrange text-4xl font-bold mt-3 mb-6">New</h2>
        <div className="flex flex-col space-y-9">
          <div className="space-y-1">
            <h3 className="font-bold text-2xl hover:text-softOrange cursor-pointer">
              Hydrogen VS Electric Cars
            </h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className="space-y-1">
            <h3 className="font-bold text-2xl hover:text-softOrange cursor-pointer">
              The Downsides of AI Artistry
            </h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div className="space-y-1">
            <h3 className="font-bold text-2xl hover:text-softOrange cursor-pointer">
              Is VC Funding Drying Up?
            </h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="md:col-span-3 mt-6">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex gap-4">
            <img src={retroPics} width={120} height={"auto"} alt="" />
            <div className="">
              <h3 className="text-grayishBlue text-4xl font-bold ">01</h3>
              <p className="text-2xl font-bold mt-3 md:text-xl cursor-pointer hover:text-softRed">
                Reviving Retro PCs
              </p>
              <p className="text-darkGrayishBlue mt-4">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={topLapops} width={120} height="auto" alt="" />
            <div className="">
              <h3 className="text-grayishBlue text-4xl font-bold ">02</h3>
              <p className="text-2xl font-bold mt-3 md:text-xl cursor-pointer hover:text-softRed">
                Top 10 Laptops of 2022
              </p>
              <p className="text-darkGrayishBlue mt-4">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={gamingGrowth} width={120} height="auto" alt="" />
            <div className="">
              <h3 className="text-grayishBlue text-4xl font-bold ">03</h3>
              <p className="text-2xl font-bold mt-3 md:text-xl cursor-pointer hover:text-softRed">
                The Growth of Gaming
              </p>
              <p className="text-darkGrayishBlue mt-4">
                How the pandemic has spread more opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
