import React, {useState} from 'react'
import {useParams, Link } from 'react-router-dom';
import useFetch from './hooks/useFetch'
import Loading from './Loading'
import Messages from './Messages';

const Profile = () => {
  const [loading, setLoading] = useState(true)
  let params = useParams();
  let repo = params.id;

  const [data] = useFetch('https://api.github.com/repos/engrvictor/' + repo, setLoading)
  console.log(data)

  return (
    <div>
      <h3 className='nested'><Link to="/">Home</Link>/<Link>Repo : {repo}</Link></h3>
    

      {(() => {if (loading) {
        return <Loading />
      } else {
        return (
            <>
              <Messages data={data}/>
            </>
        )
      }
      })()}
    </div>
    )
}

export default Profile