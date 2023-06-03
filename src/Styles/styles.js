import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        padding: 5,
        margin:10,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems: 'center',
        borderRadius:10
    },
    taskHeader: {
        backgroundColor: 'lightgrey',
        padding: 10,
        marginVertical:5 ,
        marginHorizontal: '5%',
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        width: '90%',
        borderRadius:10
        
    },
    headerText: {
        fontSize:25,
        color: '#fff'
    },
    deleteBtn: {
        backgroundColor:'#f5badd',
        width:80,
        padding:5,
        borderRadius:10,
        
    },
    addBtn: {
      backgroundColor:'#f5badd',
      width:'100%',
      padding:5,
      borderRadius:10,
      
  },
    btnText: {
        color: '#fff',
        fontSize: 25,
        textAlign:'center'

    },
    input: {
      marginHorizontal:15,
      marginVertical:4,
      padding:5,
      fontSize:20,
      borderBottomWidth: 0.5,
    },
    task: {
       
        fontSize:30
    },
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      img: {
        position:'absolute',
        top:'140%',
        left:'63%',
        transform:[{"rotate": "-40deg"}]
      },
      imgBtn: {
        width:90,
        height:60
      },
      imgBtnh: {
        width:70,
        height:70
      }
})