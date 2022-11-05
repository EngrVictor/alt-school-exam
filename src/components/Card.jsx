import React from 'react'
import { MdOutlineCreateNewFolder, MdOutlineVisibilityOff, MdUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BsEye, BsStar } from "react-icons/bs";
import "./styles/card.css";

const Card = ({data}) => {

  return (
    <div className='card'>
        <div className='card-header'>
            <h3>{data.name}</h3>
        </div>
        <div className='card-body'>
                <p>{data.description ? data.description : '~No description for this repository~'}</p>

                <ul className='infos'>
                    <li><span><MdOutlineVisibilityOff /></span> {data.visibility}</li>
                    <li><span><MdOutlineCreateNewFolder /></span> {data.created_at.slice(0,10) + ' ' + data.created_at.slice(11,16)
} </li>
                    <li><span><BsStar /></span> {data.stargazers_count
} stars</li>
                    <li><span><BsEye /></span> {data.watchers_count

} Watching</li>
                    <li><span><MdUpdate /></span> {data.updated_at.slice(0,10) + ' ' + data.updated_at.slice(11,16)
} </li>
                </ul>
        </div>
        <div className="card-tail">
            <center><Link to={'/profile/' + data.name } ><button>View</button></Link></center>
        </div>
    </div>
  )
}

export default Card