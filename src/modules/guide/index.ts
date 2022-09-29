import { ButtonInteraction, Message, EmbedBuilder } from "discord.js";
import * as fs from "fs";

import { logHandler } from "../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "What is Token Engineering?".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const whatIsTe = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "Token Engineering is the design, verification, and optimization of token-based economic systems. It draws from established systems engineering practices, and from fields as diverse as Behavioural & Ecological Economics, Operations Research, AI & Optimization, Political Science, Ethics, and Law. The term “token engineering” was coined in 2018 by Trent McConaghy. Since then, the token engineering community has gathered researchers and engineers from many disciplines to formulate the token engineering design process, validation methods, a body of theory and practice, and a sense of responsibility.",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "What is the Token Engineering Academy?".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const whatIsTEA = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "The Token Engineering Academy (TE Academy) is the first educational institution in the new crypto-native field of Token Engineering. Since it was established in July 2020, more than 1000 students from 21 time zones have attended the lectures and courses. More than 2000 signed up for the brand-new course TE Fundamentals (launched in October 2022). The mission of TE Academy is to educate students in this new field to build robust, fair, and sustainable token-based systems. As Michael Zargham and Charles Rice put it, “rather than trying to optimize humans, we are trying to provide the maximum degree of freedom while preventing dangerous conditions.”\nWe encourage our students, mentors, and contributors to collaborate cross-disciplinary, build and be open to support others in building – and engage in further developing the token engineering discipline as a public good.",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "How is this Discord organized? Where to go next?".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const howToDiscord = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "You are welcome in all channels; feel free to explore all channels - drop by and say hello!\nAlways check out channel description and the pinned messages in all channels - they point you to primary resources and first information.\nThe <#1016433242628431934> channel provides you with everything you need to know as a newcomer;\nthe “Study” section offers channels for study groups and learning opportunities.\nThe “Build” section collects channels for groups who are building Token Engineering Knowledge Commons.\nThe “Discuss” section is the space where we meet and discuss whatever topic you might be interested in.\nThe “Connect” section is reserved for networking.\nFinally, there's a channel called <#1016433242628431936>. Once you've joined our server, make sure to drop a message there with some words about yourself, what brought you here, and what's your background. Let's make this channel our searchable **address book** for token engineering networking.\n\nOur community policy can be found in the <#1016442193344462850> channel. In case you experienced any negative situation please don’t hesitate to reach out to us via direct message to <@!902543185367142400>.",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "What is TE Fundamentals?".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const whatIsTeFundamentals = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "TE Fundamentals is the first comprehensive education and certification program in token engineering. It's an online course, built by TE Academy - available via tokenengineering.org. Start studying any time, the course if free of charge. Join TE Fundamentals study groups if you prefer learning with fellow students. And finally, earn an NFT certificate to prove your knowledge!",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "I’d like to study! How can I become a Token Engineer?".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const howToTE = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "It’s great you want to become a Token Engineer - we’d like to encourage you on your journey; token engineering needs YOU.\nThree things are essential: First, expect a steep learning curve, no matter what background you might have. You’ll come across new research, insights, concepts every single day. Read, inhale whatever you can get your hands on. Second, there is no perfect background or requirement. A degree in engineering, economics, or mathematics will undoubtedly be beneficial to start with. But that’s not all that counts. Be curious, study for yourself, and most crucial, start making connections to other students today. Your learning journey won’t stop after you’ve completed a course. Token Engineering is building up knowledge day by day, applying your skills, tackling new challenges, and working with other token engineers. You’ll rarely be able to solve a problem alone; expect to collaborate with allies from many other domains. And last: [Study TE Fundamentals, the first comprehensive education and certification program in Token Engineering - available as an online course!](https://medium.com/tokenengineering/token-engineering-fundamentals-49b15b42fa5)",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "Our project needs Token Engineering support".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const support = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "More than 200 community members are currently getting ready for TE Fundamentals, the first comprehensive education and certification program in Token Engineering. They are eager to enter an engagement at a crypto project.\nWe offer matchmaking services, job boards, and we’ll run the first Token Engineering Job Fair in December 2022. In case you are interested, please sign. You can sign up here: [https://forms.gle/iCdMfwvoDG8sCSGZ7](https://forms.gle/iCdMfwvoDG8sCSGZ7)",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "What are the TE Community Guidelines".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const guidelines = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const guidelineEmbed = new EmbedBuilder()
      .setTitle("Discord Community Guidelines")
      .setDescription(
        "**Welcome to the TE Academy Community!**\nTE Academy is a community to learn, and contribute to the development of the discipline token engineering. Let's make this server a safe, empowering and pleasant place for everyone."
      )
      .setColor("#000")
      .addFields([
        {
          name: "It's about the people",
          value:
            "- You as a member, student, or mentor matter.\n- We encourage you to switch on your camera in our calls, and let others get to know you.\n- If you prefer to stay anonymous though, we'll respect this. Check the rules for privacy below.\n- Be prepared to quickly introduce yourself if you are new to a session or study group.\n- Show respect and tolerance toward everybody fairly and equally.\n- Refrain yourself from personal attacks.",
        },
        {
          name: "Give and Get",
          value:
            "- Support others, wholeheartedly. You'll get back 10x.\n- Don't hesitate to ask for support/advice/hints, when ever needed.\n- Respect other's work, time, and perspectives.\n- Do not plagiarize any work, or copy others’ intellectual property.\n- If you look back at your achievements one day, don’t forget to sow the seeds for the next generation of token engineers.",
        },
        {
          name: "Creativity, not curriculum",
          value:
            "- Be active, contribute to discussions, study groups and other activities.\n- Stimulate debate, raise relevant questions.\n- We value cross-disciplinary work. Help others to look through the lense of your discipline.\n- Give credit for good ideas and good effort.",
        },
        {
          name: "We respect privacy and user agency",
          value:
            "- We'll inform you if we record a session.\n- If you want to record a study group session, or any other session, please turn to your (study group) host for more information.\n- Please do not record sessions without informing the (study group) host in advance.\n- Always ask session attendees for permission.\n- Keep in mind that unauthorized recordings are not approved from TE Academy and we do not take any responsibility for the existence of those.",
        },
        {
          name: "Unacceptable Behavior & Harassment",
          value:
            "- We do not condone any speech that is discriminatory, racist, abusive or in general disrespectful.\n- Participants who don't respect these rules, will be banned from the server.\n- The purpose of this server is not self promotion, promotion of other services or any other kind of promotion.\n- Do not promote any brands, sponsorships, logos or commercials that are not in advance agreed with TE Academy.\n- It is not allowed to sell products or tokens.\n- Spaming is not allowed.\n- Behaviour that is prohibited in this code of conduct stands on top of the Community Guidelines of Discord. That means that any violations that are against this TE Academy Community Guidelines will be dealt in accordance with Discord Community Guidelines. You can read more about the Guidelines here: <https://discord.com/guidelines>",
        },
        {
          name: "\u200b",
          value:
            "**It's great that you are here!**\nAll our channels have pinned messages explaining what they are there for, links for more information and how everything works. If you don't understand something, feel free to reach out to <@!902543185367142400>",
        },
      ]);
    await interaction.editReply({ embeds: [guidelineEmbed] });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
