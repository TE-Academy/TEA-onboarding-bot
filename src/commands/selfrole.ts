import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";
import { logHandler } from "../utils/logHandler";
import { selfroleHandler } from "../modules/selfrole";

export const selfrole: Command = {
  data: new SlashCommandBuilder()
    .setName("selfrole")
    .setDescription("Assign or unassign a self-assignable role")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("The role you want to assign to yourself")
        .setRequired(true)
    ),
  async run(bot, interaction) {
    try {
      await interaction.deferReply({ ephemeral: true });
      await selfroleHandler(bot, interaction);
    } catch (err) {
      logHandler.log("error", err);
    }
  },
};
