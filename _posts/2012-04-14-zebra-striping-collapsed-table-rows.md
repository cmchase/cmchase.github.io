---
layout: post
slug: zebra-striping-collapsed-table-rows
title: Zebra Striping Collapsed Table Rows
categories:
- Code
- Design
- Tips &amp; Advice
---

About 6 months ago we had to add some data to an already overloaded ROI report. We were displaying the aggregated results for about 20 categories and we needed to include some sub-categories.

I'm a firm believer that good reports and dashboards start by limiting yourself to the important bits. I suggested that we put this detailed information on separate drilldown screens but key stakeholders insisted on keeping everything on a single page.


## Too Much Information


To be clear, we're talking 20 categories, with up to a dozen sub-categories each, reporting on 16 metrics. That's a ton of information to cram into a single screen, especially when you consider that a very large minority (over 30%) of our customers run their monitors at 1024 x 768.

After some debate, which lead to name-calling, which then lead to a bit of hair pulling, I was happy to compromise by collapsing child columns and data rows into their parent categories. (It's not ideal, but it beats the hell out of the alternative of side-scrolling.)


## Long Story Short


We got the new stuff in, collapsing/expanding worked great, but the styling was off. We'd been using the [CSS :nth-child pseudo-selector](http://css-tricks.com/how-nth-child-works/) to handle our zebra-striping and it just kept freaking out with the hidden rows. (Examples show content from my dev environment):

`tr:nth-child(even) td { background: #ededed; }`

![Parts Arrival should show the alternate background](/assets/img/2012/04/roi01.png)

![But was being applied to the hidden row "Interval #1"](/assets/img/2012/04/roi02.png)

No problem, we'll just add a class to the parent rows and get more specific with the selector:

>`tr.parent:nth-child(even) td { background: #ededed; }`

Nope. That didn't do it. I spent some time with Google and I tried a bunch of variations on the selector, including nth-of-type, only to things worse in varying degrees.

It turns out that the selectors just didn't matter because the browser was [only looking at the element itself](http://www.w3schools.com/cssref/sel_nth-child.asp) (TR). (I'm sure I could have worked this out if I was willing to nest the child rows in more mark-up, but I just wasn't willing to go that route.)

I really, really wanted to handle this with abstracted CSS. There are just a few of us front-end developers to support around 20 back-end guys (tee-hee!), and the more we can make the content design simply work for them the better.

(There's also the issue of maintaining a 500+ page web application -- the more concrete and page-specific the solution, the harder it is to keep up with.)


## Stop Fighting It and Fix the Damn Thing


Like so many problems in front-end development, jQuery was the solution:

>`$("tr.parent:even").addClass("alt");`

![The backgrounds now alternate correctly](/assets/img/2012/04/roi03.png)

![And the child rows were able to get their own styling.](/assets/img/2012/04/roi04.png)

I just know that one of these days an engineer is going to come in and screw this up, but jQuery saved the day because its selector engine is just so, so much better.
