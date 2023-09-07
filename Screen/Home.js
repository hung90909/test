import React, { useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderHome from '../compoments/HeaderHome';
import ListItems from '../compoments/ListItems';
import AddItems from '../compoments/addItems';
export default Home = () => {

  const datas = [
    {
      title:"Milk"
    },
    {
      title:"Beef"
    },
    {
      title:"Checkit"
    },
  ]

  const [data , setData] = useState(datas)

  
  const addItems = (text) =>{
     if(!text){
      Alert.alert("Error","Please enter text!",[
       { text:"Ok"}
      ])
     }else{
       setData(item =>
         [{title:text}, ...item]
      )
     }
  }

  const deleteItems = (id) =>{
    const newList = data.filter(item => item.title !== id);
    setData(newList)
  }
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <HeaderHome text="Shopping List" />
      <AddItems addItems={addItems} />
      <FlatList 
      data={data}
      keyExtractor={item => item.title}
      renderItem={({item})=>{
        return(
          <ListItems items={item} deleteItems={deleteItems}/>
        )
      }}
      />
    </SafeAreaView>
  )
}
