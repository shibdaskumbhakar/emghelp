import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface TabSliderProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const TabSlide: React.FC<TabSliderProps> = ({activeTab, setActiveTab}) => {
  const {colors} = useTheme();

  const handleTabPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const styles = StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      marginHorizontal: 20,
      borderRadius: 20,
      marginTop: 5,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
    activeTab: {
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      borderRadius: 20,
    },
    activeTabText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 1 && styles.activeTab]}
        onPress={() => handleTabPress(1)}>
        <Text style={activeTab === 1 ? styles.activeTabText : styles.tabText}>
          Overview
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabItem, activeTab === 2 && styles.activeTab]}
        onPress={() => handleTabPress(2)}>
        <Text style={activeTab === 2 ? styles.activeTabText : styles.tabText}>
          About Us
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabSlide;
