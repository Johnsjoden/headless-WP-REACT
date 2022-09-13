
const fetchData = async (url) => {
    console.log(url)
    const response = await fetch(url)
    console.log(response)
    const result = await response.json()
    console.log(result)
    return result
}
export {fetchData}