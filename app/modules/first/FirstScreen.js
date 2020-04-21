import {Body, Container, View, Header, Title, Button} from 'native-base';
import React, {Component} from 'react';
import Strings from '../../constants/Strings';
import styles from './styles/FirstScreenStyles';

class FirstScreen extends Component {
  renderHeaderView() {
    return (
      <Header style={styles.headerView}>
        <Body style={styles.headerBody}>
          <Title style={styles.headerTitle}>{Strings.TrafficSignal}</Title>
        </Body>
      </Header>
    );
  }

  renderMainView() {
    return (
      <View style={styles.mainView}>
        <Button
          style={styles.ambButton}
          onPress={() => this.props.navigation.navigate('SecondScreen')}>
          <Title style={styles.ambTitle}>{Strings.Ambulance}</Title>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderHeaderView()}
        {this.renderMainView()}
      </Container>
    );
  }
}

export default FirstScreen;
