import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import {RootStackParamList} from '../../navigator/Stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Linking, Platform} from 'react-native';

const services: Service[] = [
  {id: '1', name: 'Hospitals 1'},
  {id: '1', name: 'Hospitals 2'},
  {id: '1', name: 'Hospitals 3'},
  {id: '1', name: 'Hospitals 4'},
  {id: '1', name: 'Hospitals 5'},
  {id: '1', name: 'Hospitals 6'},
  {id: '1', name: 'Hospitals 6'},
  {id: '1', name: 'Hospitals 6'},
  {id: '1', name: 'Hospitals 6'},
  {id: '1', name: 'Hospitals 6'},
  {id: '1', name: 'Hospitals 6'},
  {id: '1', name: 'Hospitals 6'},
];

const HospitalList: React.FC<{navigation: RootStackParamList}> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();
  const {height, width} = Dimensions.get('window');

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        {title: 'India', cities: [{title: 'India'}, {title: 'India'}]},
        {title: 'Egypt', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
        {title: 'Canada', cities: [{title: 'Toronto'}, {title: 'Quebec City'}]},
      ]);
    }, 1000);
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {},
      headerStyle: {
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: '#5466EE',
      },
      title: 'Hospital List',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginLeft: 15, marginRight: 20}}
          name={'long-arrow-left'}
          size={25}
          color={colors.text}
          onPress={() => navigation.replace('DrawerScreen')}
        />
      ),
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginLeft: 15, marginRight: 20}}
          name={'home'}
          size={25}
          color={colors.text}
          onPress={() => navigation.replace('DrawerScreen')}
        />
      ),
    });
  }, [colors.text, navigation]);

  const styles = StyleSheet.create({
    main: {
      marginTop: height * 0.1 - headerHeight,
      backgroundColor: colors.background,
      height: height * 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    filterSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    container: {
      backgroundColor: '#5466EE',
    },
    input_container: {
      paddingHorizontal: 20,
      marginTop: 80,
      //   backgroundColor: colors.background,
    },
    input: {
      width: 220,
      height: 50,
      borderColor: colors.text,
      borderWidth: 1,
      marginBottom: 17,
      paddingLeft: 8,
      borderRadius: 12,
      color: colors.background,
      fontSize: 20,
      letterSpacing: 1,
      backgroundColor: colors.text,
    },
    btn: {
      flex: 1,
      height: 40,
      borderRadius: 10,
      backgroundColor: colors.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    btn_text: {
      fontWeight: 'bold',
      fontSize: 15,
      color: colors.text,
    },
    input_heading: {
      color: colors.text,
      marginBottom: 5,
    },
    serviceCard: {
      width: width * 1 - 20,
      height: 200,
      backgroundColor: '#fff',
      marginBottom: 20,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 12,
    },
    buttonSection: {
      // alignItems: 'center',
      // justifyContent: 'space-between',
      flexDirection: 'row',
      gap: 100,
      marginHorizontal: 20,
      marginBottom: -40,
    },
    hospitalDetails: {
      flexDirection: 'row',
      gap: 120,
      marginTop: -40,
    },
    hospitalmoreDetails: {
      flexDirection: 'row',
      gap: 100,
      margin: 10,
    },
    text: {
      color: colors.background,
      fontSize: 15,
      fontWeight: 'bold',
    },
    hospitalname: {
      color: colors.background,
      fontSize: 18,
      fontWeight: 'bold',
    },
    hospitalListCntainer: {
      marginTop: 10,
    },
    serviceName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
    },
    select: {
      height: 50,
    },
    search: {
      height: 50,
    },

    dropdown1BtnStyle: {
      flex: 1,
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
      width: 150,
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', width: 150},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {
      backgroundColor: '#EFEFEF',
      borderBottomColor: '#C5C5C5',
    },
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  });

  const openGoogleMapsDirections = () => {
    const directionsURL = Platform.select({
      ios: 'http://maps.apple.com/?daddr=',
      android: 'https://www.google.com/maps/dir/?api=1&destination=',
    });

    const latitude = 37.7749; // Replace with your destination latitude
    const longitude = -122.4194; // Replace with your destination longitude
    const url = directionsURL + latitude + ',' + longitude;

    Linking.openURL(url);
  };

  const showMoreClick = (hospitalId: string) => {
    navigation.navigate('HospitalDetails', {
      hospitalId: hospitalId,
    });
  };

  const renderServiceCard: React.FC<Items> = ({item}) => (
    <TouchableOpacity>
      <View style={styles.serviceCard}>
        <View style={styles.hospitalDetails}>
          <FontAwesome5 name={'hospital-alt'} color={colors.main} size={50} />
          <View>
            <Text style={styles.hospitalname}>Hospital Name</Text>
            <Text>Short Specilization</Text>
            <Text>Year of stablish</Text>
          </View>
        </View>
        <View style={styles.hospitalmoreDetails}>
          <View>
            <Text style={styles.text}>Pin: 722136</Text>
            <Text style={styles.text}>Mohali, Punjab</Text>
          </View>
          <View>
            <Text style={styles.text}>9:00AM - 5:00PM</Text>
            <Text style={styles.text}>9609572412</Text>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.btn}
            onPress={openGoogleMapsDirections}>
            <Text style={styles.btn_text}>Get Direction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => showMoreClick(item.id)}>
            <Text style={styles.btn_text}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <View style={styles.filterSection}>
          <View style={styles.select}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Select country'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
          <View style={styles.search}>
            <TextInput style={styles.input} placeholder="Search" />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.hospitalListCntainer}>
          <FlatList
            data={services}
            numColumns={1}
            renderItem={renderServiceCard}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingBottom: 150}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HospitalList;
