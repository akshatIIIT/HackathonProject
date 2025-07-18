import React from 'react';

const SolutionWriteUps = () => {
  const solutions = [
    {
      id: 1,
      title: 'Unified Collaboration Platform',
      description: 'Trending Project · 420 likes',
      details: 'Explore how our unified platform enhances collaboration among teams with integrated tools and real-time communication features.',
      borderColor: 'border-teal-500',
      gradient: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    },
    {
      id: 2,
      title: 'Advanced Data Insights',
      description: 'Popular Choice · 570 likes',
      details: 'This project showcases advanced analytics and data visualization techniques to derive actionable insights from complex datasets.',
      borderColor: 'border-indigo-500',
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Interdisciplinary Innovation Hub',
      description: 'Top Pick · 980 likes',
      details: 'A collaborative space where professionals from various fields come together to innovate and solve complex challenges.',
      borderColor: 'border-yellow-500',
      gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    },
    {
      id: 4,
      title: 'Future-Ready Tech Solutions',
      description: 'Featured Innovation · 315 likes',
      details: 'Showcasing cutting-edge technology solutions designed to address future challenges and opportunities in various industries.',
      borderColor: 'border-green-500',
      gradient: 'bg-gradient-to-r from-green-400 to-teal-500',
    },
  ];

  return (
    <div className="min-h-[50vh] bg-white py-10 px-4 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center justify-center">
          <span className="mr-2 text-blue-500">🚀</span> Highlighted Projects
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Discover groundbreaking projects that push the boundaries of innovation and collaboration.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-12 h-12 rounded-full ${solution.borderColor} overflow-hidden`}
              >
                <div className={`w-full h-full ${solution.gradient}`}></div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{solution.details}</p>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="max-w-6xl mx-auto mt-10 text-right">
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
          → Explore More
        </a>
      </div>
    </div>
  );
};

export default SolutionWriteUps;
