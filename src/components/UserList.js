import { Box, Button, FlatList, Text } from 'native-base'
import { useContext, useEffect } from 'react'
import { getUsers } from '../actions';
import { UsersContext } from '../context';
import User from './userObject';
import { StyleSheet } from 'react-native'

export default function UserList(props){
    const {state, dispatch} = useContext(UsersContext);
    console.log(state)
    
    useEffect(()=>{
      const resolveAction = async ()=>{
        dispatch( await getUsers())
      }
      resolveAction() 
    },[])

    return (<Box style={{ backgroundColor:"white", height:"100%"}}>
        <Text> 
          <FlatList
            data={state.userList}
            renderItem={
              ({item})=> <User item = {item} {...props}/>
            }


            ListHeaderComponent= {()=>
              <Text style={style.header}>Users Info</Text>
            }

            ItemSeparatorComponent = {()=>
              <Text>_____________________________________________________________________________________</Text>
            }
          />
        </Text>
    </Box>
    );
}


const style = StyleSheet.create({
  header: {
    // marginTop: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#225262',
    marginBottom: 20,
    paddingLeft: 140,
    padding: 10
  },

})
