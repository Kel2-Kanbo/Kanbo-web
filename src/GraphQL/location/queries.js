import { gql } from "@apollo/client";

export const GET_ALL_CITY = gql`
query MyQuery {
  kanbo_chat_city {
    city_name
    city_id
  }
}
`;

export const GET_ALL_PROVINCE = gql`
query MyQuery {
  kanbo_chat_province {
    province_name
    province_id
  }
}
`;

export const GET_ALL_DISTRICT = gq`
query MyQuery {
  kanbo_chat_district {
    district_name
    district_id
  }
}
`;