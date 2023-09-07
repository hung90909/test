import { Text, View } from "react-native"

export default HeaderHome = (props) =>{
    const text = props.text
    return(
        <View style={{
            width:"100%", height:45, backgroundColor:"#455864",
            justifyContent:"center", alignItems:"center"
        }}>
           <Text style={{
            color:"white", fontSize:18
           }}>{text}</Text>
        </View>
    )
}