---
title: Mass Ban
description: Bans more the one member at a time from the server
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
Bans more the one member at a time from the server

## Usage
```
b!massban [members] {reason}
```

## Permissions
```
`Ban Members` permissions
```

## Arguments
```
[members] - User IDs
{reason} - Reason for the mass ban
```

## Example
<DiscordMessages>
  <DiscordMessage author="User" avatar="blue">
    b!massban 1,2,3,4,5,6,7,8,9 reasons
  </DiscordMessage>
  <DiscordMessage author="BobCat" avatar="blue">
    <DiscordEmbed
        slot="embeds"
        color="#5865f2"
        authorImage="blue"
        authorName="User has been Unbanned"
    >
      <DiscordEmbedDescription slot="description">
          <DiscordMarkdown>
						**Reason:** reasons
          </DiscordMarkdown>
      </DiscordEmbedDescription>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>
