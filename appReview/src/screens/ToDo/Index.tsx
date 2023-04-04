import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './Styles'


export default function ToDo(){
    return(
        <View style={styles.header}>
            <AntDesign name="bars" size={36} color="black" alignItems='center' >
                <Text style={{color:'#4B0082', fontSize:40}}>to</Text>
                <Text style={{color:'#FF69B4', fontSize:40 }}>do</Text>
            </AntDesign>
        </View>
    )
}

