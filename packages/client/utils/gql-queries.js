import gql from 'graphql-tag';

const productFragment = `
  id
  name
  url
  prodcatCode
  prodcatName
  prodsubcatCode
  prodsubcatName
  size
  color
  costDollar
  costRub
`;

const orderFragment = `
    id
    name
    orderNumber
    date
    dateString
    status
    statusName
    deliveryAddress
    deliveryType
    deliveryTypeName
    productsCostSumRub
    costTotalRub
    products {
      ${productFragment}
    }
`

export const gqlUserCreate = gql`mutation userCreate($input: UserCreateInput!) {
  userCreate(input: $input) {
    user {
      email
      nameFirst
      nameLast
      tel
      city
    }
    errors {
      errors {
        code
        message
      }
    }
  }
}
`

export const gqlUserPasswordRestore = gql`mutation userPasswordRestore($email:String!) {
  userPasswordRestore(email: $email) {
    isSuccess
    errors {
      code
      message
    }
  }
}`

export const gqlTarifCategoriesGet = gql`query tarifCategoriesGet {
  tarifCategoriesGet {
    prodcat
    prodsubcats
  }
}
`

export const gqlOrderByIdGet = gql`
  query orderByIdGetResolver($orderId: String!) {
    orderByIdGetResolver(orderId: $orderId) {
      ${orderFragment}
    }
  }
`

export const gqlOrderCreate = gql`
  mutation orderCreate($input:ProductCreateInput!) {
    orderCreate(input:$input) {
      ${orderFragment}
    }
  }
`

export const gqlOrderDelete = gql`
  mutation orderDelete($orderId: String!) {
    orderDelete(orderId: $orderId) {
      ${orderFragment}
    }
  }
`

export const gqlOrdersAllGet = gql`
  query ordersGet {
    ordersGet {
      ${orderFragment}
    }
  }
`

export const gqlProductCreate = gql`
  mutation productCreate($orderId: String!, $product: ProductCreateInput!) {
    productCreate(orderId: $orderId, product: $product) {
      ${productFragment}
    }
  }
`

export const gqlProductUpdateMutation = gql`
  mutation productUpdate($productId: String!, $product: ProductUpdateInput!) {
    productUpdate(productId: $productId, product: $product) {
      ${productFragment}
    }
  }
`

export const gqlProductDelete = gql`
  mutation productDelete($productId:String!) {
    productDelete(productId:$productId) {
      ${productFragment}
    }
  }
`
