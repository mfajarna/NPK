import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const Alat = ({route, navigation}) => {

    

    const data = route.params;
    console.log(data)

    const gps = data.gps;
    const lang = parseFloat(gps.substring(0,9))
    

    const long = parseFloat(gps.substring(10))


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                    <MapView
                        style={StyleSheet.absoluteFill}
                            initialRegion={{
                            latitude: lang,
                            longitude: long,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009,
                        }}
                    >
                    <Marker coordinate={{ 
                            latitude: lang, 
                            longitude: long
                         }} />
                    </MapView>
            </View>
            <View style={styles.content2}>
                <Text>Nilai HUM : {data.HUM}</Text>
                <Text>Nilai K :{data.K}</Text>
                <Text>Nilai N :{data.N}</Text>
                <Text>Nilai P :{data.P}</Text>
                <Text>Nilai GPS : {data.gps}</Text>
            </View>
        </View>
    )
}

export default Alat

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    content:{
        flex: 1,
        paddingHorizontal : 24
    },
    content2:{
        paddingVertical: 25,
        paddingHorizontal: 20,
        flex:1,
    }
})
