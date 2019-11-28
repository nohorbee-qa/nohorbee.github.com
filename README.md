# norbertoherz.com

## How to contribute
For minor changes, you might be allowed (if you have permission) to work on the official repo (in master or at a feature branch). 
For major changes, you mighy want to work on QA first, test, and then publish.

This is done by forking the repo.
For example, there is a nohorbee-qa organization. Always fork from the scratch to it.
- Move to gh-pages (so changes are visible):
```
git checkout -b gh-pages
git push --set-upstream origin gh-pages
```

Since you don't have properties, you might need to tweak the base url. Go to ```config.yml``` and change
```
baseurl: "/nohorbee.github.com" 
```

You will need to rollback this before going to production.

