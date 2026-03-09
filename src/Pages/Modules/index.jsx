import React from 'react'
import PageWrapper from '../../Components/PageWrapper'
import { AssessmentIcon } from '../../Assets/Svg'
import AssessmentCard from './Components/AssessmentCard'
import { Images } from '../../Assets/Images'

const Modules = () => {

    const assessmentList = [
        {
            image: Images.assessmentImg1,
            heading: 'Strategic thinking, customer insight, and market-driven decision skills.',
            subHeading: 'Boosts your overall readiness score',
            time: '24mins',
            status: 'start'
        },
        {
            image: Images.assessmentImg2,
            heading: 'Market research, value positioning, customer behavior.',
            subHeading: 'Helps spot your strategic fit.',
            status: 'start',
            time: '8mins'
        },
        {
            image: Images.assessmentImg3,
            heading: 'Brand insight, clear messaging, smart analysis.',
            subHeading: 'Shows how well you shape perception.',
            status: 'completed',
            time: '34mins'
        },
        {
            image: Images.assessmentImg4,
            heading: 'Lead skills, conversion thinking, outreach style.',
            subHeading: 'Reflects your impact on growth.',
            status: 'progress',
            time: '30mins',
            percentage: 34
        },
        {
            image: Images.assessmentImg5,
            heading: 'Competitor awareness, pricing logic, value pitch.',
            subHeading: 'Strengthens positioning decisions.',
            status: 'completed',
            time: '24mins'
        },
        {
            image: Images.assessmentImg6,
            heading: 'Funnel basics, negotiation cues, need mapping.',
            subHeading: 'Builds trust and drives sales.',
            status: 'progress',
            time: '20mins',
            percentage: 60
        },
    ]

    return (
        <PageWrapper
            icon={<AssessmentIcon size={24} />}
            heading={'Module'}
            subHeading={'Sales & Marketing'}
            btnTitle='Add New Module'
        >
            <div className="grid grid-cols-3 gap-4">
                {assessmentList?.map((el, index) => (
                    <AssessmentCard key={index} cardData={el} />
                ))}
            </div>
        </PageWrapper>
    )
}

export default Modules