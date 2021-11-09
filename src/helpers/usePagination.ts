import { useEffect, useState } from 'react'

const paginationLimit = 20

export default function usePagination<T>(
  fetchMoreItems: (skip: number, limit: number) => Promise<T[]>
) {
  const [items, setItems] = useState<T[]>([])
  const [moreItemsAvailable, setMoreItemsAvailable] = useState(true)

  const fetchMoreItemsIfNeeded = async () => {
    if (!moreItemsAvailable) {
      return
    }
    try {
      const finalLimit = paginationLimit
      const newItems = await fetchMoreItems(items.length, finalLimit)

      if (newItems.length) {
        setItems([...items, ...newItems])
      }
      if (newItems.length < finalLimit) {
        setMoreItemsAvailable(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    void fetchMoreItemsIfNeeded()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    items,
    setItems,
    fetchMoreItemsIfNeeded,
    moreItemsAvailable,
  }
}
