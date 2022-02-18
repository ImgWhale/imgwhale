---
next: ./new.md
---

![logo](/imgwhale.png)

# Overview

Welcome to imgwhale!
You've come to the right place.

## What Is imgwhale?

imgwhale is an open-source image storage service built in [typescript](https://typescriptlang.com).

It is free for all to use and we too hate api-keys so same is not required to use imgwhale.

::: tip Join the Community!
We have a friendly [community chat](https://t.me/IndianBotsChat) on Telegram that welcomes all new members.
Join us to get assistance, ask questions, and learn tips and tricks for your next project.
:::

## Api Limit

imgwhale, to reduce spam, has a limit of 49 requests per 10 seconds per each IP address.

> Over the limit, you will get a **429** `error`.

## Responses

The following are all the possible responses from imgwhale.

### IMAGE_FIELD_EMPTY <Badge text="POST" type="danger" vertical="middle" />

::: danger This error is returned when the image field is empty.
**Status Code** • `400`<br>
**Message** • `IMAGE_FIELD_EMPTY`<br>
**Error** • `true`
:::

### IMAGE_TOO_LARGE <Badge text="POST" type="danger" vertical="middle" />

::: danger This error is returned when the image is more than 10 mb.
**Status Code** • `400`<br>
**Message** • `IMAGE_TOO_LARGE`<br>
**Error** • `true`
:::

### TOO_MANY_REQUESTS <Badge text="POST" type="warning" vertical="middle" />

::: warning This error is returned when you have exceeded the limit of requests per 10 minutes per each IP address.
**Status Code** • `429`<br>
**Message** • `TOO_MANY_REQUESTS`<br>
**Error** • `true`
:::

### IMAGE_UPLOADED <Badge text="POST" vertical="middle" />

::: tip This is returned when the image is uploaded successfully.
**Status Code** • `200`<br>
**Message** • `IMAGE_UPLOADED`<br>
**Error** • `false`
:::

### INVALID_ENDPOINT <Badge text="POST" type="danger" vertical="middle" />

::: danger This error is returned when the endpoint is invalid.
**Status Code** • `400`<br>
**Message** • `INVALID_ENDPOINT`<br>
**Error** • `true`
:::

### IMAGE_ID_EMPTY <Badge text="GET" type="danger" vertical="middle" />

::: danger This error is returned when the image id is empty.
**Status Code** • `400`<br>
**Message** • `IMAGE_ID_EMPTY`<br>
**Error** • `true`
:::
