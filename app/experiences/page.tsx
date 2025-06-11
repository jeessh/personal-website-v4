import React from "react";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import Navbar from "../../components/Navbar";

const ExperiencesPage: React.FC = () => {
  const experiences = [
    {
      id: 'company-a',
      title: 'Company A',
      role: 'Software Engineer',
      period: '2023 - Present'
    },
    {
      id: 'company-b',
      title: 'Company B',
      role: 'Frontend Developer',
      period: '2022 - 2023'
    },
    {
      id: 'project-x',
      title: 'Project X',
      role: 'Full Stack Developer',
      period: '2021 - 2022'
    }
  ];

  return (
    <>
      <Navbar />
      <PageWrapper hasNavbar>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Experiences</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <Link
                key={experience.id}
                href={`/experiences/${experience.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {experience.title}
                </h2>
                <p className="text-gray-600 mb-2">{experience.role}</p>
                <p className="text-sm text-gray-500">{experience.period}</p>
              </Link>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default ExperiencesPage;

