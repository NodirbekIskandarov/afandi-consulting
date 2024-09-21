import React, { useContext, useEffect, useState } from 'react'
import { Cards } from '../components'
import MyContext from '../context/MyContext';
import { details } from '../utils/API_urls';
import { getRequest } from '../utils/request';

function Universities() {
  const { countryId } = useContext(MyContext);
  const [data, setData] = useState()

  useEffect(() => {
    getRequest(`${details}${countryId}/university/`)
    .then(response => {
      setData(response?.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [countryId])
  return (
    <div>
        <Cards data={data}/>
    </div>
  )
}

export default Universities