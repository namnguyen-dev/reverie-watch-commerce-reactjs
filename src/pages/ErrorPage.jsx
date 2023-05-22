import { Link } from 'react-router-dom';
import notFoundImg from '../assets/404.svg';

const ErrorPage = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center bg-tertiary-50 ">
      <div className="section-center py-12  flex flex-col-reverse lg:flex-row justify-between items-center ">
        <div className="w-full   text-center lg:text-left ">
          <h1 className="font-light  text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-tertiary-700">
            Sorry, this page isn't available
          </h1>
          <Link to="/">
            <button className="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-secondary-400 border-2 text-lg border-gray-700 bg-secondary-300 focus:outline-none">
              Go back home
            </button>
          </Link>
        </div>
        <div className="w-full max-w-xl lg:max-w-4xl ">
          <img src={notFoundImg} alt="not found" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
