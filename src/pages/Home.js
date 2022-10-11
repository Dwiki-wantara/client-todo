import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Text, View, Box, Input, Select, CheckIcon } from 'native-base'; 
import Masgan from "../assets/masgan.png"
import Card from '../components/Card';

export default function Home({ navigation }) {
    const [service, setService] = React.useState("");
    
  

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Hi, Dwiki</Text>
                <Text style={{color: "#FF5555"}}>200 task</Text>
            </View>

            <View>
                <Avatar bg="green.500" source={Masgan}></Avatar>
            </View>
        </View>

        <View style={{marginTop: 29}}>
            <Box alignItems="center" >
                <Input size="2xl" placeholder="Search List......" width={"100%"} />
            </Box>

            <View style={styles.header}>
                <Box maxW="400">
                    <Select selectedValue={service} width="94" accessibilityLabel="Choose Service" placeholder="Category" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Study" value="study" />
                        <Select.Item label="Home Work" value="home-work" />
                        <Select.Item label="Workout" value="workout" />
                    </Select>
                </Box>
                <Box maxW="400">
                    <Select selectedValue={service} width="94" accessibilityLabel="Choose Service" placeholder="Category" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Study" value="study" />
                        <Select.Item label="Home Work" value="home-work" />
                        <Select.Item label="Workout" value="workout" />
                    </Select>
                </Box>
                <Box maxW="400">
                    <Select selectedValue={service} width="94" accessibilityLabel="Choose Service" placeholder="Status" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Checked" value="checked" />
                        <Select.Item label="On going" value="ongoing" />
                    </Select>
                </Box>
            </View>

            <View style={{marginTop: 29}}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailTodo')}><Card style={{marginBottom: 15, }}/></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})