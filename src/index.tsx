import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './_navHook';
import {StackNavigationProp} from '@react-navigation/stack';
import splashImage from '../assets/images/ecommerce-splash.jpg';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants/Colors';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <ImageBackground
        source={splashImage}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={styles.container}>
          <LinearGradient
            colors={[
              'transparent',
              '#rgba(255,255,255,0.9)',
              'rgba(255,255,255,1)',
            ]}
            style={styles.background}>
            <View style={styles.wrapper}>
              <Text style={styles.title}>BCMobile</Text>
              <Text style={styles.description}>
                BCMobile, the only app for your daily needs!
              </Text>
              <View style={styles.socialLoginWrapper}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.buttonText}>Continue with Email</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Go to SignUp Screen</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight: '700',
    letterSpacing: 2.4,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  socialLoginWrapper: {},
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
