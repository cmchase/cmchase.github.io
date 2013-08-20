---
layout: post
slug: icon-fonts-eff-yeah
title: Icon Fonts? Eff Yeah!
categories:
- Code
---

I went to the first-ever Front-End Design Conference Workshop to get some insight on how [@nickawalsh](https://twitter.com/nickawalsh) and [@drewbarontini](https://twitter.com/drewbarontini) do things over at [Envy Labs](http://envylabs.com/). They were great! They kept things going at a good pace and were super-patient with my constant badgering. They laid out a lot of their processes and the thinking behind their methodologies; I don't agree with a couple of their approaches -- I'm sure our opinions are colored by the stacks we work in (.NET vs. Rails) and team composition -- but seeing how they do things was invaluable.

Something I absolutely took away from the workshop and implemented as soon as I got back to the office was the use of font icons. They pulled up [icomoon.io](http://icomoon.io/) and demoed a quick SVG conversion. My mind was just blown because it totally solves a problem I've had coming up at Loop. (We're about to update all of our icons to a new set to match Subaru's branding collateral.)

I wanted to allow for some size and color variations for our CSS background icons without compromising IE8 support, but adding/maintaining hundreds of images would be an enormous pain in the ass. We've also been looking into a way to generate sprite sheets to keep the server requests to a minimum, but that's its own maintenance hassle and the file would have been enormous.

The workshop topic couldn't have come at a better time -- font icons really has saved the day and I feel like an idiot for not having thought of it myself. I looked into the technique a year or two ago, but couldn't use it for several reasons:



	
  * We still needed to support IE7. (Dropping it didn't happen until about 6 months ago.)

	
  * We were locked into a colorful icon set full of gradients. (Fonts really only work for flat, monochromatic icons.)

	
  * The solutions I looked at weren't extensible or maintainable. For a constantly growing and changing app, this was a big deal breaker.


I spent a bit of time on Monday testing the waters and converting our huge library of icons to SVG for use as a font. We currently have something in the area of 60 actively-used icons that I have to replace, but I wanted to make the font more future-proof by including more icons than we currently needed.We may have gone overboard by allowing for 300+ icons/characters in the font, and I'm sure we could have shaved off a couple hundred kilobytes in file size if we kept to just the icons we needed right away, but I needed to err on the side of flexibility.

I ran into some hurdles with getting the font to consistently render well on Windows Chrome as well as some small alignment issues, but a small browser prefix and line-height adjustments did the trick. I'm really pumped about the change and convinced our CPO to let the update in for our next release. Thanks again to [@nickawalsh](https://twitter.com/nickawalsh) and [@drewbarontini](https://twitter.com/drewbarontini) for the killer workshop!


