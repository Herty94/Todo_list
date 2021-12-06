import { useEffect, useState } from 'react'

export function useFetch(url: string) {
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
        setLoadin(false)
      })
      .catch((err) => {
        setLoadin(false)
        console.log('ERROR' + err.message)
      })
  }, [url])
  return { data, loading }
}
