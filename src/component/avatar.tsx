export default function Avatar() {
  return (
    <>
      <section className="pt-20 pb-20">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-blueGray-700">
              Here are our heroes
            </h2>

            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDC lead scientist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* CARD 1 */}
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
            <div className="px-6">
              <img
                alt="Ryan"
                src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                className="shadow-lg rounded-full mx-auto w-40 h-40 object-cover"
              />

              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold text-blueGray-700">
                  Ryan Tompson
                </h5>

                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Web Developer
                </p>

                <div className="mt-6 flex justify-center gap-2">
                  <button className="bg-sky-400 text-white w-8 h-8 rounded-full">
                    T
                  </button>

                  <button className="bg-blue-600 text-white w-8 h-8 rounded-full">
                    F
                  </button>

                  <button className="bg-pink-500 text-white w-8 h-8 rounded-full">
                    D
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
            <div className="px-6">
              <img
                alt="Romina"
                src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                className="shadow-lg rounded-full mx-auto w-40 h-40 object-cover"
              />

              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold text-blueGray-700">
                  Romina Hadid
                </h5>

                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Marketing Specialist
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
            <div className="px-6">
              <img
                alt="Alexa"
                src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                className="shadow-lg rounded-full mx-auto w-40 h-40 object-cover"
              />

              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold text-blueGray-700">
                  Alexa Smith
                </h5>

                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
            <div className="px-6">
              <img
                alt="Jenna"
                src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                className="shadow-lg rounded-full mx-auto w-40 h-40 object-cover"
              />

              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold text-blueGray-700">
                  Jenna Kardi
                </h5>

                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Founder and CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative pt-8 pb-6 mt-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with Tailwind CSS.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
