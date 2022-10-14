---
title: Clear
description: Deletes a number of messages in a channel
---

import Button from '../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";


## Description
Deletes a number of messages in a channel

## Usage
```txt
b!clear [amount]
b!purge [amount]
```

## Permissions
```txt
`Manage Messages` permissions
```

## Arguments
```txt
{amount} - The amount of messages you want to delete
```

## Example
<DiscordMessages>
  <DiscordMessage author="User" avatar="blue">
    b!clear 5
  </DiscordMessage>
  <DiscordMessage author="BobCat" avatar="blue">
    Cleared 5 messages
  </DiscordMessage>
</DiscordMessages>
