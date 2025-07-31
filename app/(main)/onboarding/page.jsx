import React from 'react'
import OnboardingForm from './_components/onboarding-page'
import { industries } from '@/data/industries'

const OnboardingPage = () => {
    //check user is already onboarded
  return (
    <main>
        <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage
