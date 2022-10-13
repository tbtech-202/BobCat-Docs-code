---
title: Troubleshooting
description: Having trouble with Server Manager?
---

## 403 Forbidden

What this error means is that Server Manager tried to execute an action, but failed.

### Missing Permissions
This should be self explanatory as it's a very common error, the bot is missing permissions to execute an action - or did but failed. To fix this, we recommend giving the bot `Server Administrator` permissions for an easy fix. Not comfortable giving the bot admin permissions? That's alright! We'll just have to take the longer route instead. 

Below, match the command you're trying to use with the table below and give it the permissions it needs.

<details className="customdetails">
<summary>/kick</summary>

`Kick Members`

`Send Messages`

`View Channels/Read Messages`

`Read Message History`

`Use External Emojis`

`Embed Links`

</details>
<br/>

<details className="customdetails">
<summary>/ban</summary>

`Ban Members`

`Send Messages`

`View Channels/Read Messages`

`Read Message History`

`Use External Emojis`

`Embed Links`

</details>
<br/>

<details className="customdetails">
<summary>/warn</summary>

`Send Messages`

`View Channels/Read Messages`

`Read Message History`

`Use External Emojis`

`Embed Links`

</details>
<br/>

<details className="customdetails">
<summary>/mute</summary>

`Moderate Members`

`Send Messages`

`View Channels/Read Messages`

`Read Message History`

`Use External Emojis`

`Embed Links`

</details>
<br/>

<details className="customdetails">
<summary>/suggest</summary>

**Access to the suggestions channel**

`Send Messages`

`View Channels/Read Messages`

`Read Message History`

`Use External Emojis`

`Embed Links`

</details>
<br/>

<details className="customdetails">
<summary><code>All suggestion marking</code></summary>

**Access to the suggestions channel**

`Send Messages`

`View Channels/Read Messages`

`Read Message History`

`Use External Emojis`

`Embed Links`

</details>
<br/>

## KeyError
This is an error on our side in which you can't fix. Should you encounter this error, **[contact us in our support server](../support)**.

## TypeError
Again, this is an error on our side. Should you encounter this error, **[contact us in our support server](../support)**.

## Other
If you encounter any other error that's not listed here, please **[contact us in our support server](../support)** immediately so we can get out a fix.
