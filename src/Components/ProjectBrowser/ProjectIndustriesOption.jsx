import React from 'react'

export default function ProjectIndustriesOption({ selectedFields, showIndustriesButtons, toggleProjectIndustryButtons, toggleField }) {
    const fieldsOfInterests = [
        'Fintech', 'Education', 'Non-Profit', 'SaaS', 'Healthcare',
        'Sustainability', 'Security', 'Enterprise', 'Marketplace', 'e-Commerce',
        'B2C', 'Retail', 'B2B', 'Blockchain', 'Real Estate',
        'API', 'Artificial Intel', 'Big Data', 'DevOps', 'Deep Tech',
        'Cloud Comput.', 'Agriculture', 'Environment', 'Ment. Health',
        'Home Impr.', 'Community', 'Entertain.', 'Productivity', 'Art/Design', 'Science'
      ];
  
    return (
    <li>
    <button type="button" className="flex items-center px-4  p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 ml-10" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleProjectIndustryButtons}>
        <span className="text-left whitespace-nowrap font-bold mr-10 text-xl">Industries</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
    </button>
    {showIndustriesButtons && (
    <div className="ml-12 mt-4 grid grid-cols-3 gap-x-0 gap-y-4 pb-8 w-4/5">
        {fieldsOfInterests.map((field, index) => (
            <button
    key={index}
    style={{
        backgroundColor: selectedFields.includes(field) ? 'white' : '#bcbbc2'
    }}
    className="rounded-lg w-3/4 py-3 text-center cursor-pointer border border-black text-xs"
    onClick={() => toggleField(field)}
    onMouseEnter={(event) => {
        event.target.style.backgroundColor = 'white';
    }}
    onMouseLeave={(event) => {
        event.target.style.backgroundColor = selectedFields.includes(field) ? 'white' : '#bcbbc2';
    }}
>
    {field}
</button>


        ))}
    </div>
    )}

    </li>
  )
}
