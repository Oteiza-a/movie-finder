export const getLocalStorageObject = (key: string): Object | null => {  
  const localData = localStorage.getItem(key) || null
  
  try {
    const parsedData = localData ? JSON.parse(localData) : null
    return parsedData
  } catch (e) {
    return null
  }
}