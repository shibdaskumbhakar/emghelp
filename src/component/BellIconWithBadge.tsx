import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BellIconWithBadgeProps {
  badgeCount: number;
  color: string;
  size: number;
}

const BellIconWithBadge: React.FC<BellIconWithBadgeProps> = ({
  badgeCount,
  color,
  size,
}) => {
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      marginRight: 20,
    },
    badge: {
      position: 'absolute',
      top: -8,
      right: -8,
      backgroundColor: 'red',
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Icon name="bell" size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

export default BellIconWithBadge;
