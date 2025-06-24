import React from "react";
import Link from "next/link";
import PageWrapper from "../../../components/Wrappers/PageWrapper";

const ProjectXPage: React.FC = () => {
  return (
    <>
      <PageWrapper hasNavbar>
        <div className="container mx-auto px-4 py-8">
          <Link href="/experiences" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Experiences
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-4">Project X</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer</h2>
          <div className="prose max-w-none">
            {/* Experience details will go here */}
            <p className="text-gray-500">Experience content will be added here...</p>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default ProjectXPage;

