---
date: 2013-07-15 01:26:46+00:00
layout: post
slug: the-appointment-ledger-smells-funny
title: The Appointment Ledger Smells Funny
categories:
- Code
- Works
---

I recently posted about how [my brain leaks out all the Objective-C I know](/ios-brain-leak/) if I go too long without using it, which is barely an exaggeration,  so I made some time in my day this past Friday to clear out a last-minute bug. In that same post, I mentioned how I fell in love with NSNotificationCenter, which I used to try to handle a bug where the UI gets all wonky if the the user taps the VIN Search button while the user had focus on the SearchBar. (I'm simply disabling the VIN Search button until the SearchBar resigns first responder.)

[![Tapping the VIN Search button while the SearchBar had first responder would cause the SearchBar to scroll up behind the UINavigationController.](/assets/img/2013/07/ledger-300x227.png)](/assets/img/2013/07/ledger.png)

Tapping the VIN Search button while the SearchBar had first responder would cause the SearchBar to scroll up behind the UINavigationController.

Well, QA got really creative and decided to see what would happen if they tapped and held the VIN Scan button and then tapped the SearchBar. The solution wasn't really that complicated, but it took me a bit to figure out what I needed to do and  NSNotificationCenter helped me out again:
	
  * UIBarButtonItems don't seem give  access to the control's events, so I had convert it to a UIButton.

	
  * On TouchDown I send a message to Notification Center so the nested view can disable the SearchBar.

	
  * On TouchUpInside and TouchUpOutside I send another to reenable the SearchBar, but only on the former do I invoke the method I made out of the old VIN Scan's IBAction.


This approach really doesn't feel right because I've now got 3 observers on the child view for the touch events and 2 on the parent for disabling the VIN Scan button -- it really does have a weird smell to it -- but everything I've read seems to point to NSNotificationCenter as the way go. I really don't know of a better way but I'm sure I'll kick myself in the ass about this solution on some far-off date.