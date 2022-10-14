---
title: Unban
description: Unbans a member from the server
---

import Button from '../../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordMarkdown,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";


## Description
Unbans a member from the server

## Usage
```
b!unban [member]
```

## Permissions
```
`Ban Members` permissions
```

## Arguments
```
[member] - A user mention or User ID.
```

## Example
<DiscordMessages>
  <DiscordMessage author="User" avatar="blue">
    b!kick <DiscordMention type="user">User</DiscordMention>
  </DiscordMessage>
  <DiscordMessage author="BobCat" avatar="blue">
    <DiscordEmbed
        slot="embeds"
        color="#5865f2"
        authorImage="blue"
        authorName="User has been Unbanned"
    >
      <DiscordEmbedDescription slot="description">
      </DiscordEmbedDescription>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>
