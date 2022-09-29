import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Bot } from "../interfaces/Bot";
import { logHandler } from "./logHandler";

/**
 * Function to register commands for the discord bot.
 *
 * @param {Bot} bot - Object representing the discord Client used by bot.
 * @returns {boolean} - Returns true if commands registered successfully.
 */
export const registerCommands = async (bot: Bot): Promise<boolean> => {
  try {
    if (!bot.user?.id) {
      logHandler.log(
        "error",
        "Can't Register commands. Discord Bot not logged in."
      );
      return false;
    }

    logHandler.log("info", "Registering bot commands...");
    const rest = new REST({ version: "9" }).setToken(
      bot.envConfigs.token || ""
    );

    const commandData = bot.commands.map((el) => el.data.toJSON());
    if (bot.commands.length === 0) {
      logHandler.log("warning", "No commands found to register...");
      return false;
    }
    if (!bot.envConfigs.guildId) {
      logHandler.log(
        "warning",
        "Guild ID environment variable not provided..."
      );
      return false;
    }
    logHandler.log("info", "Registering commands to home-guild only...");
    await rest.put(
      Routes.applicationGuildCommands(bot.user.id, bot.envConfigs.guildId),
      {
        body: commandData,
      }
    );
    return true;
  } catch (error) {
    logHandler.log("error", error);
    return false;
  }
};
