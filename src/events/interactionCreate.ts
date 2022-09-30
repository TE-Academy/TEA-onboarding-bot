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

import { Interaction } from "discord.js";

import {
  howToTE,
  howToDiscord,
  whatIsTEA,
  whatIsTe,
  support,
  guidelines,
  whatIsTeFundamentals,
} from "../modules/guide";
import { question } from "../modules/verification/question";
import { logHandler } from "../utils/logHandler";

/**
 * Handles the interactionCreate event.
 *
 * @param {Interaction} interaction The interaction received over the gateway.
 */
export const interactionCreate = async (
  interaction: Interaction
): Promise<void> => {
  try {
    if (interaction.isButton()) {
      switch (interaction.customId) {
        case "verify":
          await interaction.deferReply({ ephemeral: true });
          await question(interaction);
          break;
        case "what-is-te":
          await interaction.deferReply({ ephemeral: true });
          await whatIsTe(interaction);
          break;
        case "what-is-tea":
          await interaction.deferReply({ ephemeral: true });
          await whatIsTEA(interaction);
          break;
        case "discord-structure":
          await interaction.deferReply({ ephemeral: true });
          await howToDiscord(interaction);
          break;
        case "how-to-te":
          await interaction.deferReply({ ephemeral: true });
          await howToTE(interaction);
          break;
        case "te-support":
          await interaction.deferReply({ ephemeral: true });
          await support(interaction);
          break;
        case "guidelines":
          await interaction.deferReply({ ephemeral: true });
          await guidelines(interaction);
          break;
        case "what-is-te-fundamentals":
          await interaction.deferReply({ ephemeral: true });
          await whatIsTeFundamentals(interaction);
          break;
        /*
        case "time":
          await interaction.deferReply({ ephemeral: true });
          await schedule(interaction);
        */
      }
    }
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
