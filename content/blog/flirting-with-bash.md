---
path: flirting-with-bash
date: 2020-04-21T19:22:56.560Z
title: Flirting with bash
description: Dipping my toes into the waters of bash
tags:
  - coding
---
Bash is one of those things that all the "serious old school" devs at work seem to be really good at. It's all "Oh that's easy you just \`xargs\` and then \`sed -rp\` and then pipe that into an \`awk {monkey}\` and you're done. Easy". \
\
While I'm over here with my \`cd\` and not much more. \
\
A few weeks ago I tried to write a bash script and found out to my shock that there's actually not that much to know. It's just horribly documented and explained.

Here i'll show you what I learnt.

## Bash? Shell? Unix? wtf

I've been pretty much using these terms interchangeably. Turns out...



## Bash for beginners

If you're learning to code, here's the essentials. 

These commands will get you moving around the terminal and doing simple operations to files and directories (creating, deleting, renaming etc).

\
\`\``shell

mkdir fruit

cd fruit

touch banana.txt

ls // banana.txt

rm banana.txt

pwd // ~/fruit

\`\``



## Bash for improvers

\`\``shell

cat x 

echo x

grep y

head

tail

\`\``

One thing I never really internalised was the difference between \`cat\` and \`echo\`. Turns out...



## Scary bash

Here's the stuff that makes you look like a gangsta. 

The surprising thing to me was how few often used commands there actually are

\`\``shell

awk

sed\
xargs

\`\``
