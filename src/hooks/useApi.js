import { useEffect, useState } from "react"

const useApi = (func, autoFetch = false, ...initialArgs) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const fetchApi = async (...args) => {
    try {
      setLoading(true)
      setError(null)
      const response = await func(...args)
      setResponse(response.data)
      setData(response.data.data)
    } catch (error) {
      setError(error?.response?.data?.messages || error?.response?.data?.errors || "Xảy ra lỗi không xác định")
      throw error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (autoFetch) {
      fetchApi(...initialArgs)
    }
  }, [])

  return {
    loading, response, data, error, fetchApi
  }
}

export default useApi