import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';

class AddBooks extends React.Component {
  state = {
    bookName: '',
    bookDescription: '',
  };

  handleChange = key => value => {
    console.log(value);
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = e => {
    this.props.createProject(this.state);
  };

  render() {
    return (
      <View>
        <Text></Text>
        <TextInput
          placeholder={'BookName'}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
            marginBottom: 30,
          }}
          onChangeText={this.handleChange('bookName')}
        />
        <TextInput
          placeholder={'Book Description'}
          style={{
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
          }}
          multiline={true}
          onChangeText={this.handleChange('bookDescription')}
        />
        <Button
          title={'Done'}
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
    justifyContent: 'center',
    alignItems: 'center',
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
