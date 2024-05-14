import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
    fundo: {
        flex:1,
    },
    imagemMacaco: {
        marginTop:75,
        marginLeft:125,
        width:140,
        height:140,
    },
    container: {
        flex:1,
        width:'100%'
    },
    Titulo: {
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:26
    },
    Containerform: {
        marginTop:50,
        alignItems:'center'
    },
    input: {
        backgroundColor:"#000",
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        borderRadius:30,
        marginTop:15,
        marginBottom:15,
        color:'#fff',
        textAlign:'center'
    },
    botao: {
        marginTop:25,
        backgroundColor:'#9A2E00',
        padding:15,
        borderRadius:20,
        width:'25%'
    },
    textbotao: {
        color:'#fff',
        textAlign:'center',
        fontSize:13
    },
    textodoinput: {
        marginRight:230,
        justifyContent:'flex-start',
        fontWeight:'bold',
        fontSize:20
    },
    esqueceusenha: {
        justifyContent:'flex-start',
        fontWeight:'bold',
        fontSize:19,
        marginTop:25,
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        width: '100%',
        marginTop:75,
    },
    footer: {
        fontSize:19,
        textAlign:'center',
        marginTop:10,
    },
    branco: {
        color:"white"
    }
});

export default styles