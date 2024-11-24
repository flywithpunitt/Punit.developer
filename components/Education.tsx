import React from 'react';

interface EducationItem {
  years: string;
  degree: string;
  institution: string;
  details?: string;
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      years: "2023-2026",
      degree: "Bachelor of Commerce honor's",
      institution: "SCHOOL OF OPEN LEARNING (SOL) AT DELHI UNIVERSITY",
      details: "6.76 SGPA"
    },
    {
      years: "2021-2022",
      degree: "Higher Secondary School",
      institution: "G. M. N. R. T INT COLLEGE",
      details: "Grade: First class distinction."
    }
  ];

  return (
    <div  id='education' className="w-full  text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="bg-grid-small-blue-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <span className="text-white-100 text-xl font-bold">
                {item.years}
              </span>
              
              <h3 className="text-2xl font-bold mt-4 mb-3">
                {item.degree}
              </h3>
              
              <p className="text-gray-400 uppercase text-sm tracking-wider mb-2">
                {item.institution}
              </p>
              
              {item.details && (
                <p className="text-gray-400 mt-4">
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;