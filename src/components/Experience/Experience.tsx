import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg"
    >
      <div className="container py-4">
        <div className="flex flex-col lg:flex-row first-letter">
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl font-light ml-5 pb-4">Experience</h2>
          </div>

          <div className="w-full lg:w-3/4 relative">
            <ExperienceCard
              first
              title="Software Engineer"
              company="Company A"
              location="Location A"
              dateRange="Present"
              description={[
                "Developed models and deployed solutions using modern tech stacks for hardware design simulations.",
                "Created a CLI tool to automate data processing and project management.",
                "Built and deployed an internal math package via RESTful API, along with automated workflows using CI/CD pipelines."
              ]}
              logoUrl="https://placeholder.com/company-a-logo.png"
              websiteUrl="http://company-a.com"
            />

            {/* Company B Experience */}
            <ExperienceCard
              title="Machine Learning Engineer"
              company="Company B"
              location="Location B"
              dateRange="July 2024 - Present"
              description={[
                "Designed predictive models for various applications, with a focus on neural networks.",
                "Created tools for automating training jobs and managing resources.",
                "Implemented APIs for mathematical models, with full DevOps integration."
              ]}
              logoUrl="https://placeholder.com/company-b-logo.png"
              websiteUrl="https://www.company-b.com"
            />

            {/* Company C Experience */}
            <ExperienceCard
              title="Algorithm Developer Intern"
              company="Company C"
              location="Location C"
              dateRange="August 2023 – January 2024"
              description={[
                "Developed machine learning models for battery state estimation.",
                "Deployed models with FastAPI and Redis, and integrated unit testing in the CI pipeline.",
                "Created dashboards and APIs to streamline data acquisition and analysis across research teams."
              ]}
              logoUrl="https://placeholder.com/company-c-logo.png"
              websiteUrl="https://www.company-c.com"
            />

            {/* Company D Experience */}
            <ExperienceCard
              last
              title="Junior Data Scientist"
              company="Company D"
              location="Location D"
              dateRange="April 2022 – September 2022"
              description={[
                "Automated review systems to improve project management processes, saving significant time.",
                "Created dashboards to visualize trends across various project data points.",
                "Worked with large datasets in project management and financial sectors."
              ]}
              logoUrl="https://placeholder.com/company-d-logo.png"
              websiteUrl="https://www.company-d.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
