---
title: project 1
date: 2019-12-03T15:27:17.862Z
objective: >-
  asdWAAsdhjasldfhj;oiashrdg;olzk\shdj fgl;kajsd;lkg j\as'dl;kjfg a'sl;kdfj
  ;'alkwsjergl;k sjdf'l ksajdf
client: 34RA
partners: sd2q5asdfg
---
Now you can publish your Gatsby site straight from GitHub to Netlify from the create site page - the proper build command for Gatsby will be provided automatically, just select your GitHub repo and go with the default options. Once you connect your GitHub repo to Netlify, deployment will begin. Note that the first deployment could take a few minutes since a lot of things aren’t cached yet. Subsequent deploys will be faster.



Once deployment is complete you’ll be able to view your live site, which should look the same as it did locally.



Authenticating with GitHub

Netlify CMS will need to authenticate with GitHub to save your content changes to your repo. As mentioned above, this requires a server, and Netlify handles that aspect for you. First you’ll need to add your deployed site as an OAuth application in your GitHub settings - just follow the steps in the Netlify docs. This will allow scripts running on your deployed site, such as Netlify CMS, to access your GitHub account via API.



Lastly, we’ll need to change your Netlify CMS config file with your GitHub repo information so that changes are saved there. Replace the backend value in your static/admin/config.yml to match the example below. Note that the repo value must be your GitHub username followed immediately by a forward slash, and then your repository name. If your username is “test-user” and your repo name is “test-repo”, you would put “test-user/test-repo”.



static/admin/config.yml

Copystatic/admin/config.yml: copy code to clipboard

backend:

  name: github

  repo: your-username/your-repo-name

Now you can save the config.yml file, commit the change, and push it to your GitHub repo.



Authenticating with GitLab

See the GitLab Backend section for details on how to configure authentication with GitLab.



If you use the Client-Side Implicit Grant option, disable the Netlify Identity service in your gatsby-config.js:



gatsby-config.js

Copygatsby-config.js: copy code to clipboard

{

  resolve: \`gatsby-plugin-netlify-cms\`,

  options: {

\    enableIdentityWidget: false,

  }

}

Making changes

Alright - you’re all set to make changes in Netlify CMS and see them as commits in your GitHub repo! Open Netlify CMS on your deployed site at /admin/, allow access to GitHub when the permissions window pops up (check for blocked pop ups if you don’t see it), and try creating and publishing a new blog post. Once you’ve done that, you’ll find a new “blog” directory in your GitHub repo containing a Markdown file with your blog post content!



This is the basic function of Netlify CMS - providing a comfortable editing experience and outputting raw content files to a Git repository. You’ve probably noticed that, even though the file was created in your repo, it’s not anywhere on your site. That’s because Netlify CMS doesn’t go beyond creating the raw content - it’s able to work with almost any static site generator because it allows the generator to determine how to build the raw content into something useful, whether for a website, mobile app, or something else entirely.



Right now, Gatsby doesn’t know the new blog post is there, and it isn’t set up to process Markdown. Let’s fix that.



Processing Netlify CMS output with Gatsby

Gatsby can be configured to process Markdown by following the Adding Markdown Pages guide in the docs. Our config.yml file for Netlify CMS is set up to use the same fields used in
