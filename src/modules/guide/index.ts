import { ButtonInteraction, Message, MessageEmbed } from "discord.js";

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
        "Token Engineering is the design, verification, and optimization of crypto-economic systems. It draws from established systems, electrical, robotics & controls engineering practices. It also draws from fields as diverse as Behavioural & Ecological Economics, Operations Research, AI & Optimization, Political Science, Ethics, and Law. The term token engineering was coined in 2018 by Trent McConaghy. Since then, the token engineering community has gathered researchers and engineers from many disciplines to formulate the token engineering design process, validation methods, a body of theory and practice, and a sense of responsibility.",
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
        "The Token Engineering Academy (TE Academy) is the first educational institution in the new crypto-native field of Token Engineering. Since it was established in July 2020, more than 900 students from 21 time zones have attended the lectures and courses. The mission of TE Academy is to educate students in this new field to build robust, fair, and sustainable token-based systems. As Michael Zargham and Charles Rice put it, “rather than trying to optimize humans, we are trying to provide the maximum degree of freedom while preventing dangerous conditions.”\nWe encourage our students, mentors, and contributors to collaborate cross-disciplinary, build and be open to support others in building – and engage in further developing the token engineering discipline as a public good.",
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
        "You are welcome in all channels; feel free to explore all channels - drop by and say hello! Always check out channel description and the pinned messages in all channels - they point you to primary resources and first information. The “Start here” channels provide you with everything you need to know as a newcomer; the “Study” section offers channels for study groups and learning opportunities. The “Build” section collects channels for our #OpenScience initiatives and collaborative token engineering. The “Discuss” channels are the space where we meet and discuss whatever topic you might be interested in. The “Connect” channels are reserved for TE Academy Alumni networking. And lastly, the “Ecosystem” channels are bridges to TE Commons and our partner communities.",
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
        "It’s great you want to become a Token Engineer - we’d like to encourage you on your journey; token engineering needs YOU. Three things are essential: First, expect a steep learning curve, no matter what background you might have. You’ll come across new research, insights, concepts every single day. Read, inhale whatever you can get your hands on. Second, there is no perfect background or requirement. A degree in engineering, economics, or mathematics will undoubtedly be beneficial to start with. But that’s not all that counts. Be curious, study for yourself, and most crucial, start making connections to other students today. Your learning journey won’t stop after you’ve completed a course. Token Engineering is building up knowledge day by day, applying your skills, tackling new challenges, and working with other token engineers. You’ll rarely be able to solve a problem alone; expect to collaborate with allies from many other domains. And last: Sign-up for TE Fundamentals, the first comprehensive education and certification program in Token Engineering!\nhttps://tokenengineeringcommunity.github.io/website/docs/academy-welcome#token-engineering-fundamentals",
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
        "More than 500 community members are currently getting ready for TE Fundamentals, the first comprehensive education and certification program in Token Engineering. They are eager to enter an engagement at a crypto project. We run a dedicated matchmaking process for Token Engineers. Part of it is a 2-hours onboarding workshop for projects looking for support. You can sign up here: https://forms.gle/5dV89SJGwCBMDjop8.",
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
    const guidelineEmbed = new MessageEmbed()
      .setTitle("Discord Community Guidelines")
      .setColor("#000")
      .addFields([
        {
          name: "1. Be respectful",
          value:
            "Be respectful to each others thoughts and opinions. Treat others the way you want to be treated. We will not tolerate any insults, racism, harassment or threats of violence against members, even as a joke.",
        },
        {
          name: "2. No spamming",
          value:
            "Do not misuse or spam in any of the channels. No token offerings, no airdrops, no pumps etc. No pornographic/adult/other NSFW material. Spamming users will be banned immediately. Please avoid disrupting chats, don't send a lot of small messages right after each other.",
        },
        {
          name: "3. Advertisements",
          value:
            "This is a community space free from advertising. Do not post unsolicited referral links, or discord invitations unless specifically asked for by another user.",
        },
        {
          name: "4. No offensive names and profile pictures",
          value:
            "Please don't use offensive names and profile pictures. You will be asked to change your name or picture if the moderators deems them inappropriate.",
        },
        {
          name: "5. Security",
          value:
            "Protect your ID and sensitive data. Never publish personal information, like your address, email, passwords, wallet addresses, credit card information. Always be careful with the links you click. Never just react on messages with links or offers, rather double-triple check. If looks too good, check using a safer communication channel (maybe a quick video call). Weird ID fraud happens frequently on social networks like Discord. Unfortunately!",
        },
        {
          name: "6. Voice/Video Chats",
          value:
            "People matter. It's ok if you'd like to stay anonymously, but if you are ok with it, switch on your camera in our calls, and let others get to know you.",
        },
        {
          name: "7. Rules Acceptance and Updates",
          value:
            "**Your presence in this server implies accepting these rules, including all further changes. Our Discord Rules are always available at this channel. Changes might be done at any time without notice, it is your responsibility to check for them.**",
        },
        {
          name: "\u200b",
          value:
            "It's great that you are here! All our channels have pinned messages explaining what they are there for, links for more information and how everything works. If you don't understand something, feel free to reach out to one of our TE Hosts  - you'll help improving our guidelines!",
        },
      ]);
    await interaction.editReply({ embeds: [guidelineEmbed] });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
