const mockData = [
  {
    id: "4",
    user: 'bob',
    text: 'Hello!',
    creationTime: 1447455185
  },
  {
    id: "8",
    user: 'alice',
    text: 'Hello, bob!',
    creationTime: 1447455207
  },
  {
    id: "15",
    user: 'bob',
    text: 'Have you seen Inside Out yet? It\'s great.',
    creationTime: 1447455256
  },
  {
    id: "16",
    user: 'alice',
    text: 'No, I haven\'t.',
    creationTime: 1447455270
  },
  {
    id: "23",
    user: 'bob',
    text: 'Well it\'s available for rental now, so you can watch it on your Apple TV.',
    creationTime: 1447455327
  },
  {
    id: "42",
    user: 'alice',
    text: 'Nice! Thanks for the timely and informative consumer advice!',
    creationTime: 1447455370
  }
]

export default {
  // getMessages() returns a Promise which will resolve to a list of message
  // objects (the above mockData, in this case).
  getMessages() {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(mockData);
      }, 500);
    });
  },
  // sendMessage(user, text) expects a username and some text and returns a
  // Promise which will resolve to a message object of the same kind as above.
  sendMessage(user, text) {
    return new Promise((resolve, reject) => {
      let id = Math.floor(Math.random() * 1e6).toString();
      setTimeout( () => {
        let message = {
          id,
          user,
          text,
          creationTime: Math.round((new Date()).getTime() / 1000),
        };

        mockData.push(message);
        resolve(message);
      }, 200);
    });
  },
};
