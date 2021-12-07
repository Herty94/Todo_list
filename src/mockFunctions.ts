import { useEffect, useState } from 'react'

export function useFetchGET(url: string, dataChange: any) {
  const [data, setData] = useState([{}])
  const [loading, setLoadin] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error('Could not fetch the data')
        return res.json()
      })
      .then((data) => {
        setData(data)
        console.log(data)
        setLoadin(false)
      })
      .catch((err) => {
        setLoadin(false)
        console.log('ERROR' + err.message)
      })
  }, [dataChange])
  return { data, loading }
}

export function FetchPOST(url: string, data: any) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(() => {
    console.log('new ToDo item created')
  })
}
export function FetchPUT(url: string, done: any) {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: done }),
  }).then(() => {
    console.log('ToDo item changed')
  })
}

export function DeleteData(url: string) {
  return fetch(url, {
    method: 'DELETE',
  })
    .then(() => {
      console.log('ToDo item deleted')
    })
    .catch((err) => {
      console.log(err.message)
    })
}
