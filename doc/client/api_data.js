define({ "api": [
  {
    "type": "config",
    "url": "Options",
    "title": "Options",
    "name": "ClientOptions",
    "group": "Client",
    "version": "1.0.0",
    "description": "<p>Default configuration</p> ",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ isFriend: false,\n       isFriendSince: null,\n       isFriendRequestPending: false,\n       isFriendRequestSince: null,\n       youFollow: true,\n       youFollowSince: '2015-02-02T06:45:55.459Z',\n       theyFollow: false,\n       theyFollowSince: null,\n       inCommon:\n        [ { user: '67528c2a-dd02-45a1-bc00-e240697a2256',\n            username: 'ted'} ] }",
          "type": "json"
        }
      ]
    },
    "filename": "client/index.js",
    "groupTitle": "Server Side Seguir Client",
    "groupDescription": "<p>The Seguir client provides a simple and consistent API for interacting with a seguir client without having to worry about authentication or passing the logged in user details.</p> <p>This can only be used server side, as it uses the appId and appSecret which should never be shared within pure client side code.  This client allows you to provide the &#39;logged in user&#39; which means that you can effectively create any relationship or item you like (even outside of) an actual true user session.</p> "
  }
] });