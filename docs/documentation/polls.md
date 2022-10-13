---
title: Polls
description: Documentation regarding the polls system
sidebar_position: 3
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
| <code>/poll start &lt;topic&gt; [description] [duration] [@ping_role] [#channel]</code> | Start a poll with an optional duration       |   False        |
| <code>/poll multiple_choice &lt;topic&gt; &lt;choice_1&gt &lt;choice_2&gt  [choice_3] [choice_4] [choice_5] [description] [duration] [@ping_role] [#channel]</code> | Start a poll with multiple choice options       |   False        |
| <code>/poll end &lt;poll_id&gt;</code>   | End a poll via poll ID        |     False        |

<br/>

## Examples

### Boolean Poll

```txt
/poll start topic: Poll topic description: This is a poll description. duration: 7d
```

<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="Poll topic"
        borderColor="#5865f2"
        timestamp="12/24/2022"
        authorIcon="/img/logo.png"
        footerIcon="/img/logo.png"
        authorName="Poll by User#0000"
        >
        This is a poll description.            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Votes">
                <strong>Upvotes:</strong> 3 <code>(100%)</code>
                <br/>
                <strong>Downvotes:</strong> 0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Ends">
                <code>in 7 days</code>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">Vote using the buttons below • Poll ID: 12345678</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          poll start
        </DiscordInteraction>
      </div>
      <div>
        <DiscordButtons>
          <DiscordButton type="success" emoji="✅"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">|</DiscordButton>
          <DiscordButton type="danger" emoji="❌"></DiscordButton>
        </DiscordButtons>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="danger" emoji="🚪">Leave Poll</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>
<br/>

### Multiple Choice Poll

```txt
/poll multiple_choice topic: My Topic option_1: This option_2: Or this choice option_3: Or even this choice option_4: Even this choice option_5: Or this option
```

<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="My Topic"
        authorIcon="/img/nziie.png"
        authorName="Poll by vNziie--#7777"
        borderColor="#5865F2"
        timestamp="12/24/2022"
        footerIcon="/img/logo.png"
        >          
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="1️⃣ This">
                  0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="2️⃣ Or this choice">
                  0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="3️⃣ Or even this choice">
                  3 <code>(100%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="4️⃣ Even this choice">
                  0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="5️⃣ Or this option">
                  0 <code>(0%)</code>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">Vote using the buttons below • Poll ID: 7654321</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          poll multiple_choice
        </DiscordInteraction>
      </div>
      <div>
        <DiscordButtons>
          <DiscordButton type="primary" emoji="1️⃣"></DiscordButton>
          <DiscordButton type="primary" emoji="2️⃣"></DiscordButton>
          <DiscordButton type="primary" emoji="3️⃣"></DiscordButton>
          <DiscordButton type="primary" emoji="4️⃣"></DiscordButton>
          <DiscordButton type="primary" emoji="5️⃣"></DiscordButton>
        </DiscordButtons>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="danger" emoji="🚪">Leave Poll</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

<br/>
