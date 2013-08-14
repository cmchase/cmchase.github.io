---
date: 2013-07-13 02:34:08+00:00
layout: post
slug: one-more-thing
title: One More Thing...
categories:
- Design
---

We've been designing up new dashboards in the app for Subaru and some of the frustrations of client work have been flooding back. I feel like I put up a good fight when it comes to reigning... _ambitious_... ideas back down to earth, but some times they sneak something in during a review that I just can't deal well with.

The following "before" screenshot is an example.

[![01](/assets/img/2013/07/01-300x199.png)](/assets/img/2013/07/01.png)

This is a pretty complex dashboard, and I think it turned out pretty well, but I really wish we could have narrowed down the data a bit more.

They originally wanted more -- yes, _more_ -- data on the screen and wanted every single datapoint to be a link to its own drilldown. We found some good compromise by including a fair amount of data filtering. The product managers and I were also able to talk Subaru out of the extra links by cooking up some separate dashboards and alternative paths to better view that info. (Two of the bigger problems I had with including the extra links is the extreme clutter they'd add as well as the confusion links within filters would have caused.)


## Could you just add...


The "one more thing" that really caught me here was adding a bit more information to the "All" section in the segment filter along the top. "All" isn't just an aggregate of the 4 segmentations, it also includes a 5th source -- a unit not important enough to filter on but leaves the data misleading if not included.

[![One really good thing about this review is that I went back to add space between the Communication and Responses section to make it clearer they're not directly related.](/assets/img/2013/07/021-300x199.png)](/assets/img/2013/07/021.png) 

One really good thing about this review is that I went back to add space between the Communication and Responses section to make it clearer they're not directly related.

I fought pretty hard about adding "Other" like this. I really just wanted a fat asterisk with the additional datapoint down at the bottom, but we had to show it clearly (but without emphasis). I wouldn't say the extra info _ruins_ the layout, but it doesn't do anything to make it better. I wish I could take another crack at this and start fresh, but that just wouldn't fly.


## The "one more thing" isn't always bad...


The following dashboard doesn't have nearly as much info, but the requirements I was provided were largely informed by the one I just showed.

Long requirement doc made short, the screen shows a breakdown of email addresses collected from customers divided into the same segments plus the "Other" segment that gave me trouble before. Each segment has a breakdown of 4 types of email address collected totally to 100% of all email addresses.

I really struggled with this one and wasn't happy with the result. It makes sense to try to reuse the segmentation filter, but that makes comparison of the segments impossible and it leaves me using a pie chart to communicate parts of the whole.

[![There are worse ways to use a pie chart, but you can tell I was being a real smart ass by including is3D: true on that google chart.](/assets/img/2013/07/03-300x199.png)](/assets/img/2013/07/03.png)

There are worse ways to use a pie chart, but you can tell I was being a real smart ass by including _is3D: true_ on that Google Chart.

This was a perfectly acceptable use of a pie chart, especially with how exaggerated I got with the legend, but I've been pushing the Loop stakeholders pretty hard away from pie charts because they abuse the shit out of them. Don't get me wrong, I work with great people, but I'm still trying -- and failing -- to convince them to remove a bunch of pie charts that only show a single percentage without legend or explanation. (Nothing says "58%" more clearly than a big, fat number -- don't confuse things with an unlabeled and free-floating pac-man.)

I really, really didn't want to give in so easily on the poorly reused filter and far-too-large pie chart, so I convinced the product manager I was working with to give me a bit more time to try something else. I thought that if I used some stacked bar charts I could make the data easier to compare without the need for the filter.

[![](/assets/img/2013/07/04-300x199.png)](/assets/img/2013/07/04.png)

This is really rough. It took me longer than expected to prototype this in Google charts (to make sure it could be done with their Charts API) and I didn't spend any time polishing the layout.

This really didn't work out as I hoped. Yes, you can compare the email types across segments and it doesn't rely on a shoehorned filter, but there's nothing intuitive about this report. I was disappointed and recommended that we only show the pie chart to Subaru.

On Monday I got word back with two needed revisions: we needed to show what the tooltip on the segmentation filter would look like and we needed to add a parent filter to the entire screen to separate Service Customers and Sales Customers.

I was already super-unhappy with the result and adding yet another filter couldn't do anything to improve things. I made sure that these revisions made it to the bottom of my priorities list and saved them for the end of the week.

I got started on the changes this morning and, after a few _really awful_ ideas, I decided this was the excuse I needed to break away from the horizontal filter bar.

[![](/assets/img/2013/07/05-300x165.png)](/assets/img/2013/07/05.png) 

I realize the tabs don't make a lot of sense out of context with the rest of the app, but they really do reuse a common UI pattern for us.

This needs refinement and will get that attention during implementation, but I think this layout works a lot better and matches the vertical filtering used in the Communications and Response charts from before. The tabs encapsulate the chart and filters pretty well -- especially with some of the filter changes between Service and Sales not shown here. One other benefit is that the content grouping makes it more clear what the user should expect when they hit Schedule or Download.

I'm sure I'll find out what Subaru says next week, I just hope they like the changes because I'm not sure what I'll do if I have to go back to the previous filter layout. (I'll probably just light myself on fire -- that's always an option.)
