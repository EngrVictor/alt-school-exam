import React, { useState } from 'react'
import Card from './Card'
import useFetch from './hooks/useFetch'
import Loading from './Loading'
import Pagination from './Pagination'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentpage] = useState(1);
  const [itemsPerPage] = useState(4);
  
  const [data] = useFetch('https://api.github.com/users/engrvictor/repos', setLoading)
  console.log(data)

  let paginate = (pageNum) => {
    setCurrentpage(pageNum)
  }

  let next = () => {
    if (currentPage >= data.length / itemsPerPage) {
      return
    }
    setCurrentpage(currentPage + 1)
    console.log('next', data.length)
  }

  let prev = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentpage(currentPage - 1)
    console.log('prev')
  }

  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;

  return (
    <div>
        <div className='main'>
        {(() => {if (loading) {
            return <Loading />
          } else {
              let currentItems = data.slice(indexOfFirstItems, indexOfLastItems);
            return (
              <>
                <>
                  {currentItems.map((repo) => (
                    <Card key={repo.id} data={repo}/>
                  ))}
                </>
              </>
            )
          }
        })()}
      </div>
      { data ? <Pagination total={data.length} paginate={paginate} itemsPerPage={itemsPerPage} next={next} prev={prev} current={currentPage}/> : ''}
    </div>
  )
}

export default Home