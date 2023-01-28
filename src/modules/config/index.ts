import { logHandler } from "../../utils/logHandler";
import { CommandHandler } from "../../interfaces/CommandHandler";
import { GuildMember } from "discord.js";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { selfroleViewHandler } from "./view";
import { selfroleToggleHandler } from "./toggle";

export const configHandler: CommandHandler = async (bot, interaction) => {
  const { guild } = interaction;
  const member = interaction.member as GuildMember;
  if (!interaction.isChatInputCommand() || !guild || !member) {
    await interaction.editReply("This command can only be used in the server.");
    return;
  }
  if (
    interaction.options.getSubcommandGroup() == "selfrole" &&
    interaction.options.getSubcommand() == "view"
  ) {
    await selfroleViewHandler(bot, interaction);
  } else if (
    interaction.options.getSubcommandGroup() == "selfrole" &&
    interaction.options.getSubcommand() == "toggle"
  ) {
    await selfroleToggleHandler(bot, interaction);
  }
  return;
};
