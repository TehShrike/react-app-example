Hello, [APPLICANT NAME HERE]!

In this repo is a basic React chat application.  Unfortunately, Richard, the
developer who was working on it, fell into a pitch black hole and was eaten by
a grue.  We need you to finish it.

It's built on React, Redux, Babel, and Webpack, all of which will be set up with
`npm install`.  Webpack and Redux are set up to use hot-module reloading and by
running `npm start`, a webpack dev server will be started on
http://localhost:3000/.  Point your browser at that, and you'll see...

Well, nothing, because it's incomplete.  Before his untimely demise, Richard
had finished the basics of state handling for messages and the basic structure
of the message list and input, but message display and sending are absent. Most
notably, the Message component wasn't finished, so while messages will be
loaded from the mock API, you won't see them.

You are tasked with, specifically:

- Implement the Message component, displaying the username, text, and timestamp.
  - Messages in the state are stored in an object, keyed by their id.  When
    displayed, they should be ordered by creationTime ascending.
  - Our designer says that the messages should be light gray on black, and in
    each message, the username should be in its own column to the left, with
    text on the right, and the timestamp shown below in a darker gray.  I guess
    he wants it to look like IRC.  He sent along this ASCII art mockup:

    ```
    bob  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua.
         Sent Sun Nov 15 2015 23:18:36 GMT-0600 (CST)

    alice  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
           ut aliquip ex ea commodo consequat.
           Sent Sun Nov 15 2015 23:19:23 GMT-0600 (CST)

    bob  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
         dolore eu fugiat nulla pariatur.
         Sent Sun Nov 15 2015 23:19:38 GMT-0600 (CST)
    ```

    For now, it's totally fine to use Date.toString() for the date formatting.

  - See below for reference on the message object as returned by the mock API
    and stored in app state
- Implement message sending
  - Add actions for sending via `mockAPI.sendMessage()` (see API reference
    below).
  - Modify the channelMessages reducer to add the message object returned by
    `mockAPI.sendMessage()` to the state.
  - Wire the existing MessageInput component to send via this new action.
  - `mockAPI.sendMessage()`'s first argument is a username.  You should get it
    from `username` in the app state.

## API Reference

### The message object

A message has an unique id, the user who sent the message, the text of the
message, and a timestamp of when it was sent.

Example:

```
{
  id: "4",                   // Message IDs are strings
  user: "bob",               // User and text are strings
  text: "Hello!",
  creationTime: 1447455185,  // UNIX epoch timestamp
}
```

### getMessages()

Returns a Promise which will resolve to a list of message objects.

Example:

```
mockAPI.getMessages().then(messages => {
  console.log(messages[0]);   // Log the first message
});
```

### sendMessage(user, text)

Accepts a username and text content.  Returns a promise which will resolve to a
message object -- the server representation of the sent message.

```
mockAPI.sendMessage('bob', 'Hello!').then(message => {
  console.log(message.user);   // 'bob'
  console.log(message.id);     // The server-assigned message ID
});
```
