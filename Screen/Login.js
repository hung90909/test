import { useNavigation } from "@react-navigation/native"
import { Text, View, StatusBar, Image, TextInput, TouchableOpacity } from "react-native"



export default Login = () => {

    const nav = useNavigation()
    return (
        <View style={{
            flex: 1, backgroundColor: "#455864"
            , alignItems: "center", paddingHorizontal: 25
        }}>
            <StatusBar
                backgroundColor="#1e323d"
            />
            <Image style={{
                width: 150, height: 100, tintColor: "white",
                marginTop: 60,
            }} source={require("../images/logo.png")} />
            <Text style={{
                fontSize: 24, color: "#acc0cb"
            }}>Welcome to Eleant</Text>
            <TextInput style={{
                width: "100%", marginTop: 50, height: 50, backgroundColor: "#687b86",
                borderRadius: 25, paddingStart: 20, color: "white"
            }} placeholder="Email"
                selectionColor="red"
                placeholderTextColor="white"
                underlineColorAndroid='rgba(0,0,0,0)'
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
            />
            <TextInput style={{
                width: "100%", marginTop: 20, height: 50, backgroundColor: "#687b86",
                borderRadius: 25, paddingStart: 20, color: "white"
            }} placeholder="Password"
                selectionColor="red"
                placeholderTextColor="white"
                underlineColorAndroid='rgba(0,0,0,0)'
                secureTextEntry={true}
                ref={(input) => this.password = input}

            />
            <TouchableOpacity
            onPress={() =>{
                nav.navigate("Home")
            }}
             style={{
                width: "100%", marginTop: 20, height: 50, backgroundColor: "#1e323d",
                borderRadius: 25, justifyContent: "center", alignItems: "center"
            }}>
                <Text style={{
                    color: "white", fontWeight: "500"
                }}>Login</Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: "row", position: "absolute", bottom: 20
            }}>
                <Text style={{
                    color: "#acc0cb"
                }}>Do you have an account? </Text>
                <TouchableOpacity
                onPress={()=>{
                  nav.navigate("Register")
                }}>
                    <Text style={{ color: "white" }}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}