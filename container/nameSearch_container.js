import React, { Component } from 'react';
import NameSearch_Component from './../components/nameSearch_component.js'
import { connect } from 'react-redux';
import MainMiddleware from './../store/middlewares/dataFromStorage.js'
import Reactotron from 'reactotron-react-native'
function mapStateToProps(state) {
    return {
        patientData : state.mainData,
        keys : state.keys
    };
}
  function mapDispatchToProps(dispatch) { 
        return {
          remove : function(value){
          dispatch(MainMiddleware.remove(value))
          }, 
        };
    };
    let indexNo = ''
    let searchItem = ''
    let searchArr = ['Please Search']
    let searchArrIndex = []
class NameSearch_Container extends Component {
  constructor(props){
    super(props)
    this.state = {
      patientData : this.props.patientData,
      keys : this.props.keys,
      dataSearch : '',
      data : [],
      indexCheck : []
    }
  }
  nameSearchData(value){
    searchItem = value
  }
  result(){
    searchArr = []
    for(var i = 0;i<this.state.patientData.length;i++){
      if(searchItem === this.state.patientData[i].name){
        searchArr.push(this.state.patientData[i])
      }
    }
    return searchArr
  }
  remove(value){
    this.props.remove(value)
  }
  key(){
    searchArrIndex = []
    for(var i = 0;i<this.state.patientData.length;i++){
      if(searchItem === this.state.patientData[i].name){
        searchArrIndex.push(this.state.keys[i])
      }
    }
    return searchArrIndex
  }
  render() {
    return (
      <NameSearch_Component data={this.nameSearchData.bind(this)} remove={this.remove.bind(this)} result={this.result.bind(this)} keys={this.key.bind(this)}/>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NameSearch_Container)