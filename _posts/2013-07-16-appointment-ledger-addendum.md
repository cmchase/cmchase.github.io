---
layout: post
slug: appointment-ledger-addendum
title: 'Appointment Ledger: Addendum'
categories:
- Code
- Works
---

Not 18 hours after posting about [a weird code smell](/the-appointment-ledger-smells-funny/), we found a better solution to using NotificationCenter: exclusiveTouch. Actually, by "we" I mean "John", the principal software developer I'm working with for our lane application.

Setting exclusiveTouch to YES within the child controller for the buttons navigationController.navigationBar totally did the trick. We still have to use the NotificationCenter elsewhere, but John's solution is much cleaner.

Thanks, John, at least you're not a jerk about being right all the time.