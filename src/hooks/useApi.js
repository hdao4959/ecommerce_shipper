import { useEffect, useState } from "react"
import { toast } from "react-toastify";

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
      toast.error(error?.response?.data?.errors || error?.response?.data?.message || "Xảy ra lỗi không xác định")
      setError(error?.response?.data?.errors || error?.response?.data?.message || "Xảy ra lỗi không xác định")
      throw error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (autoFetch === true) {
      fetchApi(...initialArgs)
    }
  }, [autoFetch])

  return {
    loading, response, data, error, fetchApi
  }
}

export default useApi