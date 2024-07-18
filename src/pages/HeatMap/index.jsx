import { GoogleMap, HeatmapLayer, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { points } from '../../data/points'

const center = {
    lat: 13.705243,
    lng: -89.24231
}

const libraries = ['visualization']

const HeatMap = () => {

    // Google Maps API Loading
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        libraries: libraries,
        googleMapsApiKey: "AIzaSyBjyM0CyjiksJbMk4SVzZTz-Uzn5QusoRE"
    })

    const [map, setMap] = React.useState(null)

    // Map loading function
    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    // Map dismount function
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerClassName='w-full h-full z-o'
            center={center}
            onLoad={onLoad}
            zoom={10}
            onUnmount={onUnmount}
        >
            <HeatmapLayer
                data={points.map((point) => ({
                    location: new window.google.maps.LatLng(point.lat, point.lng),
                    weight: 1
                }))}
                options={{ radius: 20, opacity: 0.6 }}
            />
            {
                points.map((point, index) => (
                    <Marker
                        key={index}
                        position={{ lat: point.lat, lng: point.lng }}
                    />
                ))
            }


        </GoogleMap>
    ) : <></>
}

export default React.memo(HeatMap)