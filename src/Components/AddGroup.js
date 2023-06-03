import { useState } from "react"
import { Button, Pressable, TextInput, View, Text } from "react-native"
import styles from "../Styles/styles";
const AddGroup = ({tasks, setTasksfun})=> {
    const [newTaskGruop, setNewTaskGroup] = useState({})
    const [valid, setValid] = useState(false)
    
    const handleChange =(value)=> {
        setNewTaskGroup(task=>({...task,id:tasks.length, title:value, data:[]}))
    }

    const handlePress = ()=> {
        if (newTaskGruop.title) {
            setTasksfun(newTaskGruop)
            setNewTaskGroup({})
            setValid(false)
        }
        else setValid(true)
        
    }
    return (
        <View>
             <TextInput style={[styles.input]} placeholder="Enter Tasks group"
            value={newTaskGruop.title}
            onChangeText={handleChange}></TextInput>
            <Text style={{color:'#f00', fontSize:15, margin:5}}>{valid?'Category must be at least 3 characters':''}</Text>
            <Pressable style={styles.addBtn} onPress={handlePress}>
            <Text style={styles.btnText}>Add</Text>
            </Pressable>
        </View>
    )
}
export default AddGroup;