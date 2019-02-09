Reference:
https://egghead.io/courses/building-serverless-web-applications-with-react-aws-amplify
https://github.com/aws-amplify

---

## 1. install aws amplify cli

```shell
npm install -g @aws-amplify/cli
# config: create IAM user and config to amplify
amplify configure
```

## 2. create react app

```shell
npx create-react-app react-aws-amplify
amplify init
yarn add aws-amplify aws-amplify-react
```

## 3. authorization flow

#### create cognito

```shell
amplify add auth
amplify push
```

#### apply cognito sign-in / sign-out with default style

```javascript
// @index.js
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

// @App.js
import { withAuthenticator } from 'aws-amplify-react'
...
export default withAuthenticator(App, { includeGreetings: true });
```

#### check service create by amplify

```shell
amplify status
```

## 4. custom sign-up process

```javascript
import { Auth } from 'aws-amplify';
...
Auth.signUp({
  username,
  password,
  attributes: { email, phone_number },
});
...
Auth.confirmSignUp({
  username,
  authenticationCode,
});
```

## 5. create AppSync for GraphQL API

```shell
amplify add api
(select GrahpQL)
amplify push
```

```javascript
import { API, graphqlOperation } from 'aws-amplify
const ListTodos = `
  query {
    listTodos {
      items {
        id name description completed
      }
    }
  }
`
...
const todoData = await API.graphql(graphqlOperation(ListTodos))
this.setState({ todos: todoData.data.listTodos.items })
```

## 6. create AWS Lambda for Serverless REST API

#### create lambda function

```shell
amplify add api
(select REST)
amplify push
```

#### edit API

```javascript
// @amplify/backend/function/[functionName]/src
update base on API logic...

// run amplify push again after finish edit
```

#### call API on React

```javascript
import { API } from 'aws-amplify'
...
data = await API.get('peopleapi', '/people')
this.setState({ people: data.people })
```

## 7. store data to S3

```shell
amplify add storage
(select Content)
amplify push
```

```javascript
import { Storage } from 'aws-amplify'
...
// upload file
Storage.put(filename, file)
  .then(() => ...)
  .catch(e => ...)
// get file
Storage.get(filename)
  .then(data => this.setState({ fileUrl: data }))
  .catch(e => ...)
```

## 8. deploy React Application

```shell

```

```javascript
```
