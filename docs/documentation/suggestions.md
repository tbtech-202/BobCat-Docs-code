---
title: Suggestions
description: Documentation regarding the suggestion system
sidebar_position: 2
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


| Usage      | Description | Premium |
| ----------- | ----------- | ----------- | 
| <span className="mention">/config suggestions_channel &lt;channel&gt;</span>      | Set the servers suggestion channel       |   False        |
| <span className="mention">/suggest &lt;suggestion&gt;</span>    | Suggest something to the server        |     False        |
| <span className="mention">/suggestions edit &lt;suggestion_id&gt;</span>   | Edit your own suggestion (content)       |     False        |
| <span className="mention">/suggestions view &lt;suggestion_id&gt;</span>   | View a suggestion in-depth        |     False        |
| <span className="mention">/suggestions approve &lt;suggestion_id&gt; [comment] [close_voting]</span>    | Approve a suggestion        |     False        |
| <span className="mention">/suggestions deny &lt;suggestion_id&gt; [comment] [close_voting]</span>    | Deny a suggestion        |     False        |
| <span className="mention">/suggestions implement &lt;suggestion_id&gt; [comment] [close_voting]</span>    | Implement a suggestion        |     False        |
| <span className="mention">/suggestions consider &lt;suggestion_id&gt; [comment]</span>   | Consider a suggestion        |     False        |
| <span className="mention">/suggestions delete &lt;id&gt; [notify_author=True]</span>  | Delete a suggestion from the database and the suggestions channel | False |
| <span className="mention">/suggestions comment &lt;id&gt; &lt;comment&gt;</span>    | Comment on a suggestion        |     <premium>True</premium>        |

:::caution Warning

Deleting a suggestion message **doesn't actually delete the suggestion from the database**. Please use `/suggestion delete` to delete a suggestion.

:::

:::note
Suggestion commenting is currently not finished yet and may have some small and minor bugs.
:::

## Examples

```txt
/suggest suggestion: This is a suggestion!
```
<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="User#0000"
        thumbnail="/img/logo.png"
        borderColor="#5865F2"
        timestamp="12/24/2022"
        footerIcon="/img/logo.png"
        image="/img/banner-v3.png"
        >
        This is a suggestion!            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Votes">
                  <strong>Upvotes:</strong> 0 <code>(0%)</code>
                  <br/>
                  <strong>Downvotes:</strong> 0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Status">
                  📣 This suggestion is waiting for an official answer!
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">Suggestion ID: wasdabc12340</span>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>