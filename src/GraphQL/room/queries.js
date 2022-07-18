import { gql } from "@apollo/client";
export const GET_DATA_ROOM = gql`
  query MyQuery {
    kanbo_chat_room(order_by: { room_id: asc }) {
      thumbnail
      status
      room_name
      room_id
      room_description
      price_per_day
      floor
      building_id
    }
  }
`;

export const INSERT_ROOM = gql`
  mutation MyMutation(
    $floor: String
    $building_id: Int
    $price_per_day: Int
    $room_description: String
    $room_name: String
    $thumbnail: String
  ) {
    insert_kanbo_chat_room(
      objects: {
        floor: $floor
        price_per_day: $price_per_day
        building_id: $building_id
        room_description: $room_description
        room_name: $room_name
        status: false
        thumbnail: $thumbnail
      }
    ) {
      returning {
        floor
        building_id
        price_per_day
        room_description
        room_id
        room_name
        status
        thumbnail
      }
    }
  }
`;
export const UPDATE_ROOM = gql`
  mutation MyMutation(
    $room_id: Int
    $building_id: Int
    $floor: String
    $price_per_day: Int
    $room_description: String
    $room_name: String
    $status: Boolean = false
    $thumbnail: String
  ) {
    update_kanbo_chat_room(
      where: { room_id: { _eq: $room_id } }
      _set: {
        building_id: $building_id
        floor: $floor
        price_per_day: $price_per_day
        room_description: $room_description
        room_name: $room_name
        status: $status
        thumbnail: $thumbnail
      }
    ) {
      returning {
        building_id
        price_per_day
        floor
        room_description
        room_id
        room_name
        status
        thumbnail
      }
    }
  }
`;

export const DELETE_ROOM_BY_ID = gql`
  mutation MyMutation($room_id: Int) {
    delete_kanbo_chat_room(where: { room_id: { _eq: $room_id } }) {
      returning {
        building_id
        thumbnail
        status
        room_description
        room_id
        room_name
        price_per_day
        floor
      }
    }
  }
`;
