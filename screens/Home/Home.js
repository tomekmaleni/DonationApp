import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

import {useSelector, useDispatch} from 'react-redux';
// import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {
  // resetCategories,
  updateSelectedCategoryId,
} from '../../redux/reducers/Categories';
// import {resetDonations} from '../../redux/reducers/Donations';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const dispatch = useDispatch();
  // dispatch(resetToInitialState());
  // dispatch(resetCategories());
  // dispatch(resetDonations());

  const categoryPageSize = 4;
  const [categoryCurrentPage, setCategoryCurrentPage] = useState(1);
  const [categoryRenderedList, setCategoryRenderedList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const [donationRenderedItems, setDonationRenderedItems] = useState([]);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingCategories(true);
    const getInitialDataCategories = pagination(
      categories.categories,
      categoryCurrentPage,
      categoryPageSize,
    );
    setCategoryRenderedList(getInitialDataCategories);
    setCategoryCurrentPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  useEffect(() => {
    const filteredItems = donations.items.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationRenderedItems(filteredItems);
  }, [categories.selectedCategoryId]);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.section, style.header]}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
          </View>
          <Image
            style={style.profileImage}
            source={{uri: user.profileImage}}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.section}>
          <Search
            onSearch={value => {
              // console.log(value);
            }}
          />
        </View>
        <Pressable style={style.section}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.section}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={[style.section, style.categories]}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              const contentToAppend = pagination(
                categories.categories,
                categoryCurrentPage,
                categoryPageSize,
              );
              if (contentToAppend.length > 0) {
                setCategoryRenderedList(prev => [...prev, ...contentToAppend]);
                setCategoryCurrentPage(prev => prev + 1);
              }
              setIsLoadingCategories(false);
            }}
            data={categoryRenderedList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationRenderedItems.length > 0 && (
          <View style={[style.section, style.donationItemsContainer]}>
            {donationRenderedItems.map(item => (
              <SingleDonationItem
                key={item.donationItemId}
                onPress={selectedDonationItemId => {
                  console.log(selectedDonationItemId);
                }}
                donationItemId={item.donationItemId}
                badgeTitle={
                  categories.categories.filter(
                    value => value.categoryId === categories.selectedCategoryId,
                  )[0].name
                }
                uri={item.image}
                donationTitle={item.name}
                price={parseFloat(item.price)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
