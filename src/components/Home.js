import { Box, Button, Text } from 'native-base'
import { Image } from 'react-native';

export default function Home(props){
    
    return (<Box style={{ backgroundColor:"white", height: "100%"}}>
        <Image
        source={{ uri: "https://previews.123rf.com/images/yupiramos/yupiramos1702/yupiramos170204362/70860122-grupo-de-personas-que-usan-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-tel%C3%A9fono-inteligente.jpg" }}
        style={{ width: 400,height:500, marginTop:20}}
      />

        <Box style={{ marginTop:20 }}>
            <Button variant="solid" size="sm" colorScheme='dark' onPress={()=>{
                props.navigation.navigate("UserList");
            }}>
                Let's See Some Friends
            </Button>
        </Box>
 
    </Box>
    );
}