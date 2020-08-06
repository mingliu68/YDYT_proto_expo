const Region = (points) => {
    let minLat, maxLat, minLng, maxLng;

    (point => {
        minLat = maxLat = point.latitude;
        minLng = maxLng = point.longitude;
    })(points[0])

    points.forEach(point => {
        minLat = Math.min(minLat, point.latitude);
        maxLat = Math.max(maxLat, point.latitude);
        minLng = Math.min(minLng, point.longitude);
        maxLng = Math.max(maxLng, point.longitude);
    })

    const midLat = (minLat + maxLat) / 2;
    const midLng = (minLng + maxLng) / 2;

    const deltaLat = (maxLat - minLat) * 1.4;
    const deltaLng = (maxLng - minLng) * 1.4;

    return {
        latitude: midLat,
        longitude: midLng,
        latitudeDelta: deltaLat,
        longitudeDelta: deltaLng
    }
}

export default Region;