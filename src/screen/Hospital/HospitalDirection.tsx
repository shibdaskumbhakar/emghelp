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
import {useHeaderHeight} from '@react-navigation/elements';
import {useTheme} from '@react-navigation/native';
import {RootStackParamList} from '../../navigator/Stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mapbox from '@rnmapbox/maps';

// import MapboxNavigation from "@homee/react-native-mapbox-navigation";

// MapboxNavigation.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN');

Mapbox.setAccessToken(
  'sk.eyJ1Ijoic2hpYmRhczEyMyIsImEiOiJjbGlnMGpwNHUxNnZuM3FvYmFod2YxcmMxIn0.-j-gRaxyFNLVc8ASaJmquw',
);
Mapbox.setWellKnownTileServer(
  'https://api.mapbox.com/maplibre-gl-js/v2.5.0/maplibre-gl.css',
);

const HospitalDirection: React.FC<{navigation: RootStackParamList}> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();
  const {height} = Dimensions.get('window');

  React.useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {},
      headerStyle: {
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: '#5466EE',
      },
      title: 'Direction',
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
      //   height: height * 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      flex: 1,
    },
    container: {
      backgroundColor: '#5466EE',
      flex: 1,
    },
    heading: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 8,
    },
    input_container: {
      //   paddingHorizontal: 20,
      //   marginTop: 10,
      flex: 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      overflow: 'hidden',
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
    map: {
      flex: 1,
      borderTopLeftRadius: 30,
    },
    container: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.input_container}>
          <Mapbox.MapView style={styles.map}></Mapbox.MapView>
        </View>
      </View>
    </SafeAreaView>


  );
};

export default HospitalDirection;
