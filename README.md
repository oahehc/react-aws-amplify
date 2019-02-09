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

## 4. custom sign-in / sign-out

```shell
```
