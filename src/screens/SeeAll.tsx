import React, {useState} from 'react';

import Wrapper from '../components/general/Wrapper';
import Topbar from '../components/general/Topbar';
import Row from '../components/general/Row';
import {RichText} from '../components/general/RichText';
import {Colors} from '../constants/general';
import {View, StyleSheet} from 'react-native';
import {useAppSelector} from '../redux/hooks';

import ButtonComponent from '../components/general/ButtonComponent';
import AllList from '../components/TodoComponents/AllList';
import RNVectorIcons from '../components/general/RNVectorIcons';

const SeeAll = () => {
  const tasks = useAppSelector(s => s.tasks);
  const [isAsc, setIsAsc] = useState(true);
  const [list, setList] = useState(tasks);
  const [activeTab, setActiveTab] = useState(0);
  let numberOfCompletedItems = tasks.filter(item => !item.done).length;

  const handleFilter = (index: number) => {
    setActiveTab(index);
    switch (index) {
      case 2:
        setList(tasks.filter(item => item.done));
        break;
      case 1:
        setList(tasks.filter(item => !item.done));
        break;
      case 0:
        setList(tasks);
        break;
      default:
        setList(tasks);
        break;
    }
  };

  const sortByDate = () => {
    setList(
      [...list].sort((a, b) =>
        a.time < b.time ? (isAsc ? 1 : -1) : isAsc ? -1 : 1,
      ),
    );
    setIsAsc(prev => !prev);
  };

  return (
    <>
      <Topbar textAfterBtn="See All" />
      <Wrapper>
        <Row styling={styles.counterContainer}>
          <RichText.Head color={Colors.GRAY_50}>
            Tasks needs to be done
          </RichText.Head>
          <RichText.Head color={Colors.PRIMARY_100}>
            {`${numberOfCompletedItems}`}
          </RichText.Head>
        </Row>
        <Filter
          sortByDate={sortByDate}
          handleFilter={handleFilter}
          activeTab={activeTab}
          isAsc={isAsc}
        />
        <AllList list={list} />
      </Wrapper>
    </>
  );
};

export default SeeAll;

const Filter = ({
  handleFilter,
  activeTab,
  sortByDate,
  isAsc,
}: {
  handleFilter: (index: number) => void;
  activeTab: number;
  sortByDate: () => void;
  isAsc: boolean;
}) => {
  return (
    <Row gap={20} styling={styles.filterContainer}>
      <Row>
        {['All', 'Active', 'Completed'].map((item, index) => {
          return (
            <ButtonComponent
              bouncy
              onPressAction={() => handleFilter(index)}
              customChild={
                <View>
                  <RichText.Bold
                    color={
                      activeTab === index ? Colors.PRIMARY_100 : Colors.GRAY_80
                    }>
                    {item}
                  </RichText.Bold>
                </View>
              }
            />
          );
        })}
      </Row>
      <ButtonComponent
        onPressAction={sortByDate}
        customChild={
          <RNVectorIcons
            iconSet={'MaterialCommunityIcons'}
            iconCode={isAsc ? 'sort-reverse-variant' : 'sort-variant'}
            iconSize={20}
            iconColor={Colors.PRIMARY_100}
          />
        }
      />
    </Row>
  );
};

const styles = StyleSheet.create({
  counterContainer: {justifyContent: 'space-between', marginTop: 12},
  filterContainer: {justifyContent: 'space-between', marginTop: 22},
});
