import { logHandler } from "../../utils/logHandler";
import { CommandHandler } from "../../interfaces/CommandHandler";
import { GuildMember } from "discord.js";

export const selfroleHandler: CommandHandler = async (bot, interaction) => {
  const { guild } = interaction;
  const selfAssignableRoles: string[] = [
    "1024982754305249301",
    "1024983557787095040",
    "1024984272840445952",
    "1024984362715987988",
    "1024984563530874911",
    "1024984655113498654",
    "1024984693491376178",
    "1024984741600038922",
    "1024984785233399899",
    "1024984855794167808",
    "1024984905396006922",
    "1024984948085633075",
    "1024984992515883018",
    "1024985026015809551",
    "1024985077479899206",
    "1024985092600369172",
    "1024985223118733312",
    "1024985179388911667",
    "1024985262348042260",
    "1024985313501786152",
    "1024985294581276712",
    "1024985469156597801",
    "1024985527310618734",
    "1024985568276402197",
    "1024985608092917801",
    "1024985671351422976",
  ];
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
