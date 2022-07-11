import { gql } from "@apollo/client";

export const GET_CHATS = gql`
subscription MySubscription($from: String) {
  kanbo_chat_chat(where: {from: {_eq: $from}}) {
    created_at
    from
    id_chat
    msg
    to
  }
}
`