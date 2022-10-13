---
title: Giveaways
description: Documentation regarding a giveaway system
sidebar_position: 1
---

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
import {
  DiscordButton,
  DiscordButtons,
} from "discord-message-components/packages/react";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <code>/giveaway start [...]</code> | Start a giveaway       |   False        |
| <code>/giveaway end <giveaway_id></code>   | End a giveaway via giveaway ID        |     False        |
| <code>/giveaway reroll <giveaway_id> &lt;winners&gt; </code>   | Reroll a giveaway        |     False        |
| <code>/giveaway delete <giveaway_id></code>   | Delete a giveaway from the database        |     False        |
| <code>/giveaway view [giveaway_id]<a></a>[hidden]</code>   | View a giveaway or all giveaways        |     False        |
<br/><br/>

## Usage
# /giveaway start

## Example
```txt
/giveaway start title:$5 Nitro Classic description:$5 Nitro Classic giveaway... duration:6h winners:1
```

## Example
<DiscordComponent>
    <DiscordMessage author="BobCat" avatar="blue" bot>
       <div slot="interactions">
         <DiscordInteraction profile="bob" command>
           giveaway create
         </DiscordInteraction>
       </div>
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
                <span className="timestamp">in 6 hours</span>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Host">
                  <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">1 winner</span>
        </DiscordEmbed>
      
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="primary" emoji="🎉"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">5 entries</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>
