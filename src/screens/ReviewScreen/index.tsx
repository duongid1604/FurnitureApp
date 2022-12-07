import {StyleSheet, Text, View, Image, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {scaleUI} from '../../utils';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import ReviewBox from '../../components/ReviewBox';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {
  BigCustomButton,
  CustomInput,
  NormalCustomButton,
} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AddPaymentField, AddReviewField, ProductRouteProp} from '../../types';
import {yupResolver} from '@hookform/resolvers/yup';
import useAddReviewScreen from '../../hooks/screens/useAddReviewScreen';

type Props = {};

const Review = ({}: Props) => {
  const route = useRoute<ProductRouteProp>();
  const {item} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultRate, setdefaultRate] = useState();
  const [maxRate, setmaxRate] = useState([1, 2, 3, 4, 5]);
  const starFill = '';

  const schema = yup
    .object({
      comment: yup
        .string()
        .min(2, 'Your review must be at least 16 characters.')
        .required('Review is required!'),
    })
    .required();
  const {onUpdate} = useAddReviewScreen();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddReviewField>({resolver: yupResolver(schema)});
  return (
    <View style={styles.container}>
      <View style={styles.productbox}>
        <Image
          style={styles.img}
          source={require('../../assets/images/product1.jpg')}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rate}>
            <Image
              style={styles.star}
              source={require('../../assets//icons/star.png')}
            />
            <Text style={styles.mark}>{item.rate}</Text>
          </View>
          <Text style={styles.num}>{item.review} review</Text>
        </View>
      </View>
      <ScrollView>
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Let's us know how you feel product
            </Text>
            <View style={styles.viewReview}>
              <CustomInput<AddReviewField>
                label="Your Review"
                field="comment"
                control={control}
                error={errors}
                textInputProps={{
                  maxLength: 16,
                }}
              />
            </View>
            <View style={styles.option}>
              <NormalCustomButton onPress={handleSubmit(onUpdate)}>
                Send
              </NormalCustomButton>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.btn}>
        <BigCustomButton onPress={() => setModalVisible(true)}>
          Write a review
        </BigCustomButton>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  productbox: {
    width: scaleUI(334, false),
    height: scaleUI(100, false),
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  img: {
    width: scaleUI(100, false),
    height: scaleUI(100, false),
  },
  info: {
    marginHorizontal: 20,
  },
  name: {
    color: COLORS.MAIN,
  },
  rate: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  star: {
    marginRight: 10,
    width: scaleUI(25, false),
    height: scaleUI(25, false),
  },
  mark: {
    fontSize: FONT_SIZE.H4,
    color: COLORS.MAIN,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  num: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  btn: {
    bottom: 40,
    marginHorizontal: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  viewReview: {
    width: scaleUI(333, false),
    marginVertical: 18,
  },
  option: {flexDirection: 'row', justifyContent: 'space-between'},
});
