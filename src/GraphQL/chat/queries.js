import { gql } from "@apollo/client";

export const GET_ALL_CHATS = gql`
subscription MySubscription {
  kanbo_chat_chat {
    created_at
    id_chat
    id_room
    msg
    user
  }
}
`;

export const INSERT_CHAT = gql`
mutation MyMutation($id_room: Int, $msg: String, $user: String) {
  insert_kanbo_chat_chat(objects: {id_room: $id_room, msg: $msg, user: $user}) {
    returning {
      user
      msg
      id_room
      id_chat
      created_at
    }
  }
}
`;

export const GET_ROOM_CHAT = gql`
subscription MySubscription {
  kanbo_chat_roomChat {
    id_room
    user1
    user2
  }
}
`;