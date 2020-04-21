import {
  Body,
  Container,
  Header,
  Title,
  Left,
  Right,
  Button,
  View,
  Text,
} from 'native-base';
import {Image} from 'react-native';
import React, {Component} from 'react';
import Strings from '../../constants/Strings';
import styles from './styles/SecondScreenStyles';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeaderView() {
    return (
      <Header style={styles.headerView}>
        <Left>
          <Button
            style={styles.imgButton}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../icons/back.png')}
              style={styles.backButton}
            />
          </Button>
        </Left>
        <Body style={styles.headerBody}>
          <Title style={styles.headerTitle}>{Strings.TrafficSignal}</Title>
        </Body>
        <Right>
          <Button style={styles.imgButton}>
            <Image
              source={require('../../icons/setting.png')}
              style={styles.settingButton}
            />
          </Button>
        </Right>
      </Header>
    );
  }

  renderMainView() {
    return (
      <View style={styles.mainView}>
        <View style={styles.firstView}>
          <View style={styles.firstAMBView}>
            <Text>AMB</Text>
          </View>
          <View style={styles.firstAView}>
            <Text>A</Text>
          </View>
          <Text style={styles.firstText10}>10</Text>
        </View>
        <View style={styles.subViewMiddle}>
          <View style={styles.secondView}>
            <View style={styles.secondAMBView}>
              <Text>AMB</Text>
            </View>
            <View style={styles.secondBViewLeft}>
              <Text>B</Text>
            </View>
            <Text style={styles.middleText10}>10</Text>
          </View>
          <View style={styles.thirdView}>
            <Text style={styles.middleText10}>10</Text>
            <View style={styles.thirdBViewRight}>
              <Text>B</Text>
            </View>
            <View style={styles.thirdAMBView}>
              <Text>AMB</Text>
            </View>
          </View>
        </View>
        <View style={styles.forthView}>
          <Text style={styles.forthText10}>10</Text>
          <View style={styles.forthCView}>
            <Text>C</Text>
          </View>
          <View style={styles.forthAMBView}>
            <Text>AMB</Text>
          </View>
        </View>
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
