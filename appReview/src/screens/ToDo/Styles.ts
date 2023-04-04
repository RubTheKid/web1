import { StyleSheet } from 'react-native';


export const styles =  StyleSheet.create({

    body: {
      flexDirection: "row",
      justifyContent: "center", 
      // backgroundColor: '#FAEBD7',
    },
    header: {
      flex: 1,
      alignItems: 'center',
      marginTop:100,
      backgroundColor:'red',
      to:{
        color:'#4B0082', fontSize:40
      },
      do:{
        color:'#FF69B4', fontSize:40
      }
     },
     newTask:{
    flexDirection:'row',
    paddingTop:20,
    backgroundColor:'purple',
    Input:{
    backgroundColor:'#1F1E25',
    flex: 0,
    gap: 5,
    borderRadius: 5,
    width: 300,
    height:50,
    marginLeft:30,
    marginBottom:20, 
     },
     addBtn:{ 
          backgroundColor: '#b4b4b4',
          borderRadius: 4,
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
      paddingRight:0,
    },
 },

    tasks:{
      backgroundColor:'yellow',
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingTop:10,
      created:{
        marginLeft:50,
        fontWeight:'bold',
        total:{
          color: 'red'
        },
      },
      done:{
        marginRight: 50,
        fontWeight:'bold',
        total:{
         color:'red' 
        }
      },
    
     
    },
    flatList:{
      backgroundColor:'navy'
     },
     
   // width: 300,
    // padding: 18,
    // backgroundColor: "#1F1E25",
    // borderRadius: 4,
    // color: "#fff",
    // fontSize: 18,

      // paddingTop: 54,
      // paddingBottom: 200,
      // paddingLeft: 60,
      // paddingRight: 60,
    
   itemBox:{
    backgroundColor: 'red',
    paddingBottom: 30,
    paddingLeft: 15,
    borderRadius:10,
    marginLeft:30,
    marginTop:30
   }
  

});

// taskInput: {
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "row",
//       taskText:{
//         borderRadius: 4,
//       width: 200,
//       height: 40,
//       borderWidth: 1,
//       padding: 10,
//       backgroundColor: "#6d6d6d",
//       },
//       addBtn: {
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "row",
//           backgroundColor: "blue",
//           borderRadius: 4,
//           height: 62,
//           width: 60,
  //   container: {
  //     paddingTop: 70,
  //     paddingBottom: 200,
  //     paddingLeft: 60,
  //     paddingRight: 60,
  //   },
  // //   },
  // //   inputDiv: {
  // //   alignItems: "center",
  // //   justifyContent: "center",
  // //   flex: 0,
  // //   flexDirection: "row",
  // //   backgroundColor: "#1F1E25",
  // //   gap: 5,
  // //   borderRadius: 5,
    
  // // },
  // // addInput: {
  // //   width: 300,
  // //   padding: 18,
  // //   backgroundColor: "#1F1E25",
  // //   borderRadius: 4,
  // //   color: "#fff",
  // //   fontSize: 18,
  // // },
  // // 
    
  // // },
  // // itemDiv: {
  // //   alignItems: "center",
  // //   justifyContent: "center",
  // //   flex: 0,
  // //   flexDirection: "row",
  // //   gap: 5
  // // },
  // // touckBgd: {
  // //   color: '#FFF',
  // // },
  // // input: {
  // //   width: 300,
  // //   padding: 18,
  // //   backgroundColor: "#1F1E25",
  // //   borderRadius: 4,
  // //   color: "#fff",
  // //   fontSize: 18,
  // // }

  