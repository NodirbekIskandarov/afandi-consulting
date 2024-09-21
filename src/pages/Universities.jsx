import React, { useEffect, useState } from 'react'
import { Cards } from '../components'
import { details } from '../utils/API_urls';
import { getRequest } from '../utils/request';

function Universities() {
  const [data, setData] = useState()

  useEffect(() => {
    const countryId = localStorage.getItem('uuid');
    getRequest(`${details}${countryId}/university/`)
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

export default Universities