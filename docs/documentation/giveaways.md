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

<br/>

## Example

```txt
/giveaway start title:$5 Nitro Classic description:$5 Nitro Classic giveaway... duration:6h winners:1
```

<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
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
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          giveaway
        </DiscordInteraction>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="primary" emoji="🎉"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">5 entries</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

<br/>

## FAQ
  
### Why can't I remove giveaway entries? {#removing-giveaway-entries}
The reason you can't do this is supported by many ways how a giveaway can be rigged if a manage giveaway entries feature is added. We believe in fair giveaways and no giveaway entries are removed. We understand that some giveaway hosts may want to enforce a custom requirement manually. However, this is why the `/giveaway reroll` command exists and allows you to re-roll the giveaway an unlimited amount of times. Thus, removing the audacity to manage giveaway entries. In the `/giveaway view` command, we may (sooner than later) allow giveaway entries to be viewed but not managed.
