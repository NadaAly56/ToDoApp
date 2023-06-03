import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Common/Routes";
import Home from "../Pages/HomePage";
import SectionListScreen from "../Screens/SectionListScreen";
import TasksList from "../Screens/ToDoScreen";
const stack = createNativeStackNavigator();
const Root = ()=> {
    return (
        <stack.Navigator>
            <stack.Screen name={Routes.Home} component={Home}></stack.Screen>
            <stack.Screen name={Routes.ToDos} component={TasksList}></stack.Screen>
            <stack.Screen name={Routes.SectionList} component={SectionListScreen}></stack.Screen>
            </stack.Navigator>
    )
}
export default Root;