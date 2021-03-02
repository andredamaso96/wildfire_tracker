import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({eventData, center, zoom}) => {

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyAsE6JkAY2J5IwXrXZyTCZC7YMTzz-aAao' }}
                defaultCenter={center}
                defaultZoom={zoom}

                >

                {markers}

            </GoogleMapReact>
        </div>
    )
}


Map.defaultProps = {
    center:{
        lat: 37.195,
        lng: -7.41766
    },
    
    zoom: 6
}

export default Map
