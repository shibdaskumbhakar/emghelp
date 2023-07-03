import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeDrawer from '../component/CustomeDrawer';
import {useTheme} from '@react-navigation/native';
import Home from '../screen/Home/Home';
import Services from '../screen/Home/Services';
import AboutUs from '../screen/Home/Aboutus';
import TermsConditions from '../screen/Home/TermsConditions';
import Faqs from '../screen/Home/Faqs';
import PrivacyPolicy from '../screen/Home/PrivacyPolicy';
import Share from '../screen/Home/Share';
import Account from '../screen/Home/Account';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomeDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.card,
          zIndex: 100,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
        },
        drawerPosition: 'left',
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="TermsConditions" component={TermsConditions} />
      <Drawer.Screen name="Faqs" component={Faqs} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="Share" component={Share} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
