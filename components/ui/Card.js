import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        // 왼쪽에서 오른쪽으로 얼마나 늘어지
        shadowOffset: { width: 0, height: 2 },
        // 그림자가 얼마나 번지는지
        shadowRadius: 6,
        // 그림자 투명도 설정
        shadowOpacity: 0.25
    },
})