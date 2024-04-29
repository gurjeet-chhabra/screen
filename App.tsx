/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}


function App({}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
   <Text style={{ fontSize:40 , paddingTop:20}}>login</Text>
   <Button title='sign up'></Button>
   <Text style={styles.text}>Hi There, Welcome to MyTime</Text>
   <Text style={{fontSize:20 , paddingBottom:20}}>please enter your login details</Text>
   <View style={{width:400 , height:400 , justifyContent:'center' , borderColor:'black' , borderWidth:1 , padding:10}}>
   <Text >username</Text>
   <TextInput style={{borderBottomColor:'white' ,  borderBottomWidth:1 }}/>
   <Text style={{paddingTop:30}}>password</Text>
   <TextInput style={{borderBottomColor:'white' ,  borderBottomWidth:1}}/>
   </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{
  flex:1,
  //justifyContent:'center',
  alignItems:'center'
  },
  text:{
  fontWeight:'bold',
  fontSize:20,
  padding:30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
