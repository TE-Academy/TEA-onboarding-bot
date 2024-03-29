/*
 * This file is part of the tec-onboarding-bot project
 * The contents are derived from the commit-your-code-bot project
 *
 * Copyright (c) 2021 nhcarigan
 * Authors: Naomi Carrigan
 * Modified by: Vyvy-vi
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

import {
  ButtonInteraction,
  CommandInteraction,
  Guild,
  GuildMember,
  Message,
  ButtonBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ButtonStyle,
} from "discord.js";

import { logHandler } from "../../utils/logHandler";
import { sendLogMessage } from "../../utils/sendLogMessage";

import { verifyUser } from "./verifyUser";

/**
 * Handles the question for the verification process.
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const question = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    if (!interaction.member) {
      await interaction.editReply("Oh no!");
      return;
    }
    const member = interaction.member as GuildMember;
    const question = new StringSelectMenuBuilder()
      .setCustomId("channel-name")
      .setPlaceholder("Are you a bot?")
      .addOptions([
        {
          label: "Beep boop",
          description: "Beep Boop, Boop Beep",
          value: "beep",
        },
        {
          label: "NO",
          description: "No, I am not a Bot",
          value: "no",
        },
      ]);

    const component =
      new ActionRowBuilder<StringSelectMenuBuilder>().addComponents([question]);

    const first = (await interaction.editReply({
      content: "Please complete this form to gain access to the server.",
      components: [component],
    })) as Message;

    const collector = first.createMessageComponentCollector({
      filter: (el) => el.user.id === interaction.user.id,
      max: 1,
      time: 60000,
    });

    collector.on("collect", async (collected) => {
      if (collected.isStringSelectMenu()) {
        if (collected.values[0] === "no") {
          await interaction.editReply({
            content:
              "Correct! Please wait...\nYou will be given access shortly...",
            components: [],
          });
          setTimeout(
            async () =>
              await verifyUser(
                interaction.member as GuildMember,
                interaction.guild as Guild
              ),
            5000
          );
          const button = new ButtonBuilder()
            .setLabel("Check out the Server Guide")
            .setURL(
              "https://discord.com/channels/1016433241978314913/1016433242628431934/1068871584850395146"
            )
            .setStyle(ButtonStyle.Link);
          await collected.reply({
            content:
              "For more info about the TE community, check out the <#1016433242628431934> channel",
            components: [
              new ActionRowBuilder<ButtonBuilder>().addComponents(button),
            ],
            ephemeral: true,
          });
        } else {
          await interaction.editReply({
            content: "You failed to select the correct answer.",
            components: [],
          });
          await collected.reply({
            content: "You will now be kicked.",
            ephemeral: true,
          });
          setTimeout(async () => {
            try {
              await member.kick();
              await sendLogMessage(
                `${interaction.user.tag} was kicked for answering the question incorrectly: ${collected.values[0]}`
              );
            } catch (e) {
              const err = e as Error;
              logHandler.log("error", `${err.message}\n${err.stack}`);
              await sendLogMessage(
                `${interaction.user.tag} can not be kicked for answering the question incorrectly... They are immune...`
              );
            }
          }, 5000);
        }
      }
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
