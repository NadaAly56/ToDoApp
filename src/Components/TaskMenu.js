import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../Styles/styles";
import { useState } from 'react';
const TaskMenu =({tasks, getValue})=> {

    const [value, setValue] = useState(0);
    getValue(value)
    return (
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={tasks}
        search
        maxHeight={300}
        labelField="title"
        valueField="id"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.id);
      
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />
    )
}
export default TaskMenu;