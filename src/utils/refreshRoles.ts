import { Bot } from "../interfaces/Bot";

export const refreshRoles = async (bot: Bot): Promise<void> => {
  const guild = bot.guilds.cache.get(bot.envConfigs.guildId);
  if (!guild) return;
  const members = await guild.members.fetch();
  for (const memberObj of members) {
    // check if they were member for more than 2 weeks
    const member = memberObj[1];
    if (Date.now() - (member.joinedTimestamp || Date.now()) > 12096e5) {
      try {
        member.roles.add("1016433242024448107");
        member.roles.remove("1016433242024448106");
      } catch {
        return;
      }
    }
  }
};
