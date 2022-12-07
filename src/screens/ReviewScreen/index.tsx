import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {scaleUI} from '../../utils';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import ReviewBox from '../../components/ReviewBox';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from '../../constants';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  BigCustomButton,
  CustomInput,
  NormalCustomButton,
} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  AddPaymentField,
  AddReviewField,
  ProductRouteProp,
  ProfileRouteProp,
  ReviewScreenRouteProp,
} from '../../types';
import {useAppSelector} from '../../hooks';
import {yupResolver} from '@hookform/resolvers/yup';
import useAddReviewScreen from '../../hooks/screens/useAddReviewScreen';

type Props = {};

const Review = ({}: Props) => {
  const route = useRoute<ReviewScreenRouteProp>();
  const {item} = route.params;
  const route2 = useRoute<ProfileRouteProp>();
  const {item2} = route2.params;
  console.log('data' + item);
  const {reviews} = useAppSelector(state => state.auth.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultRate, setdefaultRate] = useState(3);
  const [maxRate, setmaxRate] = useState([1, 2, 3, 4, 5]);
  const {products} = useAppSelector(state => state.products);
  const starFill =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starconer =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const schema = yup
    .object({
      comment: yup
        .string()
        .min(2, 'Your review must be at least 2 characters.')
        .required('Review is required!'),
      rate: yup
        .string()
        .matches(/^(0?[1-5]|1[012])/)
        .max(1, 'Forget your  rate')
        .required('Rate is required'),
    })
    .required();
  const {onUpdate, user} = useAddReviewScreen();
  const [currentDate, setcurrentDate] = useState(0);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddReviewField>({resolver: yupResolver(schema)});
  const renderItem = ({itemdata}: {itemdata: ReviewType}) => {
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    setcurrentDate(day + '/' + month + '/' + year);
    return (
      <View style={styles.incontainer}>
        <View style={styles.avatar}>
          <Image style={styles.imgavatar} source={{uri: item2?.avatar}} />
        </View>
        <View style={styles.TimeAndName}>
          <View>
            <Text style={styles.name}>{item2?.name}</Text>
            <View style={styles.rating}></View>
          </View>
          <Text style={styles.time}>{currentDate}</Text>
        </View>
        <View style={styles.comments}>
          <Text style={styles.description}>{item.review}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.productbox}>
        <Image style={styles.img} source={{uri: item.image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rate}>
            <Image
              style={styles.star}
              source={require('../../assets//icons/star.png')}
            />
            <Text style={styles.mark}>{item.rate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={reviews}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

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
            <View style={styles.incontainer}>
              <Image style={styles.img} source={{uri: item.image}} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.mark}>$ {item.price}</Text>
              </View>
            </View>
            {/* <CustomRatingBar /> */}

            <View style={styles.viewReview}>
              <CustomInput<AddReviewField>
                label="Your Rating (1->5)"
                field="rate"
                control={control}
                error={errors}
                textInputProps={{
                  maxLength: 1,
                  keyboardType: 'number-pad',
                }}
              />
              <CustomInput<AddReviewField>
                label="Your Review"
                field="comment"
                control={control}
                error={errors}
                textInputProps={{
                  maxLength: 1000,
                }}
              />
            </View>
            <View style={styles.option}>
              <NormalCustomButton onPress={handleSubmit(onUpdate)}>
                Send
              </NormalCustomButton>
              <NormalCustomButton
                onPress={() => setModalVisible(!modalVisible)}>
                Hide Modal
              </NormalCustomButton>
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
  option: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customrate: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  incontainer: {
    flexDirection: 'row',
  },
  avatar: {
    alignItems: 'center',
  },
  imgavatar: {
    width: 40,
    height: 40,
  },
  TimeAndName: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    width: scaleUI(100, false),
  },
  time: {
    color: COLORS.SUB,
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  comments: {
    width: scaleUI(311, false),
    height: scaleUI(200, false),
    marginHorizontal: 20,
    marginVertical: 20,
  },
  description: {
    color: COLORS.SUB,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.H5,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  flatListContainer: {
    height: '100%',
  },
});
