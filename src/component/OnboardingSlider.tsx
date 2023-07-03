import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

interface SlideProps {
  item: {
    id: string;
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
  };
}

const Slide: React.FC<SlideProps> = ({item}) => {
  return (
    <View style={styles.slider}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slider: {
    alignItems: 'center',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '75%',
    width: width,
    resizeMode: 'contain',
  },
});
