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

## I've got a merge conflict in Github and want to resolve locally!

```bash
// Assuming we're on your feature branch:
// Pull in latest changes from master
git fetch origin master:master
git rebase origin/master
```

#### Why not `git merge master`?

Merging in master isn't always what you want
- If you have a branch branched from commit 1 and you add commit 4 and 5, then merge in master which has commits 2 and 3 to your branch, the order of commits becomes 1, 4, 5, 2, 3
- Typically, you want to change the base of your branch so your changes are on the latest master, for that, there's rebase which changes the base commit of your branch. This will then make the commit order 1, 2, 3, 4, 5 (so your branch root changes from commit 1 to commit 3

See master as the source of truth at any given time, with your branched changes wanting to be applied on top.

## What's the difference between `fetch` and `pull` again?
```
git fetch
```

git fetch really only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. Fetch is great for getting a fresh view on all the things that happened in a remote repository.
Due to it's "harmless" nature, you can rest assured: fetch will never manipulate, destroy, or screw up anything. This means you can never fetch often enough.

```
git pull
```

`git pull`, in contrast, is used with a different goal in mind: to update your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly integrates it into your current working copy files. This has a couple of consequences:

- Since `git pull` tries to merge remote changes with your local ones, a so-called "merge conflict" can occur. Check out our in-depth tutorial on How to deal with merge conflicts for more information.
- Like for many other actions, it's highly recommended to start a `git pull` only with a clean working copy. This means that you should not have any uncommitted local changes before you pull. Use Git's Stash feature to save your local changes temporarily.
