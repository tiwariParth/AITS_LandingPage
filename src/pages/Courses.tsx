import NavBar from "../components/NavBar";

const Course = () => {
  return (
    <div>
      <NavBar />
      <section className="h-screen mt-[4rem]">
        <div className="flex flex-wrap justify-center h-screen ">
          <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Course 1</div>
              <p className="text-gray-700 text-base">
                Description for Course 1
              </p>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Course 2</div>
              <p className="text-gray-700 text-base">
                Description for Course 2
              </p>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Course 3</div>
              <p className="text-gray-700 text-base">
                Description for Course 3
              </p>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Course 4</div>
              <p className="text-gray-700 text-base">
                Description for Course 4
              </p>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Course 5</div>
              <p className="text-gray-700 text-base">
                Description for Course 5
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
