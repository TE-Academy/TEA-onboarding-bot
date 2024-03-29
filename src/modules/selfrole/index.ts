import { logHandler } from "../../utils/logHandler";
import { CommandHandler } from "../../interfaces/CommandHandler";
import { GuildMember } from "discord.js";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export const selfroleHandler: CommandHandler = async (bot, interaction) => {
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
    await interaction.editReply(
      `The <@&${roleId}> role is not self-assignable.`
    );
    return;
  }
  if (member.roles.cache.some((role) => role.id === roleId)) {
    member.roles.remove(
      roleId as string,
      `self-unassigned by ${member.nickname}`
    );
    await interaction.editReply(
      `The <@&${roleId}> role has been removed from you!`
    );
  } else {
    member.roles.add(roleId as string, `self-assigned by ${member.nickname}`);
    await interaction.editReply(
      `The <@&${roleId}> role has been added to you!`
    );
  }
  return;
};
