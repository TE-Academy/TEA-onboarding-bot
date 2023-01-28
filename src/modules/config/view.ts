import { CommandHandler } from "../../interfaces/CommandHandler";
import { Embed, EmbedBuilder, GuildMember } from "discord.js";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export const selfroleViewHandler: CommandHandler = async (bot, interaction) => {
  const { guild } = interaction;
  const selfAssignableRoles: string[] = JSON.parse(
    await readFile(join(process.cwd(), "selfAssignableRoles.json"), "utf-8")
  );

  const member = interaction.member as GuildMember;
  if (!guild || !member) {
    await interaction.editReply("This command can only be used in the server.");
    return;
  }

  await interaction.editReply({
    embeds: [
      new EmbedBuilder()
        .setTitle("config selfrole view")
        .setDescription(
          `The following ${
            selfAssignableRoles.length
          } roles are self-assignable:\n${selfAssignableRoles
            .map((id) => `<@&${id}>`)
            .join(", ")}`
        ),
    ],
  });
  return;
};
