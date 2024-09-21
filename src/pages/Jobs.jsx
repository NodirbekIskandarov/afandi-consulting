import React, { useContext, useEffect, useState } from 'react'
import { Cards } from '../components'
import MyContext from '../context/MyContext';
import { getRequest } from '../utils/request';
import { details } from '../utils/API_urls';

function Jobs() {
  const { countryId } = useContext(MyContext);
  const [data, setData] = useState()

  useEffect(() => {
    getRequest(`${details}${countryId}/job/`)
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

export default Jobs