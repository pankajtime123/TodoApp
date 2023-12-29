/* eslint-disable react-hooks/exhaustive-deps */
import React, {MutableRefObject, memo, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Row from '../general/Row';
import {RichText} from '../general/RichText';
import ButtonComponent from '../general/ButtonComponent';
import RNVectorIcons from '../general/RNVectorIcons';
import {Colors} from '../../constants/general';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TypeToDoItem} from '../../redux/hooks';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ToDoItem = ({
  item,
  toggleDone,
  deleteToDoItem,
  editTodoItem,
  index,
  isNewItem,
}: {
  item: TypeToDoItem;
  toggleDone: (id: number) => void;
  deleteToDoItem: (id: number) => void;
  editTodoItem: (index: number) => void;
  index: number;
  isNewItem: MutableRefObject<boolean>;
}) => {
  const scale = useSharedValue(index === 0 && isNewItem.current ? 0.5 : 1);
  const opacity = useSharedValue(index === 0 && isNewItem.current ? 0 : 1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (index === 0 && isNewItem.current) {
      scale.value = withTiming(1, {duration: 400});
      opacity.value = withTiming(1, {duration: 400});
    } else {
      isNewItem.current = true;
    }
  }, []);

  const triggerDelete = (id: number) => {
    isNewItem.current = false;
    scale.value = withTiming(0, {duration: 400}, () => {
      runOnJS(deleteToDoItem)(id);
    });
  };

  return (
    <Animated.View style={[animatedStyles]}>
      <Row styling={styles.itemContainer}>
        <Row styling={{flex: 1}} gap={0}>
          <BouncyCheckbox
            innerIconStyle={styles.check}
            iconStyle={styles.check}
            fillColor={Colors.PRIMARY_100}
            onPress={() => toggleDone(item?.id)}
          />
          <RichText.Medium
            color={Colors.PRIMARY_100}
            styling={{
              flex: 1,
              opacity: item?.done ? 0.4 : 1,
              textDecorationLine: item?.done ? 'line-through' : 'none',
            }}>
            {item.text}
          </RichText.Medium>
        </Row>

        {[
          {set: 'FontAwesome', code: 'pencil'},
          {set: 'MaterialIcons', code: 'delete-outline'},
        ].map((icon, iconIndex) => {
          return (
            <ButtonComponent
              styling={{}}
              onPressAction={() =>
                iconIndex === 0 ? editTodoItem(index) : triggerDelete(item?.id)
              }
              customChild={
                <RNVectorIcons
                  iconSet={icon.set}
                  iconCode={icon.code}
                  iconSize={20}
                  iconColor={Colors.GRAY_50}
                />
              }
            />
          );
        })}
      </Row>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  deleteText: {},
  itemContainer: {
    backgroundColor: Colors.ACCENT_PRIMARY_50,
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  itemText: {},
  done: {},
  check: {
    borderWidth: 2,
    height: 16,
    width: 16,
    borderRadius: 0,
  },
});

export default memo(ToDoItem);
