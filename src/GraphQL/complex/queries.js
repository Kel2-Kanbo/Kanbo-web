import { gql } from "@apollo/client";

export const GET_ALL_COMPLEX = gql`
query MyQuery {
  kanbo_chat_complex(order_by: {complex_id: asc}) {
    city_id
    complex_address
    complex_id
    complex_name
    district_id
    diWilayah {
      district_name
    }
    diKota {
      city_name
    }
    banyakBuilding_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;

export const INSERT_COMPLEX = gql`
mutation MyMutation($city_id: Int, 
  $complex_address: String, 
  $complex_id: Int, 
  $complex_name: String, 
  $city_id1: Int, 
  $district_id: Int) {
  insert_kanbo_chat_complex(objects: 
    {city_id: $city_id, 
      complex_address: $complex_address, 
      complex_id: $complex_id, 
      complex_name: $complex_name, 
      district_id: $district_id}) {
    returning {
      city_id
      complex_address
      complex_id
      complex_name
      district_id
    }
  }
}
`;

export const UPDATE_COMPLEX = gql`
mutation MyMutation(
  $complex_id: Int, 
  $city_id: Int, 
  $complex_address: String, 
  $complex_id: Int, 
  $complex_name: String, 
  $district_id: Int) {
  update_kanbo_chat_complex(where: 
    {complex_id: {_eq: $complex_id}}, 
    _set: {city_id: $city_id, 
      complex_address: $complex_address, 
      complex_id: $complex_id, 
      complex_name: $complex_name, 
      district_id: $district_id}) {
    returning {
      city_id
      complex_address
      complex_id
      complex_name
      district_id
    }
  }
}
`;

export const DELETE_COMPLEX = gql`
mutation MyMutation($complex_id: Int) {
  delete_kanbo_chat_complex(where: 
    {complex_id: {_eq: $complex_id}}) {
    returning {
      complex_address
      city_id
      complex_id
      complex_name
      district_id
    }
  }
}
`;