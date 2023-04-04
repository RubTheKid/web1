import { StyleSheet,TextInput, TouchableOpacity, Text, View, FlatList, SafeAreaView } from 'react-native';
import { AntDesign,  Entypo , Ionicons, FontAwesome5  } from '@expo/vector-icons'; 
// import { Icon } from 'react-native-ionicons';

import { styles } from './Styles'
import React from 'react';




export default function ToDo(){

    interface DataItem {
        text: string;
        isDone: number;
      }

      interface ItemProps {
        item: DataItem;
      }

    const DATA = [
        {
          text: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          isDone: 1,
        },
        {
            text: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            isDone: 0,
        },
        {
            text: '58694a0f-3da1-471f-bd96-145571e29d72',
            isDone: 0,
        },
      ];

     

      const renderItem = ({ item }: ItemProps) => (
        <View style={styles.itemBox}>
          <Text style={styles.itemBox.description}>{item.text}</Text>
          <Text style={styles.itemBox.done}>{item.isDone}</Text>
          <Ionicons style={styles.itemBox.delete} name="close-circle-outline" />
          
          
        </View>
      );
      
      
    return(
        

        <>
        <View style={styles.body}>
        <View style={styles.header}>
            <AntDesign name="bars" size={36} color="black" alignItems='center'>
                <Text style={styles.header.to}>to</Text>
                <Text style={styles.header.do}>do</Text>
            </AntDesign>
        </View>
        
        </View>
        
        <View style={styles.newTask}>
        <TextInput
        style={styles.newTask.Input}
        placeholder="Adicione uma Tarefa"
        placeholderTextColor={"#6d6d6d"}
        autoCapitalize="characters" 
        />
                     <TouchableOpacity style={styles.newTask.addBtn}>
                     <Ionicons name="add-circle-outline" />
          </TouchableOpacity>
        </View>
       
        <View style={styles.tasks}>
                <Text style={styles.tasks.created}>Criadas: <Text style = {styles.tasks.created.total}>5 </Text></Text>
                
                <Text style={styles.tasks.done}>Completas: <Text style={styles.tasks.done.total}>2</Text></Text>
                

        </View>

        <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.text}
      
    />
  
            
            </>
     
        )};
    // } <View style={styles.taskInput}>
    //             <TextInput
    //                 style={styles.taskInput.taskText}
    //                 placeholder="Adicione uma Tarefa"
    //                 placeholderTextColor={"#6d6d6d"}
    //                 autoCapitalize="characters" 
    //                 />
    //             <TouchableOpacity>
    //                 <Ionicons name="add-circle-outline" size={24} color="white" />
    //             </TouchableOpacity>
    //         </View>
            
            
            
        // <View style={styles.taskInput}>
            
        /* <TextInput
            style={styles.taskInput.taskText}
            placeholder="Adicione uma Tarefa"
            placeholderTextColor={"#6d6d6d"}
            autoCapitalize="characters"
          /> */



/* 

          <TouchableOpacity >
          <Ionicons name="add-circle-outline" size={24} color="white" />
          </TouchableOpacity>

        </View>
   <View>    
        <Text>Criadas: 5</Text>
    <Text>Concluidas: 2</Text> */

    

    /* <View style={styles.itemDiv}>
      <View style={styles.touckBgd}>
    
      <Entypo name="circle" size={24} color="purple"/>
    
        </View>

        <Text
            style={styles.input}
            placeholderTextColor={"#6d6d6d"}
            autoCapitalize="characters"
          >
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Text>
        <Ionicons name="md-trash-outline" size={24} color="red" />


        </View>
</View> */
       


