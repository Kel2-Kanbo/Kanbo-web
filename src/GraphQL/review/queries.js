import { gql } from "@apollo/client";

export const GET_ALL_REVIEW = gql`
query MyQuery {
  kanbo_chat_review(order_by: {review_id: asc}) {
    review
    review_id
    room_id
    user
    reviewer {
      id_customer
      nama_customer
    }
    room {
      room_id
      room_name
    }
  }
}

`