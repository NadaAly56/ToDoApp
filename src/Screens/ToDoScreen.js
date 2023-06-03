import { useEffect, useState } from "react";
import {
  SectionList,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import styles from "../Styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AddGroup from "../Components/AddGroup";
import TaskMenu from "../Components/TaskMenu";
import AddTask from "../Components/AddTask";
import { useRoute } from "@react-navigation/native";
const TasksList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Study",
      data: [
        { id: 0, title: "task1", checked: false },
        { id: 1, title: "task2", checked: false },
        { id: 2, title: "task3", checked: false },
      ],
    },
    
  ]);

  const [gvalue, setGValue] = useState(0);
  const {params} = useRoute();
  const [sum, setSum] = useState(0);

  useEffect(()=>{
    params.tasksFun(tasks)
  },[tasks])

  const getValue = (val) => {
    setGValue(val);
  };

  const setTaskfun = (newTask) => {
    let newArr = tasks.map((m) => {
      if (m.id === gvalue) m.data = [...m.data, newTask];
      return m;
    });
    setTasks(newArr);
  };

  const setTasksfun = (newGroup) => {
    setTasks((tasksList) => [...tasksList, newGroup]);
  };

  const getSum = () => {
    let sum = 0;
    tasks.map((t) => {
      sum += t.data.length;
    });
    return sum;
  };
  
  const getSumChecked = () => {
    let newArr = []
    tasks.map((t) => {
        t.data.filter((d) => {
            if (d.checked === true)
                newArr.push(d)
        });
      });
      setSum(newArr.length)
  };
  
  return (
    <View
      style={{ padding: 10 }}
    >
      <AddGroup tasks={tasks} setTasksfun={setTasksfun}></AddGroup>
      <TaskMenu tasks={tasks} getValue={getValue}></TaskMenu>
      <AddTask tasks={tasks} setTaskfun={setTaskfun} value={gvalue}></AddTask>
      <Text style={{ fontSize: 20, margin: 10 }}>
        You done {sum} tasks from {getSum()} tasks
      </Text>
      <SectionList
      style={{height:380}}
      showsVerticalScrollIndicator={false}
        sections={tasks}
        renderSectionHeader={(list) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{list.section.title}</Text>
            <Pressable
              style={styles.deleteBtn}
              onPress={() => {
                const id = list.section.id;
                delete list.section;
                setTasks(t=> t.filter(d=>d.id !== id));
                getSumChecked();
              }}
            >
              <Text style={styles.btnText}>Delete</Text>
            </Pressable>
          </View>
        )}
        renderItem={(itemList) => (
          <View style={styles.taskHeader}>
            {/* <Text style={styles.task}>{itemList.item.title}</Text> */}
            
            <BouncyCheckbox
              style={styles.task}
              size={40}
              fillColor="lightblue"
              unfillColor="#FFFFFF"
              text={itemList.item.title}
              iconStyle={{ borderColor: "lightblue" }}
              innerIconStyle={{ borderWidth: 10, fontSize: "20" }}
              textStyle={{ fontSize: 20 }}
              onPress={(isChecked) => {
                let newArr = tasks.map((t) => {
                  if (t.id === itemList.section.id) {
                    t.data.map((d) => {
                      if (d.id === itemList.item.id) {
                            if (isChecked) d.checked = true
                            else d.checked = false
                      }
                    });
                  }
                  return t;
                });
                setTasks(newArr);
                getSumChecked();
              }}
            />
            <Pressable
              style={styles.deleteBtn}
              onPress={() => {
                const id = itemList.item.id;
                delete itemList.item;
                let newArr = tasks.map((m) => {
                  if (m.id == itemList.section.id)
                    m.data = itemList.section.data.filter((l) => l.id !== id);
                  return m;
                });
                setTasks(newArr);
                getSumChecked();
              }}
            >
              <Text style={styles.btnText}>Delete</Text>
            </Pressable>
          </View>
        )}
      ></SectionList>
    </View>
  );
};
export default TasksList;
