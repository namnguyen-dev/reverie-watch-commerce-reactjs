import Stars from './Stars';

const SingleReview = () => {
  return (
    <blockquote>
      <header className="sm:items-center sm:flex">
        <Stars />

        <p className="mt-2 font-medium sm:ml-4 sm:mt-0">
          The best thing money can buy!
        </p>
      </header>

      <p className="mt-2 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus
        fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt
        cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?
      </p>

      <footer className="mt-4">
        <p className="text-xs text-gray-500">John Doe - 12th January, 2024</p>
      </footer>
    </blockquote>
  );
};

export default SingleReview;
