/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import {RootStackParamList} from '../../navigator/Stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import BellIconWithBadge from '../../component/BellIconWithBadge';

const {height} = Dimensions.get('window');

interface Service {
  name: string;
}

interface Items {
  item: Service;
}

const services: Service[] = [
  {name: 'Hospitals 1'},
  {name: 'Hospitals 2'},
  {name: 'Hospitals 3'},
  {name: 'Hospitals 4'},
  {name: 'Hospitals 5'},
  {name: 'Hospitals 6'},
];

const Home: React.FC<{navigation: RootStackParamList}> = ({navigation}) => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();

  React.useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {},
      headerStyle: {
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: '#5466EE',
      },
      headerLeft: () => (
        <Icon
          style={{marginLeft: 15, marginRight: 20}}
          name={'align-left'}
          size={25}
          color={colors.text}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <BellIconWithBadge badgeCount={3} color={colors.text} size={25} />
      ),
    });
  }, [colors.text, navigation]);

  const styles = StyleSheet.create({
    main: {
      marginTop: height * 0.25 - headerHeight,
      backgroundColor: colors.background,
      height: height * 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    container: {
      backgroundColor: '#5466EE',
    },
    heading: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 38,
    },
    input_container: {
      paddingHorizontal: 20,
      marginTop: 80,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 17,
      paddingLeft: 8,
      borderRadius: 12,
      color: colors.text,
      fontSize: 20,
      letterSpacing: 2,
    },
    btn: {
      flex: 1,
      height: 50,
      borderRadius: 5,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn_text: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    input_heading: {
      color: colors.text,
      marginBottom: 5,
    },
    serviceCard: {
      width: Dimensions.get('window').width / 2 - 40,
      height: 150,
      backgroundColor: '#fff',
      marginBottom: 20,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 12,
    },
    serviceName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
    },
  });

  const renderServiceCard: React.FC<Items> = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('HospitalList')}>
      <View style={styles.serviceCard}>
        <View>
          <Icon name={'plus-square'} size={50} color={colors.main} />
        </View>
        <Text style={styles.serviceName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.input_container}>
          <FlatList
            data={services}
            numColumns={2}
            renderItem={renderServiceCard}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
