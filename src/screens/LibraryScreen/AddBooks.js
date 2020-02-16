import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Fonts} from '../../assets/fonts/Fonts';

import ButtonComponent from '../../components/Button/ButtonComponent';
class AddBooks extends React.Component {
  state = {
    bookName: '',
    bookDescription: '',
  };

  handleChange = key => value => {
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = e => {
    this.props.createProject(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Text
          style={{fontFamily: Fonts.avenirBlack, fontSize: 30, marginTop: 50}}>
          Add your Book!
        </Text>
        <View
          style={{
            height: '55%',
            width: '100%',
            alignItems: 'center',
            paddingTop: 60,
          }}>
          <TextInput
            placeholder={'Book Name'}
            style={{
              height: 40,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '90%',
              marginBottom: 20,
            }}
            onChangeText={this.handleChange('bookName')}
          />
          <TextInput
            placeholder={'Book Description'}
            style={{
              height: 70,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '90%',
            }}
            multiline={true}
            onChangeText={this.handleChange('bookDescription')}
          />
        </View>
        <ButtonComponent
          title={'Add your Book'}
          onPress={() => this.props.createProject(this.state)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
