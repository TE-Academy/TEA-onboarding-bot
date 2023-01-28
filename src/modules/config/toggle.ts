import { CommandHandler } from "../../interfaces/CommandHandler";
import { Embed, EmbedBuilder, GuildMember } from "discord.js";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export const selfroleToggleHandler: CommandHandler = async (
  bot,
  interaction
) => {
  const { guild } = interaction;
  const selfAssignableRoles: string[] = JSON.parse(
    await readFile(join(process.cwd(), "selfAssignableRoles.json"), "utf-8")
  );

  const member = interaction.member as GuildMember;
  if (!guild || !member) {
    await interaction.editReply("This command can only be used in the server.");
    return;
  }

  const roleId = interaction.options.get("role")?.value || "";
  if (!roleId || roleId === true) {
    await interaction.editReply(
      "`role` is a required option for running this command."
    );
    return;
  }

  if (selfAssignableRoles.every((role) => role !== roleId)) {
    selfAssignableRoles.push(roleId as string);
    await writeFile(
      join(process.cwd(), "selfAssignableRoles.json"),
      JSON.stringify(selfAssignableRoles),
      "utf-8"
    );
    await interaction.editReply(
      `The <@&${roleId}> role is self-assignable now.`
    );
    return;
  } else {
    selfAssignableRoles.splice(selfAssignableRoles.indexOf(roleId as string));
    await writeFile(
      join(process.cwd(), "selfAssignableRoles.json"),
      JSON.stringify(selfAssignableRoles),
      "utf-8"
    );
    await interaction.editReply(
      `The <@&${roleId}> role is not self-assignable now.`
    );
    return;
  }
};
