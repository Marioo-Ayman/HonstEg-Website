import HH from "@/assets/HH.png";
import HR from "@/assets/HR.png";
import HFB from "@/assets/HFB.png";
import Bg4 from "@/assets/bg4.jpg";
import Trading from "@/assets/OptionsTrading.jpg";
import BM from "@/assets/business-man.jpg";

export default function Companies() {
  return (
    <div className="overflow-hidden">
    <section className="w-full ">
        <div className=" pt-[15%] flex items-center justify-center overflow-hidden relative">
            <img
            src={Trading}
            alt="Background"
            className="absolute top-0 left-0 w-full -z-10 blur-xs transform scale-x-105"
            />
            <div className="absolute inset-0 bg-stone-950 opacity-60"></div>
            <div className="relative text-start text-white px-4 md:-top-20 md:-left-20 ">
                <p className="text-2xl md:text-4xl font-medium text-white mb-8">
                    Our Companies
                </p>
                <p className="text-md md:text-2xl font-light text-white mb-8 w-2/3">
                    Our Group of Companies and Their Investment Sectors
                </p>
            </div>
        </div>
    </section>
    <section className="w-full py-16 px-4 bg-gray-400/20 relative flex justify-center items-center ">
        <div  className="flex flex-col md:flex-row w-11/12  justify-center items-center">
            <div className=" p-3 md:p-5 w-3/4 flex flex-col justify-center gap-4">
                <h2 className="text-xl md:w-1/2 md:text-[30px] font-semibold">A number of companies operating across various sectors</h2>
                <p className=" text-md  text-gray-700  ">
                    Honest Egy Group consists of three companies operating in different sectors:
                    Honest Homes, specialized in real estate investment; 
                    Finance Broker, also in the real estate field; and HR Academy, 
                    focused on training and professional development.
                </p>
             </div>
            <div>
                <img src={BM} alt="algorithm trading pic" className="scale-70 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:scale-90" />
            </div>
        </div>
    </section>
    <section className="w-full py-16 px-4 bg-linear-to-b from-slate-50/20 to-white relative ">     
      <div className="max-w-6xl mx-auto space-y-10 ">
        <img src={Bg4} alt="" className="absolute top-0 left-0 w-full h-full -z-1 opacity-3 " />
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Know more about Our Companies
          </h2>
        </div>
        {/* HFB Companies Container */}
        <div className="space-y-15">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-9">
            {/* Logo Section */}
            <div className="shrink-0 w-full md:w-1/3 flex justify-center ">
              <div className="w-48 h-48 flex items-center justify-center">
                <img
                  src={HFB}
                  alt="Honest Financial Brokerage Logo"
                  className="max-w-full max-h-full p-4 object-contain scale-150"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full md:w-3/4 ">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Honest Financial Brokerage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                At <strong>Honest Financial Brokerage</strong>, we are committed
                to providing a secure, efficient, and reliable trading
                environment that meets the evolving needs of our clients —
                driven by our dedication to innovation and transparency.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We have established ourselves as the preferred choice for
                securities trading in the <strong>United Arab Emirates</strong>{" "}
                ,offering our investors financial solutions focused on{" "}
                <strong>growth and sustainability</strong>.
              </p>
              <h3>Summery : </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                This message highlights Honest Financial Brokerage’s commitment
                to delivering a trusted and safe trading environment. It
                emphasizes the company’s innovation and transparency in service
                delivery, positioning it as a leading choice for securities
                trading in the UAE. The statement also underlines the company’s
                focus on offering financial solutions that foster sustainable
                growth for its investors
              </p>
            </div>
          </div>
        </div>
        {/* HH Companies Container */}
        <div className="space-y-15">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                {/* Content Section */}
                <div className="flex-1 w-full md:w-2/3 ">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        HONEST HOMES
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        <strong>Honest Homes Egypt</strong> is a real estate company
                        focused on providing reliable and transparent property
                        solutions. The company emphasizes{" "}
                        <strong>integrity, professionalism,</strong>
                        and <strong>customer satisfaction</strong> in helping clients
                        buy, sell, or lease properties across Egypt.
                    </p>
                    {/* Bullet Points */}
                    <ul className="space-y-3 ml-2">
                        <li className="flex items-start gap-3 text-gray-700">
                        <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                        <span className="font-semibold">Mission :</span>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To deliver honest and trustworthy real estate services with
                            a customer-first approach.
                        </p>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                        <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                        <span className="font-semibold">Values :</span>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Integrity, transparency, and professionalism.
                        </p>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                        <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                        <span className="font-semibold">Services :</span>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {" "}
                            Property sales, rentals, and investment opportunities in
                            Egypt.
                        </p>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                        <span className="shrink-0 w-2 h-2 rounded-full bg-gray-700 mt-2" />
                        <span className="font-semibold">Team:</span>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A group of experienced professionals dedicated to guiding
                            clients throughout the real estate investment process.
                        </p>
                        </li>
                    </ul>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        The company aims to stand out in the market by prioritizing
                        ethical business practices and building long-term relationships
                        with its clients
                    </p>
                </div>
                {/* Logo Section */}
                <div className="shrink-0 w-full md:w-1/3 flex justify-center ">
                <div className="w-48 h-48  flex items-center justify-center ">
                    <img
                    src={HH}
                    alt="HONEST HOMES Logo"
                    className="max-w-full max-h-full p-4 object-contain scale-250"
                    />
                </div>
            </div>
          </div>
        </div>
        {/*HR Companies Container */}
        <div className="space-y-15">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-9">
            {/* Logo Section */}
            <div className="shrink-0 w-full md:w-1/3 flex justify-center ">
              <div className="w-48 h-48 flex items-center justify-center">
                <img
                  src={HR}
                  alt="HR ACADEMY Logo"
                  className="max-w-full max-h-full p-4 object-contain scale-200"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full md:w-3/4 ">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                HR ACADEMY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We equip individuals and organizations with the knowledge and practical skills in business, trading,
                marketing, and technology — empowering them to achieve lasting success in a fast-changing world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
