import { Box, HStack, Text, VStack, Avatar } from 'native-base'
import { Image } from 'react-native';
import { useContext, useEffect } from 'react'
import { getUserDetails, clearDetails } from "../actions"
import { UsersContext } from '../context';

export default function UserDetails(props) {
    // console.log(props)
    const { state, dispatch } = useContext(UsersContext);
    console.log(state)
    useEffect(() => {
        const resolveAction = async () => {
            dispatch(await getUserDetails(props.route.params.id))
        }
        resolveAction()

        return ()=>{
            dispatch(clearDetails())
        }
    }, [])

    if(state.userDetails.id){
        return (<VStack style={{ backgroundColor: "white", height: "100%" }}>
        <Box style={{marginTop: 10}}>
            <Avatar style={{ marginLeft: 10 }} alignSelf="center" size="2xl" bg="white" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
                AJ
            </Avatar>
        </Box>

        <VStack style={{ alignItems: "center", marginTop:40}}>
            <Text>
                Name: { state.userDetails.name }
            </Text>
            <Text>
                UserName: { state.userDetails.username }
            </Text>
            
            <Text>
                Phone: { state.userDetails.phone }
            </Text>
            <Text>
                Website: { state.userDetails.website }
            </Text>
            <Text>
                Email: { state.userDetails.email }
            </Text>
        </VStack>
      
       

    </VStack>
    );
    }
    else{
        return(
            <Text>Loading User Details...</Text>
        )
    }

   
}