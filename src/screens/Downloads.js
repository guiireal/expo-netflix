import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, gStyle } from '../api/constants';

import Cast from '../components/Cast';
import Header from '../components/Header';

import SvgDownloads from '../components/icons/Svg.Downloads';

const Downloads = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header
        bg={colors.downloadsHeaderBg}
        navigation={navigation}
        showLogo={false}
        title="My Downloads"
      />

      <View style={styles.containerIcon}>
        <SvgDownloads fill={colors.bgGrey} size={120} />
      </View>

      <Text style={styles.description}>
        Movies and TV shows that you download appear here.
      </Text>

      <View style={styles.button}>
        <Text style={styles.buttonText}>FIND SOMETHING TO DOWNLOAD</Text>
      </View>

      <Cast navigation={navigation} />
    </View>
  );
};

Downloads.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerIcon: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.downloadsIconBg,
    borderRadius: 96,
    height: 192,
    justifyContent: 'center',
    marginBottom: 32,
    marginTop: 48,
    width: 192
  },
  description: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    width: 300
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 16
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Downloads;