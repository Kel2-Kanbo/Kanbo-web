import { gql } from "@apollo/client";

export const GET_ALL_CUSTOMER = gql`
query MyQuery {
  kanbo_chat_customer(order_by: {id_customer: asc}) {
    email
    id_customer
    nama_customer
    username
    province {
      province_name
    }
    city {
      city_name
    }
    district {
      district_name
    }
    city_id
    district_id
    province_id
  }
}
`

export const DELETE_CUSTOMER_BY_ID = gql`
mutation MyMutation($id_customer: Int) {
  delete_kanbo_chat_customer(where: {id_customer: {_eq: $id_customer}}) {
    returning {
      city_id
      district_id
      email
      id_customer
      nama_customer
      username
      province_id
    }
  }
}
`;