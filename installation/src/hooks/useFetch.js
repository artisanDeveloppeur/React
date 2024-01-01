import { useState } from "react";

/**
 * 
 * @param {string} url 
 * @param {FetchEventInit} options 
 */
export function useFetch(url, options) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)

  return { loading, data, errors }
}