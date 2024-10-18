import React from 'react';

const Landing: React.FC = () => {
  return (
    <div>
      <div id="home" className="container mx-auto first-section py-5 xl:px-40">
        <div className="flex flex-col md:flex-row justify-start items-start pt-5 xl:space-x-16 flex-nowrap">
          
          {/* Profile Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 text-center profile-section mb-10 sm:mb-0 mr-4">
            <img
              src="https://placehold.co/400x400"
              alt="John Doe"
              className="w-64 h-64 object-cover rounded-full mx-auto"
            />
            <h1 className="mt-2 text-3xl font-light">John Doe</h1>
            <p className="text-gray-500 text-lg font-light">
              Senior Software Engineer
              <br />
              Silicon Valley, CA
            </p>
            <div className="mt-4">
              <a href="https://github.com/google" className="text-2xl mx-2 text-gray-600 hover:text-gray-600">
                <i className="fab fa-github hover:scale-110"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/google/"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="fab fa-linkedin hover:scale-110"></i>
              </a>
              <a
                href="/CV-JohnDoe.pdf" // add your CV file to the public folder
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="ai ai-cv hover:scale-110"></i>
              </a>
              <a
                href="mailto:johndoe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
              >
                <i className="fas fa-envelope hover:scale-110"></i>
              </a>
            </div>
          </div>

          {/* Biography Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex-grow">
            <h2 className="text-xl md:text-2xl font-light">Biography</h2>
            <p className="text-sm sm:text-base md:text-lg mt-2 font-light">
              John Doe is a Senior Software Engineer with over 10 years of experience in building scalable web and mobile applications. He has a passion for developing high-performance systems, solving complex problems, and working with cutting-edge technologies like machine learning, cloud computing, and microservices architectures. John has worked at several top tech companies in Silicon Valley and is recognized for his contributions to open-source software.
            </p>

            {/* Sections for Education and Accomplishments */}
            <div className="flex flex-wrap mt-8 space-y-8 md:space-y-0">
              {/* Education Section */}
              <div className="w-full md:w-1/2 pr-5 mb-4">
                <h3 className="text-lg md:text-xl font-light">Education</h3>
                <hr className="my-2" />
                <ul className="list-none mt-2 space-y-2">
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-graduation-cap text-gray-600"></i> MSc. in Computer Science, 2010 - 2012
                    <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">Stanford University</p>
                    <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">GPA: 3.9 / 4.0</p>
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-graduation-cap text-gray-600"></i> BSc. in Electrical Engineering, 2006 - 2010
                    <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">University of California, Berkeley</p>
                    <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">GPA: 3.8 / 4.0</p>
                  </li>
                </ul>
              </div>

              {/* Accomplishments Section */}
              <div className="w-full md:w-1/2 pr-5 mb-4">
                <h3 className="text-lg md:text-xl font-light">Accomplishments</h3>
                <hr className="my-2" />
                <ul className="list-none mt-2 space-y-2">
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Google Developer Expert for Cloud (2018)
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Lead Architect for XYZ Startup Acquisition (2019)
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Speaker at Global Tech Summit (2020)
                  </li>
                  <li className="text-xs md:text-sm">
                    <i className="fas fa-trophy text-gray-600"></i> Contributor to Popular Open-Source Projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
