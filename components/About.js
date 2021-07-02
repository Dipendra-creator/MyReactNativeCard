import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function AboutMe(props) {
    console.log(props.visible)
    if (props.visible) {
        return (
            <View
                style={styles.container}>
                <Text style={styles.heading}>
                    About Me
                </Text>
                <Image style={styles.logo}
                       source={{uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ab5e09d8933d5b308909c363713a8805"}}/>
                <Text style={styles.paragraph}>
                    A few years ago I was lucky enough to find what I'm passionate about, and in 2019 I started pursuing
                    BTech in Computer Science from GLA University, Mathura. I have an unending curiosity for learning
                    how technology works, specifically programming. I've built my own AI models in some projects,
                    explored cybersecurity and <Text style={styles.high}>Machine Learning</Text> & <Text
                    style={styles.high}>Deep Learning</Text>, created Games in Flutter, and more, but ultimately my
                    passion is web development. I specialize in JavaScript, React, Three.js, and Node.js, but I'm almost
                    always learning new web technologies so I can see my ideas and my programming come to life.
                </Text>
            </View>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        marginBottom: 20,
        fontWeight: "bold"
    },
    container: {
        // position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 40,
        padding: 24,
        marginTop: 200
    },
    paragraph: {
        marginBottom: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: 20
    },
    high: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF8300',
    }
});
