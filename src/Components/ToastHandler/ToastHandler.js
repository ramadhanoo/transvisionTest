import Toast from 'react-native-toast-message';

const success = (title, deskripsi, onPress) => {
  return Toast.show({
    type: 'success',
    text1: title,
    text2: deskripsi,
    position: 'bottom',
    onPress: onPress,
  });
};

const error = (title, deskripsi) => {
  return Toast.show({
    type: 'error',
    text1: title,
    text2: deskripsi,
    position: 'bottom',
  });
};

export {success, error};
