import React from "react";
import Link from "next/link";
import PageWrapper from "../components/Wrappers/PageWrapper";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageWrapper hasNavbar>
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Go Home
              </Link>
              <div className="flex justify-center space-x-4 text-sm">
                <Link href="/about" className="text-primary hover:underline">
                  About
                </Link>
                <Link href="/experiences" className="text-primary hover:underline">
                  Experiences
                </Link>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default NotFoundPage;

