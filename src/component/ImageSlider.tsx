import React, {useState} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useTheme} from '@react-navigation/native';

interface ImageSliderProps {
  images: any[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {colors} = useTheme();

  const renderImageItem = ({}: {item: any}) => (
    <Image
      source={{
        uri: 'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg',
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );

  const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      height: 200,
    },
    image: {
      width: Dimensions.get('window').width,
      height: 200,
    },
    paginationContainer: {
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
    },
    inactiveDot: {
      backgroundColor: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderImageItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default ImageSlider;
