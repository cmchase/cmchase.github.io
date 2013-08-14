---
date: 2013-07-02 00:33:07+00:00
layout: post
slug: icon-fonts-addendum-windows-chrome
title: 'Icon Fonts Addendum: Windows Chrome'
categories:
- Code
---

In [a previous post](/icon-fonts-eff-yeah/) I mentioned that I ran into an aliasing issue with Chrome on Windows while using a custom font I generated using IcoMoon. A search lead me to a [stackoverflow answer](http://stackoverflow.com/questions/13674808/chrome-svg-font-rendering-breaks-layout/14345363) that included:



    
    

>@media screen and (-webkit-min-device-pixel-ratio:0) {
>    @font-face {
>        font-family: 'fontName';
>        src: url('fonts/fontFile.svg#fontName') format('svg');
>    }
>}
    




Incidentally, this same answer is referred to from a [post on IcoMoon](http://icomoon.io/#post/318). This fix probably won't been needed for long, but it helped me out with the font pixelation.
