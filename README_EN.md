<!-- markdownlint-disable MD041 MD045 -->
<p align="center">
  <img src="./src/.vuepress/public/logo.png">
</p>

# Yuyuko's Hidden Cup (YHC) Official Website

[中文文档](./README.md) ｜ English

Yuyuko's Hidden Cup *(hereinafter referred to as YHC)* is a community tournament of the rhythm music game named [osu!](https://osu.ppy.sh), hosted by player [SIyuyuko](https://osu.ppy.sh/users/9794030).

The website mainly records and collects every season's contents, including mappools, players, and results, etc.

## Menu

### Docs

`Docs` introduces YHC basic information, such as description, rules, and mappool.

### Archives

`Archives` collects every season's tournament timeline, mappool, and mainsheet.

### Memories

`Memories` collects players acticities during tournaments opening, it is divided into two parts called `Collab` and `meme`.

- `Collab` saves team collab images, which are organized by players on their own, mostly.

- `meme` saves funny images, like emoji, chat screenshots, gameplay gif.

### About

`About` introduces tournament staffs, and provides ways to feedback for the website.

## Features

- The style with website syncs with season theme, it would be changed regularly.

- Provides tournaments countdown components, you can import it on-demand according to the time when the next tournament is open.

- Mappool rendered by components, and support functions as follows.
  - [x] open beatmap info page in osu! website.
  - [x] copy beatmap bid.
  - [x] download beatmap files directly.
  
  ...

## Contribution Guide

Thanks for your contributions and suggestions! All of these will be added in future version after discussions.

### Development environment

- Node.js ≥ 20.12.1

### Steps to start

- clone project to local.

- open project folder with IDE, in terminal, input command as follows to install dependencies that project needs.

```bash
npm install
```

- input command to start project.

```bash
npm run docs:dev
```

When the terminal shows words like this, it means project started successfully. Now you can click the url to view website in your browser.

```bash
  vite v5.2.10 dev server running at:

  ➜  Local:   http://localhost:5173/yhc-web/
  ➜  Network: http://xxxx:5173/yhc-web/
```
