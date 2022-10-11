import { Avatar, Button, Card, Page } from '@shopify/polaris'
import React from 'react'

const Overview = ({data}) => {
    console.log(data)
  return (
   <Page>
        
            <div style={{alignItems : 'center' , display : 'flex' , flexDirection : 'column' , justifyContent : 'center'}}>
                <img
                    src={data.avatar_url}
                    style={{
                        width : '30%',
                        height : '50%',
                        borderRadius : '50%'
                    }}
                />
                <p><b>{data.name}</b></p>
                <p>{data.login}</p>
                <p>{data.bio}</p>
                <p><Button>Follow</Button><Button>Sponsor</Button></p>
                <p><b>Followers :</b>{data.followers}</p>
                <p><b>Following :</b>{data.following}</p>
                <p><b>Repos :</b>{data.public_repos}</p>
                <p><b>Location :</b>{data.location}</p>
                <p><b>Email :</b>{data.email}</p>
                <p><b>Blog :</b><a href = {data.blog} target='blank' /></p>
                <p><b>Twitter :</b> {data.twitter_username}</p>
            </div>
        
   </Page>
  )
}

{/*  */}

export default Overview