import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../../navigator/Stack';
import {useTheme} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import ImageSlider from '../../component/ImageSlider';
import TabSlide from '../../component/TabSlide';
import HospitalAboutUs from '../../component/HospitalAboutUs';
import HospitalOverview from '../../component/HospitalOverview';

const HospitalDetails: React.FC<{navigation: RootStackParamList}> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();
  const {height, width} = Dimensions.get('window');

  const [activeTab, setActiveTab] = useState(1);

  const images = [
    'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
    'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
    'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
    'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
    'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
    'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
  ];

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
          onPress={() => navigation.navigate('DrawerScreen')}
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
          onPress={() => navigation.navigate('DrawerScreen')}
        />
      ),
    });
  }, [colors.text, navigation]);

  return (
    <SafeAreaView>
      <View>
        <ImageSlider images={images} />
        <TabSlide activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 ? <HospitalOverview /> : <HospitalAboutUs />}
      </View>
    </SafeAreaView>
  );
};

export default HospitalDetails;
