import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerMenu: {
        height: 50,
        width: 80,
        flex: 1,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
        padding: 30,
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 180,
        padding: 8,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    btnIcon: {
        height: 17,
        width: 17
    }
});

export default styles;
