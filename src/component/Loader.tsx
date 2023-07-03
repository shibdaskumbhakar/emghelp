import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Loader = () => {
  const translateXPercentage = -2;
  const translateYPercentage = -36;
  const translateX = (width * translateXPercentage) / 100;
  const translatey = (height * translateYPercentage) / 100;

  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    handleButtonClick();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{translateX: translateX}, {translateY: translatey}],
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default Loader;
