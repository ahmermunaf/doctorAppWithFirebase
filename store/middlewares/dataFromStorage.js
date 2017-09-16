import Main_Action from "./../actions/main_action.js";
import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
import * as firebase from 'firebase';
export default class MainMiddleware {
    static asyncMain() {
        return (dispatch) => {
            firebase.database().ref('list').on('value',snap=>{
                var mainObj = snap.val();
                var arrs = []
                var keys = []
                for(let a in mainObj){
                    keys.push(a)
                    arrs.push(mainObj[a])
                    }
                dispatch(Main_Action.mainData({data:arrs,keys:keys}))
                })
            }
        } 
    static remove(key){
        return(dispatch) => {
            firebase.database().ref('list').child(key).remove()
            dispatch(MainMiddleware.asyncMain())
        }
    }
}