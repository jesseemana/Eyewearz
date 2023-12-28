import React from 'react'

export interface BenefitsTypes {
  title: string
  icon: React.ReactElement
  desc: string
  styles?: string
}

const Benefits = ({ benefits }: { benefits: BenefitsTypes }) => {
  const { title, icon, desc, styles } = benefits
  return (
    <div className={`flex items-center gap-2 w-[400px] ${styles}`}>
      <>{icon}</>
      <div>
        <p className='text-gray-700 font-bold capitalize'>{title}</p>
        <p className='text-gray-700 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default Benefits
