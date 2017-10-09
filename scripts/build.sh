#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="source"
TARGET_BRANCH="master"

function updateProjects {
  yarn install &&
  node scripts/projects_updater.js ${GITHUB_API_V4_READ_TOKEN} &&
  yarn build
}

function create_all_branches {
    # Keep track of where Travis put us.
    # We are on a detached head, and we need to be able to go back to it.
    local build_head=$(git rev-parse HEAD)

    # Fetch all the remote branches. Travis clones with `--depth`, which
    # implies `--single-branch`, so we need to overwrite remote.origin.fetch to
    # do that.
    git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
    git fetch
    # optionally, we can also fetch the tags
    git fetch --tags

    # create the tacking branches
    for branch in $(git branch -r|grep -v HEAD) ; do
        git checkout -qf ${branch#origin/}
    done

    # finally, go back to where we were at the beginning
    git checkout ${build_head}
}


# Save some useful information
REPO="https://github.com/master-atul/master-atul.github.io.git"
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

git config user.name "Atul R"
git config user.email "atulanand94@gmail.com"

create_all_branches &&

git checkout $SOURCE_BRANCH

updateProjects

cp -rf bundle ../portfolio_dist
cp CNAME /tmp/CNAME

git stash
git clean -fd

git checkout $TARGET_BRANCH
cd ..
echo "removing old dist"
rm -rf ./master-atul.github.io/**
cd master-atul.github.io
echo "copying new dist"
cp -rf ../portfolio_dist/* .
echo "current directory ${pwd}"
ls ../portfolio_dist
cp /tmp/CNAME CNAME

git add -A .
git commit -m "Commit new bundle to ${TARGET_BRANCH}"


git push $SSH_REPO $TARGET_BRANCH
