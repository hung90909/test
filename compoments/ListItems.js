import { Text, TouchableOpacity, View } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default ListItems = (props) => {
    const item = props.items
    const deleteItems = props.deleteItems
    return (
        <TouchableOpacity style={{
            padding: 15, borderBottomWidth: 1,
            borderColor: "#eee",
            backgroundColor: "#f8f8f8"
        }}>
            <View style={{
                flexDirection: "row", justifyContent:"space-between"
            }}>
                <Text style={{
                    color: "black", fontWeight: "500"
                }}>{item.title}

                </Text>
              <TouchableOpacity 
              onPress={()=>{
                deleteItems(item.title)
              }}
              style={{
                width:60, height:30, backgroundColor:"red",borderRadius:5,
                justifyContent:"center",alignItems:"center",
                borderWidth:1,borderColor:"gray"
              }}>
                <Text  style={{color:"white"}}>Delete</Text>
              </TouchableOpacity>

            </View>

        </TouchableOpacity>

    )
}