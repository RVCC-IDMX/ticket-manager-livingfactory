/* eslint-disable no-console */
const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
  console.log('Someone bought a ticket!');
});
ticketManager.once('buy', () => {
  console.log('This is only called once');
});

ticketManager.once('buy', () => {
  console.log('This is only called once');
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);
