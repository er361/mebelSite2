 import Relay from 'react-relay';

 export default class AddMebelMutation extends Relay.Mutation {
   static fragments = {
     viewer: () => Relay.QL `fragment on Viewer {
       mebels {
         count
       }
     }`
   }
   getMutation(){
     return Relay.QL `mutation {addMebel}`
   }
   getVariables(){
     return {
       categoryId: this.props.categoryId,
       title: this.props.title,
       img: this.props.img,
       price: this.props.price
     }
   }
   getFatQuery(){
     return Relay.QL `
     fragment on addMebelPayload {
       changedMebelEdge
       viewer {
         mebels{
           count
         }
       }
     }`
   }
   getConfigs(){
     return [
       {
         type: 'RANGE_ADD',
         parentName: 'viewer',
         parentID: this.props.viewer.id,
         connectionName: 'mebels',
         edgeName: 'changedMebelEdge',
         rangeBehaviors: {
           '': 'prepend'
         }
       }
     ]
   }
 }
