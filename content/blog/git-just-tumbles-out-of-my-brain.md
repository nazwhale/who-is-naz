---
path: git-just-tumbles-out-of-my-brain
date: 2020-07-20T14:19:02.901Z
title: Git just tumbles out of my brain
description: A collection of git commands I constantly forget
featured_image_url: 'https://post.healthline.com/wp-content/uploads/2020/07/nervous2-30.jpg'
tags:
  - coding
---
## Delete all local changes
```bash
git add .
git reset --hard
```

## Move commit from master to a new branch
```bash
git checkout master
git branch new-branch
git status
git reset --hard HEAD~ #removes the unwanted commit from master
git checkout new-branch
```
