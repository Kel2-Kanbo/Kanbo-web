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
`;

export const INSERT_ROOM_CHAT = gql`
mutation MyMutation($user1: String, $user2: String) {
  insert_kanbo_chat_roomChat(objects: {user1: $user1, user2: $user2}) {
    returning {
      id_room
    }
  }
}
`;

export const GET_ROOM_CHAT = gql`
query MyQuery {
  kanbo_chat_roomChat {
    id_room
    user1
    user2
  }
}
`;