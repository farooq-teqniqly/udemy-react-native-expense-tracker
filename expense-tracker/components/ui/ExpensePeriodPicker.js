import { View, Picker } from "react-native";

function ExpensePeriodPicker({period, setPeriod}) {
    function valueChangedHandler(itemValue, itemIndex) {
        console.log(`${itemValue}, ${itemIndex}`);
        setPeriod(itemValue);
    }

    return (
        <View>
            <Picker onValueChange={valueChangedHandler} selectedValue={period}>
                <Picker.Item label="7 days" value="7"></Picker.Item>
                <Picker.Item label="5 days" value="5"></Picker.Item>
                <Picker.Item label="1 day" value="1"></Picker.Item>
            </Picker>
        </View>
    );
};

export default ExpensePeriodPicker;
