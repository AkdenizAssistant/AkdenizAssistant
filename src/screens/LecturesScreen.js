import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

const LecturesScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Ders Programı</Text>
      </View>
      <View style={styles.lecturesProgramTable}>
        <Image
          source={require('../assets/lectureProgram.png')}
          style={styles.lectureImage}
        />
      </View>
      <View style={styles.gradeList}>
        <TouchableOpacity style={styles.gradeListButton}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: '500',
              fontFamily: 'Quicksand',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Not Listesi
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewCalender}>
        <TouchableOpacity>
          <Text style={styles.textCalender}>
            2020 - 2021 Eğitim - Öğretim Yılı Akademik Takvimini Görüntülemek
            İçin
            <Text style={styles.textClick}> TIKLAYINIZ.</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LecturesScreen;
const styles = StyleSheet.create({
  title: {
    flex: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lecturesProgramTable: {
    flex: 380,
  },
  gradeList: {
    flex: 78,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  viewCalender: {
    flex: 80,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    marginTop: 10,
    marginBottom: 3,
  },
  lectureImage: {
    flex: 1,
    marginTop: 5,
  },
  gradeListButton: {
    height: 47,
    width: 278,
    borderRadius: 200,
    backgroundColor: '#F47325',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textCalender: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },
  textClick: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
