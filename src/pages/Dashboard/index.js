import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { Card } from '../../components'
import Firebase from '../../utils/Firebase'

const Dashboard = ({navigation}) => {

    const[alat1,setAlat1] = useState({})
    const[alat2,setAlat2] = useState({})
    const[alat3,setAlat3] = useState({})

    const getDataAlat1 = () => {
        Firebase.database()
        .ref('Alat1/')
        .on('value', res => {
            setAlat1(res.val())
        })
    }

    const getDataAlat2 = () => {
        Firebase.database()
        .ref('Alat2/')
        .on('value', res => {
            setAlat2(res.val())
        })
    }

    const getDataAlat3 = () => {
        Firebase.database()
        .ref('Alat3/')
        .on('value', res => {
            setAlat3(res.val())
        })
    }



    useEffect(() => {
        getDataAlat1()
        getDataAlat2()
        getDataAlat3()
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>AGGRISOIL</Text>
            </View>
            <View style={styles.content}>
                
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row' }} >
                            <Card label="Alat 1" onPress={() => navigation.navigate('Alat', alat1)} />
                            <Card label="Alat 2" onPress={() => navigation.navigate('Alat', alat2)}/>
                            <Card label="Alat 3" onPress={() => navigation.navigate('Alat', alat3)}/> 
                        </View>
                    </ScrollView>     
                    
                </View>
            </View>            
     
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        
    },
    header:{
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    textHeader:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#38A3A5'
    },
    content:{
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})
