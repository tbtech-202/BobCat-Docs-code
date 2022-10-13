---
slug: time-arguments
title: Time Arguments Guide
authors: nziie
---
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Button from '../src/components/Button';
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../src/components/DiscordComponent";

Server Manager uses a custom time converter so that you can provide a human-readable time argument without the hassle of any extra steps. These duration arguments are used in **Moderation**, **Polls**, **Giveaways**, and more. Here is a quick guide to mastering those arguments.

## Key
`d` - days


`h` - hours


`m` - minutes


`s` - seconds

## Examples

```txt title="Using 'd' (days)"
/time argument: 1d
```
<DiscordComponent>
  <DiscordMessage profile="servermanager">
    The time argument you provided was <strong>1 day</strong>!
    <div slot="interactions">
      <DiscordInteraction profile="nziie" command>
        time
      </DiscordInteraction>
    </div>
  </DiscordMessage>
</DiscordComponent>

---

```txt title="Using 'h' (hours)"
/time argument: 1h
```
<DiscordComponent>
  <DiscordMessage profile="servermanager">
    The time argument you provided was <strong>1 hour</strong>!
    <div slot="interactions">
      <DiscordInteraction profile="nziie" command>
        time
      </DiscordInteraction>
    </div>
  </DiscordMessage>
</DiscordComponent>

---

```txt title="Using 'm' (minutes)"
/time argument: 5m
```
<DiscordComponent>
  <DiscordMessage profile="servermanager">
    The time argument you provided was <strong>5 minutes</strong>!
    <div slot="interactions">
      <DiscordInteraction profile="nziie" command>
        time
      </DiscordInteraction>
    </div>
  </DiscordMessage>
</DiscordComponent>

---

```txt title="Using 's' (seconds)"
/time argument: 30s
```
<DiscordComponent>
  <DiscordMessage profile="servermanager">
    The time argument you provided was <strong>30 seconds</strong>!
    <div slot="interactions">
      <DiscordInteraction profile="nziie" command>
        time
      </DiscordInteraction>
    </div>
  </DiscordMessage>
</DiscordComponent>
<br/>

---

> Hope this helps you on the fly while either starting a giveaway, poll, or issuing warnings or mutes!