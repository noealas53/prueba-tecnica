import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import React from 'react'
import { points } from '../../data/points'

const center = {
    north: 14.4501,
    south: 13.1483,
    west: -90.1289,
    east: -87.6886 
}

const ClientMap = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBjyM0CyjiksJbMk4SVzZTz-Uzn5QusoRE'
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerClassName='w-full h-full'
            center={center}
            onLoad={onLoad}
            zoom={10}
            onUnmount={onUnmount}
        >
            {
                points.map((point, index) => (
                    <Marker
                        key={index}
                        position={{ lat: point.lat, lng: point.lng }}
                    />
                ))
            }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(ClientMap)