import {ImageSourcePropType} from 'react-native';

interface OnboardingSlide {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

export const slides: Array<OnboardingSlide> = [
  {
    id: '1',
    image: require('../assets/images/doctor1.png'),
    title: 'Best Digital Solution',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../assets/images/doctor2.png'),
    title: 'Achieve Your Goals',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../assets/images/doctor3.png'),
    title: 'Increase Your Value',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
