import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import foodData from '../model/foodData';

const renderUser = ({item, index}) => {
  return (
    <View style={styles.dayList}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.itemText}>{item.first}</Text>
      <Text style={styles.itemText}>{item.second}</Text>
      <Text style={styles.itemText}>{item.third}</Text>
      <Text style={styles.itemText}>{item.fourth}</Text>
    </View>
  );
};
const RefectoryScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.firstBox}>
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#D1E5F8',
            flexDirection: 'row',
            flex: 1,
          }}>
          <Image
            style={styles.infoIcon}
            source={require('../assets/informationIcon.png')}
          />
          <Text style={styles.textInfo}>
            Bilgi: Yemek saatleri, ücret tarifesi, menülerin ortalama kalorisi,
            yemekhane koşulları; Sağlık Bakanlığı tarafından denetlenmektedir.
          </Text>
        </View>
      </View>
      <View style={styles.yourRemainder}>
        <Text style={styles.remainderText}>Mevcut bakiyeniz: 12.5 TL</Text>
      </View>
      <View style={styles.payMoney}>
        <TouchableOpacity style={styles.payButton}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: '500',
              fontFamily: 'Quicksand',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Bakiye Yükle
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foodListTitle}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: '400',
            fontFamily: 'Quicksand',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 0,
            backgroundColor: '#D1E5F8',
          }}>
          Haftalık Yemek Listesi
        </Text>
      </View>
      <View style={styles.foodList}>
        <View style={{flex: 1}}>
          <FlatList
            horizontal
            data={foodData}
            renderItem={renderUser}
            keyExtractor={(item, index) => index.toString()} //keyExtractor kullanımı
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.foodListMonthly}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: '200',
            marginTop: 15,
            fontFamily: 'Quicksand',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          Aylık yemek listesini görüntülemek için
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '700',
              fontFamily: 'Quicksand',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Tıklayınız
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RefectoryScreen;
const styles = StyleSheet.create({
  firstBox: {
    flex: 83,
  },
  yourRemainder: {
    flex: 66,
    backgroundColor: '#FCF2F0',
    justifyContent: 'center',
  },
  payMoney: {
    flex: 83,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodListTitle: {
    flex: 75,
  },
  foodList: {
    flex: 200,
  },
  foodListMonthly: {
    flex: 80,
    marginTop: 0,
    borderTopWidth: 0.5,
    marginBottom: 25,
  },
  itemText: {
    marginBottom: 6,
    marginLeft: 10,
    marginTop: 2,
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Assistant',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Assistant',
  },
  dayList: {
    height: 180,
    width: 188,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
  },
  infoIcon: {
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 8,
  },
  textInfo: {
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '400',
    marginRight: 7,
    marginLeft: 2,
    paddingHorizontal: 11,
  },
  remainderText: {
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  payButton: {
    height: 47,
    width: 278,
    borderRadius: 200,
    backgroundColor: '#F47325',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 30,
  },
});
