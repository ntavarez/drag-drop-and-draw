# Drag, Drop and Draw

This project was a challenge from a recruitment process which I participated. Basically, it proposes to make elements draggable within the canvas and make it possible to interconnect them with a line. The line is created by double-clicking on one of the elements and closed by simply clicking on the other one (starting point and destination point), thus drawing a line between them. When dragged, the line could not be lost and would have to follow the movement of the elements.

The biggest challenge of all, without a doubt, was dealing with clicks. Since the line starts with a double click, it's necessary to differentiate it from a single click followed by another, so a time interval was defined between clicks to have this control. And also, the single click alone cannot perform any action, unless the double click has already been called.

None of this would be possible without control variables, both for the program to understand when to draw a line or not, and to understand when to drag or stop dragging an element. Or also to understand which element the line has to start from and how far it needs to go. Anyway, I think it's worth highlighting this too.

It was really cool to be challenged in this way, especially in Javascript, a language I've never had the opportunity to work with. Being able to show that an action so simple for the user hides a code that is not this simple as the action itself. For me, it was a great opportunity to delve deeper, with the obligation to use the language purely, without using libraries, etc. This is because we end up learning more than what is proposed in the challenge, since the research work consists of finding solutions and we see a lot of useful things out there, many ways of doing the same thing and other things (sometimes not so related to the challenge, but that can be useful for future other codes).

At the end, it was a great experience and I would say that a new world opens up with each search.

![](https://github.com/drag-drop-and-draw/gif_ddd.gif)
