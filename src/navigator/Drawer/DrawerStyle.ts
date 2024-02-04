import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  item: {
    marginVertical: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    paddingVertical: 6
},
});

export {styles};
