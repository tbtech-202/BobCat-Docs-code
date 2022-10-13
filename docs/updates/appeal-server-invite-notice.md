---
title: Appeal Server Invites
description: Notice regarding appeal server invites
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Button from '../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordMention,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";

Hey everyone, it's **Nziie** (Core/Lead Developer at the Server Manager Development Team). A configuration for an **appeal server invite** on the ban DM message is being released soon and I'd like to educate you all on how to stay safe while clicking these links, as they're server-set and not enforced by us nor do we encourage you to join these servers unless you'd like to appeal your ban for that specific server.

The appeal DM message should look something like this:

<DiscordComponent>
    <DiscordMessage author="Server Manager" avatar="/img/logo.png" bot>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="Server Manager Support"
        borderColor="#ff0000"
        footerIcon="/img/logo.png"
        image="/img/banner-v3.png"
        >
        You've been banned in <strong>Server Manager Support</strong>            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="🚩 Reason">
                  Empty
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="👤 Moderator">
                  <code>Hidden</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="📄 Appealing">
                  Want to appeal your ban?
                  <blockquote>Join here: <span style={{color: '#2798d9', cursor: 'not-allowed'}}>https://discord.gg/...</span></blockquote>
                </DiscordEmbedField>
            </DiscordEmbedFields>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

### Staying Safe
Since this configuration is server-set by admins, we can't control what might be put there besides a invite link. The invite link set to be an 'appeal server' may be an invite to another server that's irrelvent to a ban appeal. To re-iterate, joining these servers may be beneficial or non-beneficial.

If a server is setting their appeal server invite to a server that isn't for appealing bans, feel free to **report this to us** in our [support server](https://discord.gg/6bCKvP24kb) for abusing freedom of being able to set this configuration.

### Limits
At the moment, we enforce a Discord Server Invite is to be placed in this configuration. Removing the fact that a malicious link can be placed here.

To thin down the number of mis-uses of this configuration, we're making it **premium only** and so it goes to supporters of our project. In the future.

## Contributors

<div className="user_box">
  <img className="profile-picture-avatar" src="../img/nziie.png"/>
  <div className="name">
    vNziie--#7777
  </div>
  <div className="comment">
    update author
  </div>
</div>
<br/>

<h3>Want to contribute to Server Manager?</h3>

<div className="pyc-hero__actions">
  <Button link="https://discord.gg/6bCKvP24kb">Join our Support Server</Button>
</div>



