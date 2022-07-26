import { useQuery, useMutation } from "@tanstack/react-query"
import { useLocalStorage } from "react-use"

export const useGlobalLocalStorage = <T, >(
  key: string,
  defaultValue?: T
): [T | undefined, any] => {
  const [item] = useLocalStorage<T>(key)
  const { data, refetch } = useQuery<T>([key], () => {
    return JSON.parse(localStorage.getItem(key) || "")
  }, {
    placeholderData: defaultValue || item
  })

  const { mutate } = useMutation<any, any, T, void>((newValue) => {
    return new Promise(resolve => resolve(localStorage.setItem(key, JSON.stringify(newValue))))
  }, {
    onSuccess: () => refetch()
  })

  return [
    data,
    mutate
  ]
}
