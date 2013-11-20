---
layout: post
title: Rails Rumble 2013
---

It's been just about a month since I finished my second Rails Rumble. For our entry [KidVi.de](http://railsrumble.com/entries/107-kidvi-de), we put together a child-friendly interface for YouTube that let parents curate the videos they can watch by connecting and syncing with a YouTube playlist.

I really regret not putting my thoughts to writing sooner, but here are a few take-aways:

## Good
- We had an extremely diverse team this year. Jason is an incredible full-stack dev (one of the very few devs I know that actually deserves the label), Tyler is amazing with JavaScript and Rails, and Paul did some amazing stuff as our a dedicated DevOps. Things were really smooth because of these three.
- Since our end-users were young children we made a lot of UI decisions with overt simplicity in mind. We went with an extremely minimalistic player interface (Play, Stop and Replay) with really big hit areas. (Fitt's law and all that.)
- Tying into YouTube's API to grab whole playlists deferred complicated interactions (playlist creation and management) to an environment that did the task justice.
- When choosing a video to play, the child is only given two to pick from. I do my best to limit options for my adult users, and I thought it was all the more important for young users. (This one actually took a bit of convincing for the guys.)

## Bad
- I never got around to grabbing good screenshots. Ugh.
- I never work in Rails with the exception of the last two Rumbles. I definitely need to get more experience in the environment so it's less groping around on my end.
- The biggest problem: we did just about no planning before the competition. The longer I'm in the industry the more I see lack of planning as a major cause of failure. I know deciding on requirements and creating roadmaps isn't very fun, but we ran into a lot of feature-creep and were scrambling to figure out what the app should actually do far too late into the competition.

## Next Year
I'm looking forward to Rails Rumble 2014, but I'm going to insist on a few things:

- We need to actually scope out the app and commit to that plan a good deal in advance. I really want to write out the objective, rough out every single view with wireframes and have some honest conversations about priorities. 
- Selling the application and its use to the judges simply cannot be an afterthought. We only have a few seconds to convince a user to stick around and we haven't been very good about that with our last two entries.
- We need to go in with a plan for testing. Paul jumped onto QA Sunday afternoon, but we could have been better organized.

