import { useState } from "react";
import { Alert, Button, TextInput, View, Text, Pressable } from "react-native"
import styles from "../Styles/styles";

const AddTask =({tasks, setTaskfun, value})=> {

    const [newTask, setNewTask] = useState({id:'', title:'', checked:false});
    const handleChangeTask = (v)=> {
        setNewTask(task=>({...task, id:tasks[value].data.length, title:v}))
   }
   const [valid, setValid] = useState(false)
   const handleTaskPress = ()=> {
    if(tasks.length) {
        if(newTask.title && newTask.title.length >= 3) {
            setTaskfun(newTask)
            setNewTask({})
            setValid(false)
        }
        else setValid(true)
    }
    else Alert.alert("You nust add category at first")
        
   }
    return (
        <View>
            <TextInput placeholder="Enter Task"
            value={newTask.title}
            onChangeText={handleChangeTask}
            style={styles.input}></TextInput>
            <Text style={{color:'#f00', fontSize:15, margin:5}}>{valid?'Task must be at least 3 characters':''}</Text>
            <Pressable style={styles.addBtn} onPress={handleTaskPress}>
            <Text style={styles.btnText}>Add</Text>
            </Pressable>
            
        </View>
    )
}
export default AddTask;