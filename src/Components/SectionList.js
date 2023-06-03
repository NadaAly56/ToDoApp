import { useEffect } from "react";
import { View, Text, SectionList } from "react-native";
import styles from "../Styles/styles";

const SectionsList =({data})=> {
    
    return <SectionList
    sections={data}
    renderSectionHeader={list=><Text style={[styles.header, {fontSize:35, color:'#fff'}]}>{list.section.title}</Text>}
    renderItem={listItem=><View style={styles.taskHeader}><Text style={styles.task}>{listItem.item.title}</Text></View>}
    ></SectionList>
}
export default SectionsList;