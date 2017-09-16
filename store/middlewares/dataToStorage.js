import PatientData_Action from "./../actions/patientData_action.js";
import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
import * as firebase from 'firebase';
export default class CounterMiddleware {
    static asyncPatientData(data) {
        return (dispatch) => {
            var storageValue = []
            var emptyArr = []
            var userData = data
            firebase.database().ref('list').push(userData)
            dispatch(PatientData_Action.patientData(userData))
        }
    } 
}