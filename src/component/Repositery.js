import { Button, Card, Frame, Heading, Page , Loading } from '@shopify/polaris'


import React, { useEffect, useState } from 'react'

const Repositery = ({name}) => {
  // console.log(name)
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(res => res.json())
    .then(res => {setData(res); setLoading(false)})
  },[])
  return (
    <Page>
      
      <Card>
        <div style={{display : 'grid' , gridTemplateColumns : '1fr 1fr'}}>
        {
          data.map((item,i)=> 
            <Card.Section>
              <p><Heading>{(item.name).toUpperCase()}</Heading></p>
              <p><b>Type</b> : {item.private === true ? ' Private ' : ' Public '}</p>
                
              <p><b>Langauge</b> : {item.language}</p>
             
              <p><b>Pushed at</b> : {item.pushed_at}</p>

              <Button primary> <a href={item.html_url} target="_blank">Open</a></Button>

            </Card.Section>
          )
        }

      </div>
        {
          loading && <Frame>
          <Loading />
        </Frame>
        }
      </Card>
    </Page>
  )
}

export default Repositery