import React from 'react'
import './styles/single.css'

const Messages = ({data}) => {
  console.log(data, 'from messages')
  return (
    <div className='single'>
      <div className='head'>
        <h3><span className='color'>Repository Name</span>: {data.name} <span className='visible'>{data.visibility}</span></h3> 
      <a target="_blank" rel="noreferrer" href={data.html_url}>{data.html_url}</a>
      </div>
      <div className="single">
        <h4 className='color'>Description</h4>
        <p>{data.description ? data.description : '~No description for this repository~'}</p>
        <div>
          <p>Language: {data.language ? data.language : '~Not Available~'}</p>
        </div>
      </div>
      <div className='head'>
        <h4><span className='color'>Created at</span>: {data.created_at.slice(0,10) + ' ' + data.created_at.slice(11,16)}</h4> 
      <a target="_blank" rel="noreferrer" href={data.homepage}>{data.homepage}</a>
      <h4><span className='color'>Last Updated:</span> {data.updated_at.slice(0,10) + ' ' + data.updated_at.slice(11,16)}</h4> 
      </div>
    </div>
  )
}

export default Messages