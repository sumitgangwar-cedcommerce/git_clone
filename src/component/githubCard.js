import { MediaCard, Page } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { mapDispatchToProps, mapStateToProps } from '../redux/selector'
import Profile from './Profile'

const GithubCard = ({data , fetch}) => {
  const nav = useNavigate()
  const [showProfile , setShowProfile] = useState(false)
    useEffect(()=>{setShowProfile(false)},[data])

    useEffect(()=>{if(showProfile){
      nav('/profile')
    }},[showProfile])
    
  return (
    <>
    {
       !showProfile &&  
       <Page>
          <MediaCard
          title={`${data.name}`}
          primaryAction={{
              content: 'Open Profile',
              onAction: () => {setShowProfile(true)},
          }}
          description={`${data.followers}   followers ${data.following} following  ${data.public_repos} repos`}
          
          popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
          size="small"
          >
          <img
              alt=""
              style={{
                width : '50%',
                height : '100%'
              }}
              src={data.avatar_url}
          />
          </MediaCard>
      </Page>
    }

    {/* {
      showProfile && <Profile />
    } */}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubCard)