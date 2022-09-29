import { CommandInteraction } from "discord.js";

import { Bot } from "./Bot";

export type CommandHandler = (
  bot: Bot,
  interaction: CommandInteraction
) => Promise<void>;
