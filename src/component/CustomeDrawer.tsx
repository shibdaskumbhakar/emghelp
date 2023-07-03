import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useTheme, useLinkBuilder} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const {height} = Dimensions.get('window');

type IconsType = {
  [key: string]: string;
};

const icons: IconsType = {
  Home: 'home',
  Services: 'gear',
  AboutUs: 'info-circle',
  TermsConditions: 'clipboard',
  Faqs: 'question-circle',
  Share: 'share-square',
  PrivacyPolicy: 'crosshairs',
  Account: 'user',
};

const CustomeDrawer = (props: any) => {
  const {colors} = useTheme();
  const {state, navigation, descriptors} = props;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'space-between',
    },
    header: {
      marginBottom: 20,
      alignItems: 'center',
      height: height * 0.25,
    },
    user_info: {
      color: colors.text,
      marginTop: 10,
    },
    name: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 18,
    },
    phone: {
      color: colors.text,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 15,
    },
    profileImageContainer: {
      borderRadius: 60,
      borderWidth: 1,
      borderColor: 'black',
      overflow: 'hidden',
    },
    profileImage: {
      width: 120,
      height: 120,
    },
    cameraIcon: {
      position: 'absolute',
      top: 1,
      left: 1,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 5,
    },
    cameraIconImage: {
      width: 30,
      height: 30,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
      flex: 1,
      marginBottom: 20,
      height: height * 0.5,
    },
    footer: {
      borderTopWidth: 1,
      paddingTop: 10,
    },
    footerText: {
      fontSize: 15,
      color: 'gray',
      textAlign: 'center',
      marginTop: 30,
    },
    footerContant: {
      textAlign: 'center',
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 18,
      letterSpacing: 1,
    },
    icons: {
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      gap: 25,
      marginTop: 15,
    },
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={require('../assets/images/doctor1.png')} // Replace with your profile image source
              />
            </View>
            <View style={styles.cameraIcon}>
              <Image
                style={styles.cameraIconImage}
                source={require('../assets/images/done.png')} // Replace with your camera icon source
              />
            </View>
          </TouchableOpacity>
          <View style={styles.user_info}>
            <Text style={styles.name}>Shibdas Kumbhakar</Text>
            <Text style={styles.phone}>+91960957****</Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Render custom items */}
          {state.routes.map((route: any, i: number) => {
            const {
              title,
              drawerLabel,
              drawerLabelStyle,
              drawerItemStyle,
              drawerAllowFontScaling,
            } = descriptors[route.key].options;
            const focused = i === state.index;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const buildLink = useLinkBuilder();

            const focusedRoute = state.routes[state.index];
            const focusedDescriptor = descriptors[focusedRoute.key];
            const focusedOptions = focusedDescriptor.options;

            const {
              drawerActiveTintColor,
              drawerInactiveTintColor,
              drawerActiveBackgroundColor,
              drawerInactiveBackgroundColor,
            } = focusedOptions;

            return (
              <DrawerItem
                key={route.key}
                label={
                  drawerLabel !== undefined
                    ? drawerLabel
                    : title !== undefined
                    ? title
                    : route.name
                }
                // eslint-disable-next-line react/no-unstable-nested-components
                icon={({color, size}) => (
                  <Icon name={icons[route.name]} size={size} color={color} />
                )}
                focused={focused}
                activeTintColor={drawerActiveTintColor}
                inactiveTintColor={drawerInactiveTintColor}
                activeBackgroundColor={drawerActiveBackgroundColor}
                inactiveBackgroundColor={drawerInactiveBackgroundColor}
                allowFontScaling={drawerAllowFontScaling}
                labelStyle={drawerLabelStyle}
                style={drawerItemStyle}
                to={buildLink(route.name, route.params)}
                onPress={() => {
                  navigation.navigate(route.name);
                }}
              />
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContant}>
            <Text style={styles.text}>---- Available on ----</Text>
            <View style={styles.icons}>
              {/* <Icon name="comments" size={30} color="red" /> */}
              <Icon name="facebook-square" size={30} color="#5466EE" />
              <Icon name="instagram" size={30} color="#5466EE" />
              <Icon name="twitter-square" size={30} color="#5466EE" />
            </View>
          </View>
          <Text style={styles.footerText}>Version 1.0.0</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomeDrawer;
