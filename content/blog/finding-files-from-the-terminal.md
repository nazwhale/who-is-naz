---
path: filding-files-terminal
date: 2021-05-10T10:49:51.662Z
title: Finding files from the terminal
description: Using the `find` command
featured_image_url: >-
  https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
tags:
  - coding
  - bash
---
```bash
# Find files in Desktop including the word "pizza"
find ~/Desktop -name '*pizza*'

# Case insensitive
find ~/Desktop -iname '*pizza*'
```
