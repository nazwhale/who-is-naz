---
path: flirting-with-bash
date: 2020-04-21T19:22:56.560Z
title: Flirting with bash
description: Dipping my toes into the murky (but surprisingly shallow) waters of bash
tags:
  - coding
---
Bash is one of those things that all the old school people at work seem to be really good at. To uncultivated me, it seems like you gotta `sed -fqz`, `foppyargs --yug`, then flip the results into an `morp {:-::}` pipe and you're golden.

A few weeks ago I tried to write a bash script and was shocked to realise there's not that much to know before everyone thinks you're a bash wizard.

It's just horribly documented and explained.

Here's what I learnt...

## Bash? Shell? Unix? wtf

I've been pretty much using these terms interchangeably. Turns out...

## Bash for beginners

If you're learning to code, here's the essentials. 

These commands will get you moving around the terminal and doing simple operations to files and directories (creating, deleting, renaming etc).

```shell
mkdir fruit
cd fruit
touch banana.txt
ls # banana.txt
rm banana.txt
pwd # ~/fruit
```

## Bash for improvers

```shell
cat x 
echo x
grep y
head
tail
```

One thing I never really internalised was the difference between `cat` and `echo`. Turns out...

## Scary bash

Here's the stuff that makes you look like a gangsta. 

The surprising thing to me was how few often used commands there actually are.

```shell
awk
sed
xargs
```
