import axios from 'axios'
import { useEffect, useState } from 'react'

export interface Item {
  title: string
  note: string
  date: Date | string
  done: boolean
  id: number
}

export function useFetchGET(url: string, dataChange: Buffer) {
  const [data, setData] = useState([{}])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log('ERROR' + err.message)
      })
  }, [url, dataChange])
  return { data, loading }
}

export function postData(url: string, data: Item) {
  return axios.post(url, data).then(() => {
    console.log('new ToDo item created')
  })
}

export function putData(url: string, data: Item) {
  return axios.put(url, data).then(() => {
    console.log('ToDo item changed')
  })
}

export function deleteData(url: string) {
  return axios
    .delete(url, {
      method: 'DELETE',
    })
    .then(() => {
      console.log('ToDo item deleted')
    })
    .catch((err) => {
      console.log(err.message)
    })
}
