import React from "react"
import imageWeb3 from "../assets/images/image-web-3-desktop.jpg"
import retroPics from "../assets/images/image-retro-pcs.jpg"
import gamingGrowth from "../assets/images/image-gaming-growth.jpg"
import topLapops from "../assets/images/image-top-laptops.jpg"

const Home = () => {
  return (
    <div>
      <main className="grid md:grid-cols-3 gap-4 m-3 font-inter">
        <section className="md:col-span-2">
          <img src={imageWeb3} alt="" width={1000} height="auto" />
          <div className="grid md:grid-cols-2 mt-4">
            <h2 className="text-6xl font-bold max-w-xs">
              The Bright Future of Web 3.0?
            </h2>
            <div>
              <p className="text-xl">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfillin its promise?
              </p>
              <button className=" bg-softRed text-white text-center uppercase py-2 px-6 my-4">
                Read more
              </button>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="bg-veryDarkBlue text-white p-4 text-xl ">
          <div className="flex flex-col space-y-9">
            <h2>New</h2>
            <div>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div>
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <hr />
            <div>
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </section>

        {/* Third Section
        <section className="col-span-3 flex justify-between">
          <div className="flex">
            <img src={retroPics} alt="" />
            <div>
              <p>01</p>
              <p>Reviving Retro PCs</p>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex">
            <img src={topLapops} alt="" />
            <div>
              <p>02</p>
              <p>Top 10 Laptops of 2022</p>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex">
            <img src={gamingGrowth} alt="" />
            <div>
              <p>03</p>
              <p>The Growth of Gaming</p>
              <p>How the pandemic has spread more opportunities.</p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}

export default Home
