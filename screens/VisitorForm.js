import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import BackButton from '../components/BackButton';
import CommunicationPlan from '../components/visitor/CommunicationPlan';
import ActionPlan from '../components/visitor/ActionPlan';

const screenWidth = Dimensions.get("window").width

const VisitorForm = ({ route, navigation }) => {
    const { title } = route.params
    const getForm = (form) => {
        switch (form) {
            case "Action Plan":
                return <ActionPlan />
            case "Communication Plan":
                return <CommunicationPlan />;
            default:
                return;
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <View style={styles.header}>
                <BackButton
                    goBack={() => navigation.goBack()}
                    style={styles.backButton}
                />
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>{title}</Text>
                </View>
            </View>
            <ScrollView style={styles.topContainer}>
                <Text>I am the visitor form screen</Text>
                {getForm(title)}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default VisitorForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "salmon"
    },
    topContainer: {
        marginTop: 50,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: "row",
        alignContent: "center",
        width: screenWidth
    },
    backButton: {
        position: "absolute",
        left: 0
    },
    headerTitle: {
        position: "absolute",
        top: 41, width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitleText: {
        fontSize: 18,
        fontWeight: "bold"
    }

})