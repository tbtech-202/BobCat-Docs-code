---
title: Overview
description: Thanks for choosing Server Manager for your server management needs!
sidebar_position: 1
---
import Button from '../src/components/Button';
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../src/components/DiscordComponent";

At Server Manager Development, we strive to bring new features to Server Manager. These new features are stable, customizable, and reliable. Server admins/owners can customize these features/systems with easy-to-use configuration slash commands.

## Features

### Moderation
We believe most servers rely on a bot for Moderation. Server Manager is always there to keep your server tidy with light-weight moderation commands that you can rely on to punish rule-breakers. Cases are used so you can view moderation actions long-term *so you don't forget that rule breaker that spammed a month ago then left*. All of your server's moderation data is kept in a secure database, keeping your server's data, your server's data and no one else's.

<DiscordComponent>
  <DiscordMessage profile="servermanager">
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Banned User#0000" borderColor="#FF0000">
      Successfully banned <DiscordMention>User</DiscordMention> <strong>(User#0000 | 123456789012345678)</strong>
      <DiscordEmbedFields slot="fields" inline="true">
        <DiscordEmbedField fieldTitle="🚩 Reason">
          Breaking the rules!
        </DiscordEmbedField>
        <DiscordEmbedField fieldTitle="👤 Moderator">
          Moderator#0000
        </DiscordEmbedField>
        <DiscordEmbedField fieldTitle="✅ Member Notified">
          True
        </DiscordEmbedField>
      </DiscordEmbedFields>
      <span slot="footer">Case ID: j50fGq05LO1D</span>
    </DiscordEmbed>
    <div slot="interactions">
      <DiscordInteraction avatar="green" author="Moderator" command>
        ban
      </DiscordInteraction>
    </div>
  </DiscordMessage>
</DiscordComponent>

### Giveaways
Server Manager's giveaway system allows server administrators to easily host giveaways for members to earn \*sweet* prizes. Members can enter a giveaway easily by pressing a simple button: <span className="blurple-background">🎉</span>

<DiscordComponent>
    <DiscordMessage profile="servermanager" bot>
        <DiscordEmbed
        embedTitle="$5 Nitro Classic"
        authorIcon="/img/logo.png"
        authorName="Server Manager Support"
        borderColor="#5865F2"
        footerIcon="/img/logo.png"
        >
        $5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! 🎉            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Ends">
                <span className="timestamp">in 1 day</span> (<span className="timestamp">January 1, 2023 1:00 AM</span>)
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Host">
                  <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">1 winner</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          giveaway
        </DiscordInteraction>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="primary" emoji="🎉"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">10 entries</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

### ...And much more! {#more}
<div className="box" style={{'margin-top': '0'}}>
  <div className="title">
    Helpful Docs
  </div>
  • <a href="/documentation/configurations" className="discord-link">Confiuration Documentation</a>
  <br/>
  • <a href="/documentation/moderation" className="discord-link">Moderation Documentation</a>
  <br/>
  • <a href="/documentation/giveaways" className="discord-link">Giveaway Documentation</a>
  <br/>
  • <a href="/documentation/polls" className="discord-link">Poll Documentation</a>
  <br/>
  • <a href="/documentation/suggestions" className="discord-link">Suggestion Documentation</a>
  <br/>
  • <a href="/documentation/utlity" className="discord-link">Utility Documentation</a>
</div>
