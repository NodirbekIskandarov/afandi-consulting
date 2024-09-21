import React, { useEffect, useState } from 'react'
import { Cards } from '../components'
import { getRequest } from '../utils/request';
import { details } from '../utils/API_urls';

function Jobs() {
  const [data, setData] = useState()

  useEffect(() => {
    const countryId = localStorage.getItem('uuid');
    getRequest(`${details}${countryId}/job/`)
    .then(response => {
      setData(response?.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div>
        <Cards data={data}/>
    </div>
  )
}

export default Jobs