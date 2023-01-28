import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";
import { logHandler } from "../utils/logHandler";
import { configHandler } from "../modules/config";

export const config: Command = {
  data: new SlashCommandBuilder()
    .setName("config")
    .setDescription("Configure the bot")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommandGroup((group) =>
      group
        .setName("selfrole")
        .setDescription("Configure self-assignable-roles")
        .addSubcommand((subcommand) =>
          subcommand
            .setName("toggle")
            .setDescription(
              "Add or remove a role from the self-assignable-roles list"
            )
            .addRoleOption((option) =>
              option
                .setName("role")
                .setDescription(
                  "The role you want to add or remove from the self-assignable-roles list"
                )
                .setRequired(true)
            )
        )
        .addSubcommand((subcommand) =>
          subcommand
            .setName("view")
            .setDescription("View all self-assignable-roles")
        )
    ),

  async run(bot, interaction) {
    try {
      await interaction.deferReply({ ephemeral: true });
      await configHandler(bot, interaction);
    } catch (err) {
      logHandler.log("error", err);
    }
  },
};
