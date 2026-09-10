'use client'

import React from 'react'

import MvHelpCenterPage from '@/components/meta-verified-for-business/landing/MvHelpCenterPage'

type MainContentProps = {
  onSignUp: () => void
  showAppealForm?: boolean
  onCloseAppealForm?: () => void
  onAppealSubmitSuccess?: () => void
}

const MainContent = ({
  onSignUp,
  showAppealForm,
  onCloseAppealForm,
  onAppealSubmitSuccess,
}: MainContentProps) => {
  return (
    <MvHelpCenterPage
      onSignUp={onSignUp}
      showAppealForm={showAppealForm}
      onCloseAppealForm={onCloseAppealForm}
      onAppealSubmitSuccess={onAppealSubmitSuccess}
    />
  )
}

export default MainContent
