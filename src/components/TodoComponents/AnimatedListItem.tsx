import React, {ReactNode, memo} from 'react';

import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const AnimatedListItem = ({
  children,
  viewableItems,
  item,
}: {
  children: ReactNode;
  item: any;
  viewableItems: any;
}) => {
  const scrollStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((vItem: any) => vItem.isViewable)
        .find((viewableItem: any) => viewableItem.item?.id === item?.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return <Animated.View style={[scrollStyle]}>{children}</Animated.View>;
};

export default memo(AnimatedListItem);
