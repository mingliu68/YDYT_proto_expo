import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

const VisitorLocation = ({ route, navigation }) => {
    // const [nameDisplay, setNameDisplay] = useState(route.params.name)
    // const [name, setName] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundcolor: "transparent" }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Visitor Location Search</Text>
            </View>

            {/* <Text>{nameDisplay}</Text>
            <TextInput
                placeholder={nameDisplay}
                value={name}
                onChangeText={setName}
                style={{ color: "#999" }}
            />
            <TouchableOpacity
                onPress={() => {
                    if (name) {
                        route.params.setName(name)
                        setNameDisplay(name)
                        setName("")
                    }
                }}
            >
                <Text>Change Name</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default VisitorLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        borderRadius: 40,
        paddingTop: 20,
        paddingHorizontal: 20,
        bottom: 0,
        marginHorizontal: 10,
        overflow: "hidden"
    }
})