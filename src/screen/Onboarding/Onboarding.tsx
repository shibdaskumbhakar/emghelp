import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Slide from '../../component/OnboardingSlider';
import {slides} from '../../constant';
import {RootStackParamList} from '../../navigator/Stack';

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#282534', white: '#fff'};

interface SlideItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

const OnboardingScreen: React.FC<{navigation: RootStackParamList}> = ({
  navigation,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<FlatList<SlideItem>>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('Login')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
        keyExtractor={item => item.id}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
