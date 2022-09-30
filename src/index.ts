/*
 * This file is part of the tec-onboarding-bot project
 * The contents are derived from the commit-your-code-bot project
 *
 * Copyright (c) 2021 nhcarigan
 * Authors: Naomi Carrigan
 *
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { Client } from "discord.js";
import { Bot } from "./interfaces/Bot";
import { logHandler } from "./utils/logHandler";
import { GatewayIntentBits } from "discord.js";

import { loadCommands } from "./utils/loadCommands";
import { registerCommands } from "./utils/registerCommands";
import { validateEnv } from "./utils/validateEnv";
import { handleEvents } from "./events";
import { refreshRoles } from "./utils/refreshRoles";
(async () => {
  try {
    const bot = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    }) as Bot;
    bot.envConfigs = validateEnv();
    bot.commands = await loadCommands();

    handleEvents(bot);

    await bot.login(bot.envConfigs.token);

    const registerSuccess = await registerCommands(bot);

    if (registerSuccess) {
      logHandler.log("info", "Bot commands registered successfully!");
    } else {
      logHandler.log("error", "Failed to register bot commands.");
    }

    // run weekly role-refresh
    setInterval(async () => await refreshRoles(bot), 21600000);
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
})();
