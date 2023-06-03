import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, Image } from "react-native";
import styles from "../Styles/styles";
import Routes from "../Common/Routes";
import { useEffect, useState } from "react";

const Home =()=> {
    const { navigate } = useNavigation();
    const [tasks, setTasks] = useState([]);
    const tasksFun=(data)=>{
        setTasks(data)
    }
    
    return (
        <View>
            <Pressable style={[styles.header, {padding:25, margin:20}]} onPress={()=>(navigate(Routes.ToDos, {tasksFun:tasksFun}))}>
                <Text style={[styles.headerText, {fontSize:40}]}>Add Todos</Text>
                <Image style={styles.imgBtn} source={require('../../assets/catWrite.png')}></Image>
                </Pressable>
                <Pressable style={[styles.header, {padding:25, margin:20}]} onPress={()=>{navigate(Routes.SectionList, {data:tasks})}}>
                <Text style={[styles.headerText, {fontSize:40}]}>{Routes.SectionList}</Text>
                <Image style={styles.imgBtnh} source={require('../../assets/catHand.png')}></Image>
                </Pressable>
                <Image style={styles.img} source={require('../../assets/cat.png')}></Image>
        </View>
        
    )
}
export default Home;