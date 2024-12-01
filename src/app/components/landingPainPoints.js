import { ArrowDownOutlined } from '@ant-design/icons'
import { HTMLAttributes } from 'react'
//import { DesignSystemUtility } from '../helpers/utility'
//import RightArrow from './images/rightArrow.svg'
import { clsx } from 'clsx'; // For conditional class names
import { twMerge } from 'tailwind-merge'; // For merging Tailwind classes



function buildClassNames(...values) {
    return twMerge(clsx(values));  // Merge the classes using twMerge and clsx
  }


export default function LandingPainPoints ({
    title,
    subtitle,
    painPoints,
    className,
    ...props
  }) {
    return (
      <section
        className={buildClassNames('py-16 px-5', className)}
        {...props}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            {title}
          </h2>
          <h3 className="text-2xl mt-4 text-slate-600 dark:text-slate-400 mb-12">
            {subtitle}
          </h3>
  
          <div className="md:flex justify-center items-center md:space-x-8">
            {painPoints?.map((painPoint) => (
              
                <div key={painPoint.id}>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl mb-4">{painPoint.emoji}</span>
                    <span className="font-semibold text-lg text-gray-900 dark:text-slate-200">
                      {painPoint.title}
                    </span>
                  </div>
                </div>
                
              
            ))}
          </div>
          <div className="text-center pt-20">
            <div className="flex flex-col items-center">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                <ArrowDownOutlined /> there is an easier way
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  