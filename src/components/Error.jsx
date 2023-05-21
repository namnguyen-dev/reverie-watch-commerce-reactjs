const Error = ({ title }) => {
  return (
    <div>
      <h2 className="text-lg text-tertiary-900 text-center font-semibold ">
        There was an error... {title}
      </h2>
    </div>
  );
};

export default Error;
