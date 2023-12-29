import {View, FlatList, StyleSheet, ViewToken} from 'react-native';
import React, {memo} from 'react';
import {TypeToDoItem} from '../../redux/hooks';
import Row from '../general/Row';
import {RichText} from '../general/RichText';
import {Colors, SCREEN} from '../../constants/general';
import RNVectorIcons from '../general/RNVectorIcons';
import EmptyState from '../general/EmptyState';
import {getFormatedDateAndTime} from '../../utility';
import {useSharedValue} from 'react-native-reanimated';
import AnimatedListItem from './AnimatedListItem';

const AllList = ({list}: {list: TypeToDoItem[]}) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={list}
      onViewableItemsChanged={({viewableItems: vItems}) => {
        viewableItems.value = vItems;
      }}
      style={styles.flatlistStyle}
      contentContainerStyle={styles.flatlistContainer}
      ListEmptyComponent={
        <EmptyState
          conStyle={{marginTop: SCREEN.sHeight * 0.2}}
          title={'There is no tasks yet! '}
          desc={'Add few tasks'}
        />
      }
      renderItem={({item}: {item: TypeToDoItem; index: number}) => (
        <AnimatedListItem
          key={item.id}
          viewableItems={viewableItems}
          item={item}>
          <LisItem item={item} />
        </AnimatedListItem>
      )}
      keyExtractor={item => item?.id?.toString()}
    />
  );
};

export default memo(AllList);

const LisItem = ({item}: {item: TypeToDoItem}) => {
  const isDone = item?.done;

  return (
    <View style={styles.listItem}>
      <Row styling={styles.listItemRow}>
        <RichText.Medium styling={styles.text} color={Colors.PRIMARY_20}>
          {item?.text}
        </RichText.Medium>
        <RNVectorIcons
          iconSet={isDone ? 'AntDesign' : 'MaterialIcons'}
          iconCode={isDone ? 'checkcircle' : 'pending-actions'}
          iconSize={20}
          iconColor={Colors.PRIMARY_100}
        />
      </Row>
      <Row styling={styles.listItemRow}>
        {[
          getFormatedDateAndTime(new Date(item?.time)),
          isDone ? 'completed' : 'active',
        ].map(value => {
          return (
            <RichText.Regular fontSize={12} color={Colors.GRAY_70}>
              {value}
            </RichText.Regular>
          );
        })}
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistStyle: {marginTop: 16},
  flatlistContainer: {gap: 12, paddingBottom: 20},
  listItem: {
    backgroundColor: Colors.ACCENT_PRIMARY_50,
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  listItemRow: {justifyContent: 'space-between'},
  text: {flex: 1},
});
