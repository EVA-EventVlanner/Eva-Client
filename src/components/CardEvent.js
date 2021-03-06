//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
// create a component
import { connect } from "react-redux";
import { fetchingDataEvent } from "../actions/eventActions";
import ModalPasswordEvent from "./ModalPasswordEvent";

class CardEvent extends Component {
  render() {
    console.log('user id di card event : ', this.props.userId)
    const item = this.props.item;
    const imgUrl = item.imageUrl;
    const navigation = this.props.navigation;
    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.eventName}</Text>
              <Text note>Creator : {item.admin.name} </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{ uri: imgUrl }}
              style={{
                height: 200,
                width: "100%",
                alignContent: "center",
                alignItems: "center"
              }}
            />
            <Text style={{ marginTop: 10 }}>{item.description}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <ModalPasswordEvent
              navigation={navigation}
              eventId={item._id}
              event={item}
              userId={this.props.userId}
            />
          </Left>
        </CardItem>
      </Card>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//       data : state.pmReducer.accounts
//     }
//   }
const mapDispatchToProps = dispatch => {
  return {
    fetchingDataEvent: () => dispatch(fetchingDataEvent())
  };
};

//make this component available to the app
export default connect(
  null,
  mapDispatchToProps
)(CardEvent);
