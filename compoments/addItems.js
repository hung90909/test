import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"


export default addItem = ({ addItems }) => {
    const [text, setText] = useState("")
    return (
        <View style={{
            paddingHorizontal: 5
        }}>
            <TextInput
                value={text}
                onChangeText={(text) => {
                    setText(text);
                }}
                placeholder="Add item..." />
            <TouchableOpacity
                onPress={() => {
                    setText("")
                    addItems(text)

                }}
                style={{
                    width: "100%", height: 40, backgroundColor: "#bab1d4",
                    justifyContent: "center", alignItems: "center"
                }}>
                <Text style={{ color: "#5e5587", fontWeight: "700" }}>Add Item</Text>
            </TouchableOpacity>
        </View>

    )
}