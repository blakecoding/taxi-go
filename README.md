# Taxi Go App
## Installation
1. install dependence packages
```
yarn
```
2. Run pod (Ios)
```
npx pod-install
```
or
```
cd ios && pod install && cd ..
```
3. run Ios
```
yarn ios
```
4. run Android
```
yarn android
```
## taxi-go.keystore
`./android/app/taxi-go.keystore`
password(key, alias)=`nws2022`

## Testing Account
```
+1 650-555-1234
+1 234-567-8900

OTP
123456
```
## File structure
```
src
└───assets
│   └───images
│   └───svg
│   └───index.js
└───core
│   └───common
│   │   └───helper.js
│   │   └───...
│   └───component
│   └───store
│   │   └───models
│   │   └───selectors
│   │   └───index.js
│   └───theme
│   │   └───colors.js
│   │   └───fonts.js
│   │   └───index.js
│   │   └───styles.js
└───hooks
│   └───...
└───modules
│   └───auth
│   │   └───components
│   │   └───screens
│   │   └───index.js
│   └───...
└───network
│   └───index.js
└───routes
│   └───Route.js
└───services
│   └───firebase
│   │   └───auth
│   │   │   └───index.js
└───App.js
```

## Images
Input full country code for signin or signup
<img src="/images/sign-in.png" width="350"> <img src="/images/otp.png" width="350">
