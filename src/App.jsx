import React, { useEffect, useState } from "react"
import Search from "./components/search"
import Map from "./components/Map";
import getIpAddress from "./api/api"
import './styles.css';
import 'leaflet/dist/leaflet.css';

const IpInfo = ({
  ip,
  location,
  timezone,
  isp
})=> {
  return (
    <article className="details">
      <div>
        <strong>IP Address</strong>
        <h2>{ip}</h2>
      </div>
      <div>
        <strong>Location</strong>
        <h2>{location}</h2>
      </div>
      <div>
        <strong>Time Zone</strong>
        <h2>{timezone}</h2>
      </div>
      <div>
        <strong>ISP</strong>
        <h2>{isp}</h2>
      </div>
    </article>
  )
}

const App = ()=> {
  const [IpSearch, SetIpSearch] = useState()
  const [ipAddress, setIpAddress] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  function sumbit(ip) {
    SetIpSearch(ip)
  }

  useEffect(()=> {
    async function getData() {
      try {
        setIsLoading(true)
        const res = await getIpAddress(IpSearch)
        setIpAddress(res)
      } catch (e) {
        setError(e.message)
      }finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [IpSearch])

  return (
    <>
      <header className="header">
          <h1 className="title">IP Address Tracker</h1>
          <Search submit={sumbit} loading={isLoading} setError={setError}/>
          {error && <p className="error">{error}</p>}
      </header>
      { ipAddress && 
        (<main className="main">
          <IpInfo 
            ip={ipAddress.ip}
            location={ipAddress.city}
            timezone={`UTC ${ipAddress.utc_offset}`}
            isp={ipAddress.org}
          />
          <Map latitude={ipAddress.latitude} longitude={ipAddress.longitude} />
        </main>)
      }
    </>
  )
}

export default App
