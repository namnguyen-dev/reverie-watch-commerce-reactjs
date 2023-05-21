import promo1 from '../assets/img/promo-1.jpg';
import promo2 from '../assets/img/promo-2.jpg';
import promo3 from '../assets/img/promo-3.jpg';
import promo4 from '../assets/img/promo-4.jpg';
import promo5 from '../assets/img/promo-5.jpg';
import promo6 from '../assets/img/promo-6.jpg';
import promo7 from '../assets/img/promo-7.jpg';

const Promo = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48  py-24 ">
        <div className="relative section-center sm:static">
          <div className="sm:max-w-lg">
            <h2 className="text-3xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              OUR WATCHES ARE CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL.
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Explore the collection of prestigious, high-precision timepieces.
              We offers a wide assortment of watches to suit any wrist. Discover
              the broad selection of watches to find a perfect combination of
              style and functionality.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src={promo1}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={promo2}
                          alt=""
                          className="hidden lg:flex w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={promo3}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={promo4}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={promo5}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={promo6}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src={promo7}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
