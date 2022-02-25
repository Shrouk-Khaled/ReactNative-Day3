import { Box, Text, Avatar, ArrowForwardIcon, VStack, HStack, Button } from "native-base";

export default function User({ item, navigation }) {
    console.log(item)
    if (item.id) {
        return (
            <Box>
                <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Avatar style={{ marginLeft:10 }} bg="white" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        AJ
                    </Avatar>

                        <HStack>
                            <VStack style={{ width:270 }}>
                                <Text style={{ marginLeft: 20}}>{item.name}</Text>
                                <Text style={{ marginLeft: 20 }}>{ item.email }</Text>

                            </VStack>
                            <Button onPress={()=>{
                                navigation.navigate({
                                        name: "UserDetails",
                                        params:{
                                            id: item.id,
                                        }
                                    })
                            }} 
                            variant="ghost"
                            colorScheme="secondery"
                            >
                                <ArrowForwardIcon size="5"/>
                            </Button>
                                
                            
                        </HStack>

                   
                    
                </Box>
               
            </Box>
        )
    }
    return <Text>NO USERS</Text>
}