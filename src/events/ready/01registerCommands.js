const { testServer } = require("../../../config.json");
const areCommandsDifferent = require("../../utils/areCommandsDifferent");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require("../../utils/getLocalCommands");

/*
// This is for deleting commands globally, only enable for a partial or full wipe.
const { REST, Routes } = require('discord.js');
const { clientID, testserver, token } = require('../../../config.json');

const rest = new REST().setToken(token);
*/

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands();
    const applicationCommands = await getApplicationCommands(
      client,
      testServer
    );

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`🧹🗑️ Deleted command "${name}".`);
          continue;
        }

        if (areCommandsDifferent(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options,
          });

          console.log(`📝 Edited the following commands command "${[name]}".`);
        }
      } else {
        if (localCommand.deleted) {
          console.log(
            `⏭️ Skipping registering command "${name}" as it's set to delete.`
          );
          continue;
        }

        await applicationCommands.create({
          name,
          description,
          options,
        });

        console.log(
          `📝 Registered the following commands command "${[name]}".`
        );
      }
    }
  } catch (error) {
    console.log(`⚠️ There was an error: ${error}`);
  }


/*
// This is for deleting commands globally, only enable for a partial or full wipe.

// for guild-based commands
rest.put(Routes.applicationGuildCommands(clientID, testserver), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(clientID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
*/

  // console.log(localCommands);
};
