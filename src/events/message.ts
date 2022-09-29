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

import {
  Message,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";
import { guildMemberAdd } from "./guildMemberAdd";

/**
 * Handles the message create event. Essentially used just to send the
 * initial verification post.
 *
 * @param {Message} message The Discord message object received.
 */
export const onMessage = async (message: Message): Promise<void> => {
  if (
    message.content === "~init" &&
    message.author.id === "558192816308617227"
  ) {
    const embed = new EmbedBuilder();
    embed.setTitle("Welcome to TE Academy!");
    embed.setDescription(
      "We’re glad that you are here!\nBefore letting you in, we need to know you are a human and not a bot. :) All you need to do is answer one simple question, but beware!\nAnswering wrong will get you kicked from the server! Click the button below to get started\nIf you get stuck, DM <@!902543185367142400>."
    );

    const button = new ButtonBuilder()
      .setLabel("Click here to verify!")
      .setEmoji("✅")
      .setCustomId("verify")
      .setStyle(ButtonStyle.Success);
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

    await message.channel.send({ embeds: [embed], components: [row] });
    await message.delete();
  }
  if (
    message.content === "~journey-setup" &&
    message.author.id === "558192816308617227"
  ) {
    const embed = new EmbedBuilder();
    embed.setTitle("Hello - welcome to our community!");
    embed.setDescription(
      "Hello - welcome to our community! What are you most interested in? Please click on the buttons below to start your journey at TE Academy."
    );

    const whatIsTeButton = new ButtonBuilder()
      .setCustomId("what-is-te")
      .setLabel("What is Token Engineering?")
      .setStyle(ButtonStyle.Primary);

    const whatIsTEAButton = new ButtonBuilder()
      .setCustomId("what-is-tea")
      .setLabel("What is the Token Engineering Academy?")
      .setStyle(ButtonStyle.Primary);

    const discordButton = new ButtonBuilder()
      .setCustomId("discord-structure")
      .setLabel("How is this Discord organized? Where to go next?")
      .setStyle(ButtonStyle.Primary);

    const whatIsTeFundamentalsButton = new ButtonBuilder()
      .setCustomId("what-is-te-fundamentals")
      .setLabel("What is TE Fundamentals?")
      .setStyle(ButtonStyle.Primary);

    const howToTEButton = new ButtonBuilder()
      .setCustomId("how-to-te")
      .setLabel("I'd like to study! How can I become a Token Engineer?")
      .setStyle(ButtonStyle.Primary);

    const supportButton = new ButtonBuilder()
      .setCustomId("te-support")
      .setLabel("Our project needs Token Engineering support.")
      .setStyle(ButtonStyle.Primary);

    const guidelineButton = new ButtonBuilder()
      .setCustomId("guidelines")
      .setLabel("What are the TE Community Guidelines.")
      .setStyle(ButtonStyle.Primary);

    const buttonsA = new ActionRowBuilder<ButtonBuilder>().addComponents(
      whatIsTeButton,
      whatIsTEAButton,
      discordButton,
      whatIsTeFundamentalsButton
    );

    const buttonsB = new ActionRowBuilder<ButtonBuilder>().addComponents(
      howToTEButton,
      supportButton,
      guidelineButton
    );
    await message.channel.send({
      embeds: [embed],
      components: [buttonsA, buttonsB],
    });
    await message.delete();
  }
  if (
    message.content === "~migrate_roles" &&
    message.author.id === "558192816308617227"
  ) {
    const guildMembers = await message.guild?.members.fetch();
    if (!message.guild || !guildMembers) return;
    const verifyRole = await message.guild.roles.fetch(
      process.env.VERIFIED_ROLE || "oh no!"
    );

    if (!verifyRole) {
      return;
    }
    for (const id of guildMembers) {
      const member = await message.guild.members.fetch(id[0]);
      if (member.roles.cache.find((r) => r.id === "788600331553472535")) {
        await member.roles.add(verifyRole);
      }
    }
  }
};
