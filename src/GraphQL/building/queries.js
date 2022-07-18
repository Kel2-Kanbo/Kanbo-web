import { gql } from "@apollo/client"

export const GET_ALL_BUILDING = gql`
query MyQuery {
  kanbo_chat_building(order_by: {building_id: asc}) {
    building_address
    building_id
    building_name
    description
    complex_id
    punyaRoom_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;

export const INSERT_BUILDING = gql`
mutation MyMutation(
  $building_address: String, 
  $building_name: String, 
  $complex_id: Int, 
  $description: String) {
  insert_kanbo_chat_building(objects: 
    {building_address: $building_address, 
      building_name: $building_name, 
      complex_id: $complex_id, 
      description: $description}) {
    returning {
      building_address
      building_id
      building_name
      complex_id
      description
    }
  }
}
`;

export const UPDATE_BUILDING = gql`
mutation MyMutation(
  $building_id: Int, 
  $building_address: String, 
  $building_name: String, 
  $complex_id: Int, 
  $description: String) {
  update_kanbo_chat_building(where: 
    {building_id: {_eq: $building_id}}, 
    _set: {building_address: $building_address, 
      building_name: $building_name, 
      complex_id: $complex_id, 
      description: $description}) {
    returning {
      building_id
      building_address
      building_name
      complex_id
      description
    }
  }
}
`;

export const DELETE_BUILDING = gql`
mutation MyMutation($building_id: Int) {
  delete_kanbo_chat_building(where: 
    {building_id: {_eq: $building_id}}) {
    returning {
      building_id
      building_name
    }
  }
}
`