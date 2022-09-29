import { CommandInteraction, Interaction } from "discord.js";

import { Bot } from "../interfaces/Bot";
import { logHandler } from "../utils/logHandler";
import { ready } from "./ready";
import { guildMemberAdd } from "./guildMemberAdd";
import { interactionCreate } from "./interactionCreate";
import { onMessage } from "./message";
/**
 * Bootstraps the event handlers to be mounted all at once.
 *
 * @param {Bot} bot The bot's Discord instance.
 */
export const handleEvents = (bot: Bot) => {
  bot.on("ready", async () => await ready());
  bot.on("guildMemberAdd", async (member) => await guildMemberAdd(member));
  bot.on("messageCreate", async (message) => await onMessage(message));
  bot.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      try {
        const command = bot.commands.find(
          (el) => el.data.name === interaction.commandName
        );
        if (!command) {
          await interaction.reply(
            "Bad Interaction: Bot can't find the Command."
          );
          return;
        }
        command.run(bot, interaction as CommandInteraction);
      } catch (error) {
        await interaction.reply(
          "Internal Bot Error: There was an error while running this command."
        );
        logHandler.log("warn", `${interaction.commandName} failed.`);
      }
    } else {
      await interactionCreate(interaction);
    }
  });
};
