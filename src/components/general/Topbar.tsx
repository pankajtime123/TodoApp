import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from './ButtonComponent';
import RNVectorIcons from './RNVectorIcons';
import {Colors} from '../../constants/general';
import {RichText} from './RichText';

interface Topbar {
  isBackButton?: boolean;
  textAfterBtn?: string;
}

const Topbar = ({isBackButton = true, textAfterBtn}: Topbar) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {isBackButton && (
        <View style={styles.btnAndText}>
          <ButtonComponent
            bouncy
            onPressAction={() => {
              navigation.goBack();
            }}
            customChild={
              <>
                <RNVectorIcons
                  iconSet={'MaterialIcons'}
                  iconCode={'arrow-back-ios'}
                  iconColor={Colors.PRIMARY_100}
                  iconSize={20}
                />
              </>
            }
          />

          {textAfterBtn && (
            <RichText.Regular styling={styles.text}>
              {textAfterBtn}
            </RichText.Regular>
          )}
        </View>
      )}
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.ACCENT_PRIMARY_100,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  btnAndText: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.GRAY_50,
  },
});
