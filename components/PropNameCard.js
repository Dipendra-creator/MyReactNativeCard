import * as React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default function PropNameCard(props) {
    return (
        <Modal visible={true} transparent={true}>
            <TouchableOpacity onPress={() => (props.ans === false) ? props.setVisible(true) : props.setVisible(false)}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={{uri: props.path}}/>
                    <Text style={styles.heading}>
                        {props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
    },
    container: {
        alignItems: 'center',
        justifyContent: "center",
        height: 150,
        width: 300,
        borderRadius: 40,
        padding: 24,
        backgroundColor: 'white',
        margin: '10%'
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 75,
    },
});
