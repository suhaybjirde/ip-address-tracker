async function getIpAddress(ip) {
    const url = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/'
    const res = await fetch(url)
    const data = await res.json()
    if (data.error) throw({message: data.reason})
    return data
}

export default getIpAddress