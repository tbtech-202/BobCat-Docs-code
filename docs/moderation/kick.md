---
title: Kick
description: Kicks a member from the server
---

import Button from '../../src/components/Button';
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
 Kicks a member from the server

## Usage
```
b!kick [member] {reason}
```

## Permissions
```
`Kick Members` permissions
```

## Arguments
```
[member] - A user mention or User ID.
{reason} - A reason for kick.
```

## Example
<DiscordMessages>
  <DiscordMessage author="User" avatar="blue">
    b!kick <DiscordMention type="user">User</DiscordMention> reasons
  </DiscordMessage>
  <DiscordMessage author="BobCat" avatar="blue">
    <DiscordEmbed
        slot="embeds"
        color="#5865f2"
        authorImage="blue"
        authorName="User has been kicked"
    >
      <DiscordEmbedDescription slot="description">
          <DiscordMarkdown>
						**Reason:** reasons
          </DiscordMarkdown>
      </DiscordEmbedDescription>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>
