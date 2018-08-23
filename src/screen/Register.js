
import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem, Body } from 'native-base';

class Register extends Component{
   constructor(props){
      super(props)
      this.state={
         name:'',
         username: '',
         password: '',
         email:'',
         hidePassword: true,
         eye: 'eye-off'
      }
   }

   handleChangeName(text){
      console.log(text)
      this.setState({
         name: text
      })
   }

   handleChangeEmail(text){
      console.log(text)
      this.setState({
         email: text
      })
   }

   handleChangeUsername(text){
      console.log(text)
      this.setState({
         username: text
      })
   }

   handleChangePassword(text){
      console.log(text)
      this.setState({
         password: text
      })
   }

   toggleDisplay() {
      this.setState({ hidePassword: !this.state.hidePassword })
      if(this.state.hidePassword === false){
         this.setState({
            eye: 'eye-off'
         })
      }
      if(this.state.hidePassword === true){
         this.setState({
            eye: 'eye'
         })
      }
   }

   Submit(e){
      e.preventDefault();
      console.log("INI HASIL: ", this.state)

      //Send state to db
   }

   render() {
      return (
         <Container>
            <Content>
               <Card style={{flex: 1}}>
                  {/* <CardItem header style={{backgroundColor: "#009BD2"}}>
                     <Text style={styles.headerText}>Register</Text>
                  </CardItem> */}
                  <CardItem>
                     <Body>
                        <Form style={{width:'100%'}}>
                           <Item floatingLabel>
                              <Label>Name</Label>
                              <Input name="name" value={this.state.username} onChangeText={(text)=> this.handleChangeName(text)} />
                           </Item>
                           <Item floatingLabel>
                              <Label>Email</Label>
                              <Input name="email" value={this.state.username} onChangeText={(text)=> this.handleChangeEmail(text)} />
                           </Item>
                           <Item floatingLabel>
                              <Label>Username</Label>
                              <Input name="username" value={this.state.username} onChangeText={(text)=> this.handleChangeUsername(text)} />
                           </Item>
                           <Item floatingLabel last>
                              <Label>Password</Label>
                              <Input secureTextEntry={this.state.hidePassword} name="password" value={this.state.password} onChangeText={(text)=> this.handleChangePassword(text)}  />
                              <Icon name={this.state.eye} onPress={(e) => this.toggleDisplay(e)} color="white"/> 
                           </Item>
                        </Form>
                     </Body>
                  </CardItem>
                  <CardItem footer>
                     <Button block style={{backgroundColor: "#009BD2", width:"100%"}} onPress={(e)=>this.Submit(e)}>
                        <Text style={{color: "white"}}>Register</Text>
                     </Button>
                  </CardItem>
               </Card>
            </Content>
         </Container>
      );
   } 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   },
   headerText:{
      alignItems: 'center', 
      textAlignVertical: 'center', 
      fontSize: 25, 
      color:'white'
   }
})

export default (Register);