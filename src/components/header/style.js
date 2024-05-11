import { StyleSheet } from "react-native"; 

const style = StyleSheet.create({
    header: {
      position: 'fixed',
      height: 60,
      flexDirection: 'row',
      backgroundColor: '#FBB039',
      justifyContent: 'flex-end',
      
    },
    menuOpener: {
      height: 40,
      marginTop:10,
      marginRight: 15,
      backgroundColor: 'black',
      paddingHorizontal: 20,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cartCount: {
      marginRight: 10,
      color: 'white',
    },
  });
  
export default style;
