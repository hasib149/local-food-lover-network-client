import React from "react";

const TopFood = () => {
  return (
    <section className="bg-green-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Meet Our Top Food Critics
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow text-center hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            alt="Reviewer 1"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
          />
          <h3 className="text-xl font-semibold text-green-700">Ayesha Karim</h3>
          <p className="text-gray-600 text-sm mb-3">Food Blogger & Vlogger</p>
          <p className="text-gray-500">
            Ayesha loves exploring street foods and reviewing authentic deshi
            cuisine.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow text-center hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww"
            alt="Reviewer 2"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
          />
          <h3 className="text-xl font-semibold text-green-700">Rafiul Hasan</h3>
          <p className="text-gray-600 text-sm mb-3">
            Professional Chef & Critic
          </p>
          <p className="text-gray-500">
            Known for his sharp taste sense and honest reviews of fine dining
            restaurants.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow text-center hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Reviewer 3"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
          />
          <h3 className="text-xl font-semibold text-green-700">Nusrat Jahan</h3>
          <p className="text-gray-600 text-sm mb-3">Travel & Food Reviewer</p>
          <p className="text-gray-500">
            Nusrat travels across Bangladesh to uncover hidden food gems and
            honest reviews.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopFood;
