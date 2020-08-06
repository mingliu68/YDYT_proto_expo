import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BackButton from '../components/BackButton';
import MapView, { Marker } from 'react-native-maps';
import { locations } from '../server_dummy/data';
import Region from '../helper/Region';


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const VisitorLocationNew = ({ route, navigation }) => {
    // get initial map region { latitude, longitude, latitudeDelta, longitudeDelta }
    const region = Region(locations);

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta,
                    }}
                >
                    {
                        locations.map(location => (
                            <Marker
                                id={location.id}
                                key={location.id}
                                coordinate={({ latitude: location.latitude, longitude: location.longitude })}
                                title={location.title}
                                address={location.address}
                            />
                        ))
                    }
                </MapView>
            </View>
            <BackButton
                color="black"
                goBack={() => navigation.goBack()}
                style={styles.backButton}
            />
        </View>
    )
}

export default VisitorLocationNew;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backButton: {
        position: "absolute",
        left: 0,
        top: 45
    },
    topContainer: {
        position: "absolute",
        top: 0,
        height: screenHeight * 0.50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green"
    },
    mapStyle: {
        width: "100%",
        height: "100%"
    }
})