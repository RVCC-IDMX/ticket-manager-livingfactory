/* eslint-disable no-console */
const chalk = require('chalk');
const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();
const { log } = console;

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(`Gracefully handling our error: ${error}`);
});
log(chalk.magenta(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(chalk.magenta(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));

const onBuy = () => {
  log(chalk.blue.bold('I will be removed soon'));
};

ticketManager.on('buy', onBuy);

log(chalk.red.underline(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')}`));
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);
log(chalk.red(`We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));

ticketManager.buy('test@email', 20);
ticketManager.removeAllListeners('buy');
log(chalk.green.bold(`We have ${ticketManager.listenerCount('buy')} listeners for the buy event`));

ticketManager.buy('test@email', 20);
log(chalk.green.bold('The last ticket was bought'));
