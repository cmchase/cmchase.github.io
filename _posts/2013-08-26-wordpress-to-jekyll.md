---
layout: post
title: WordPress to Jekyll Conversion
---

So, this is my first post since I converted my site from WordPress to Jekyll. It was a really good experience and I learned a lot from it.

I'm not going to do a how-to, there are dozens of great articles and posts to be found, but I'm going offer a few quick bullet points.

## What I used
- **Yeoman** to scaffold out my initial app.
- **Jekyll** to actually generate the site.
- **A Python XML parser** that took my a dump of my WP site's XML and converted the posts into Markdown.
- **Grunt.js** for build automation. This was especially helpful for processing my LESS files quickly.
- A few parts of **Bootstrap**. I hate recreating the wheel if I don't have to.
- **GitHub** for my hosting.

## Pros
- **IAWriter** is a pretty sweet writing app and now I've got a good reason to use it.
- **No more hosting**. Between Dropbox and GitHub, it really doesn't make sense for me to pay a provider, even a really cheap one.
- **Easier to template**. WordPress isn't rocket science, but it's still a hassle to work with. The mistake I made with my last WP template was that I worked really hard to make it flexible and easy to create variations on, but went on to do absolutely nothing with it.
- **No security concerns**. Even though I didn't use a lot of the features that come with WordPress, plugins and commenting to name two, it was still just a matter of time before my site got hacked. I count myself lucky that it never happened, WP is a solid solution, but you know, it's the internet.
- **Built-in versioning**. It seems stupid, but I really like that I don't have to do anything extra for version control. This site is hosted on GitHub, so that's inherently taken care of.

## Cons
- Meh. I don't know, I guess I feel obligated to come up with a Con, but I still haven't figured out a good way to write something with my iPad. I'd rather not script something to watch a Dropbox folder and push to GitHub from my home system, but that seems to be the solution others are using.

One major Pro I left for last, is that I feel okay with the progress on this site being iterative now. I've committed a ton of small changes in the design since it completely replaced my old site. FTP always felt like a huge chore, a big last step, but pushing to a repo for small, incremental changes feels natural.
