/* eslint-disable @next/next/no-img-element */
import { workExperience } from '@/data'
import React from 'react'
import { Timeline } from './ui/timeline'

const PreviousExperiences = () => {

    const timelineData = workExperience.map((exp) => ({
        title: exp.title,
        content: (
          <div className="bg-gray-100 dark:bg-neutral-900 p-4 rounded-lg shadow-lg">
            <h2 className='text-2xl text-white font-sans font bold'>{exp.company} </h2>
            <h2 className='text-xl text-purple'>{exp.location}</h2>
            <p className="text-neutral-700 dark:text-neutral-300">{exp.desc}</p>
            <img src={exp.thumbnail} alt={exp.title} className="mt-4 w-20 h-20 object-contain" />
          </div>
        ),
      }));
      return (
        <div className="py-20">
          <h1 className="heading">
            Take a look at my <span className="text-purple">Previous Experiences</span>
          </h1>
          <div className="w-full mt-10 items-center justify-center max-lg:mt-10">
            <Timeline data={timelineData} />
          </div>
        </div>
      );
}

export default PreviousExperiences