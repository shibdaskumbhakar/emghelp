import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import {closePopup} from '../redux/reducers/popup';
import {useTheme} from '@react-navigation/native';

type Props = {
  handleSuccess: () => void;
};

const Popup: React.FC<Props> = ({handleSuccess}) => {
  const popup = useSelector((state: RootState) => state.popup);
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const close = () => {
    dispatch(closePopup({}));
    handleSuccess();
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
      backgroundColor: colors.card,
      padding: 20,
      borderRadius: 20,
      height: 270,
      width: 250,
      borderColor: colors.border,
    },
    popupText: {
      fontSize: 18,
      marginTop: 10,
      textAlign: 'center',
      color: colors.text,
    },
    image: {
      height: 50,
      width: 50,
      alignContent: 'center',
    },
    image_container: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    btn: {
      flex: 1,
      borderRadius: 5,
      backgroundColor: '#554BE7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn_text: {
      fontWeight: 'bold',
      fontSize: 15,
      color: colors.text,
    },
    type: {
      fontWeight: 'bold',
      fontSize: 22,
      color: colors.text,
      textAlign: 'center',
      marginTop: 18,
    },
  });

  return (
    <View>
      <Modal
        visible={popup?.active}
        animationType="fade"
        transparent={true}
        onRequestClose={close}>
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <View style={styles.image_container}>
              <Image
                source={require('../assets/images/done.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.type}>{popup?.type}</Text>
            <Text style={styles.popupText}>{popup?.message}</Text>
            {/* <Button title="Close" onPress={close} /> */}

            <View style={{height: 33, marginTop: 35}}>
              <TouchableOpacity style={styles.btn} onPress={close}>
                <Text style={styles.btn_text}>{popup?.btnText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Popup;
