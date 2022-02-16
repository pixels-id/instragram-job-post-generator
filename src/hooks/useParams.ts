export const useParams = (field: string) => {
  if (typeof window !== 'undefined') {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop as string)
    })
    return params?.[field]
  } else {
    return null
  }
}
