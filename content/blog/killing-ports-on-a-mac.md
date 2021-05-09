---
path: killing-ports
date: 2021-05-09T10:24:28.767Z
title: Killing ports on a mac
description: Because I always forget how
featured_image_url: >-
  https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
tags:
  - coding
---
```bash
# To view all processes running on a given port
lsof -wni tcp:<port number>

# To kill a process with a given PID
kill <PID>
```
