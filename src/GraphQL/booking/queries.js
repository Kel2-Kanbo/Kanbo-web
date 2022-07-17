import { gql } from "@apollo/client";

export const GET_ALL_BOOKING = gql`
query MyQuery {
  kanbo_chat_booking_details(order_by: {booking_id: asc}) {
    booking_end
    booking_id
    booking_start
    room_id
    total_price
    user
    penyewa {
      id_customer
      nama_customer
      username
    }
    room {
      room_id
      room_name
      status
    }
  }
}
`;

export const UPDATE_STATUS_ROOM_BY_ID = gql`
mutation MyMutation($status: Boolean = false, $room_id: Int) {
  update_kanbo_chat_room(where: {room_id: {_eq: $room_id}}, _set: {status: $status}) {
    returning {
      floor
      price_per_day
      room_description
      room_id
      room_name
      status
      thumbnail
    }
  }
}
`