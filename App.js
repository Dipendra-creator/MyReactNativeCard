import * as React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import AboutMe from './components/About';
import PropNameCard from './components/PropNameCard';
import {LinearGradient} from 'expo-linear-gradient';

function App() {
    const [visible, setVisible] = React.useState(true);
    return (
        <LinearGradient
            colors={['#FC5C7D', '#6A82FB']}
            style={styles.container}>
            <PropNameCard ans={visible} setVisible={setVisible}
                          path="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ab5e09d8933d5b308909c363713a8805"
                          name="Dipendra Bhardwaj"/>
            <AboutMe visible={visible}/>
        </LinearGradient>
    );
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 18,
    },
});
