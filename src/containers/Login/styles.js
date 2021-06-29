import { StyleSheet ,Dimensions} from 'react-native';
import colors from '../../theme/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:colors.whiteColor
    },
    title: {
        fontSize:windowWidth*0.0536,
        fontFamily: 'Mukta-Regular',
        marginVertical:windowWidth*0.036,
        color:colors.darkGrey
    },
    iconView:{
        height: windowWidth*0.1936,
        width:windowWidth*0.1936,
        borderRadius: (windowWidth*0.1936)/2,
        backgroundColor:colors.primaryColor,
        borderWidth:5,
        borderColor:colors.greyColor,
        alignItems:'center',
        justifyContent:'center'
    },
    userIcon: {
        fontSize:windowWidth*0.096,
        alignSelf: "center",
        color:colors.whiteColor
    },
    input: {
        height: windowWidth*0.136,
        width:windowWidth-windowWidth*0.136,
        borderRadius: windowWidth*0.0136,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop:windowWidth*0.036,
        padding:windowWidth*0.036,
        fontSize:windowWidth*0.046,
        fontFamily: 'Mukta-Regular',
        borderWidth:1,
        borderColor:colors.greyColor,
    },
    button: {
        backgroundColor: colors.primaryColor,
        height: windowWidth*0.136,
        width:windowWidth-windowWidth*0.136,
        borderRadius: windowWidth*0.0136,
        alignItems: "center",
        justifyContent: 'center',
        marginTop:windowWidth*0.136
    },
    buttonTitle: {
        color: colors.whiteColor,
        fontSize:windowWidth*0.0516,
        fontFamily: 'Mukta-Regular',
        fontWeight:'bold'
    },

})