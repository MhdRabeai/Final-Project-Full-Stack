const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div className="w-full px-4 md-px-0 md:w-1/2 xl:w-1/4 transition-transform transform hover:-translate-y-2 duration-300">
      <div className="mb-10 w-full border border-gray-200 dark:border-sky-100 rounded-lg shadow-lg">
        <div className="mb-8 overflow-hidden rounded-t-lg">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="p-5">
          {date && (
            <span className="mb-5 inline-block rounded bg-[#4F9451] px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/#"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-[#4F9451] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
          <a
            href="/"
            className="bg-[#4F9451] dark:bg-dark-2 border-[#4F9451] dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color mt-5"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
