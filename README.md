# Hook A Book! 

This project was made as part of chingu's individual project assignment.

## Brief of the building process:

Before I started actually laying out the structure of the project, I had to decide upon the architecutre of this app, however small it is, I had to decide it's scale (big words, Ooh!)

I knew I am going to build the app using ReactJS framework, what I was unsure of is whether I am going to implement Redux or a Backend server to all this, and server-side render via serving the build file through nodeJS. 

After asking question in the chingu slack community chat, I understood it's way above the app requirements and it's an absolute overkill. 

So then I proceeded to reading about Google Books API while reading chingu's project requirements, edge cases etc... 

Once I wrapped my head around how the google books api calls work, I realized it's nothing complicated for the (not)complex queries necessary for this app. 

## THe PRoject ITself

I've made a standard react folder structure with components folder, and each components lives in seperate component, no matter dumb or not. 

I did struggle a bit with the Modal to show the BookShelf because I was bit stressed about it and was afraid it'll take me way too much time. So, it was the first time I actually RE-USED a Modal component that I built in my other project for the same purposes, so after that I was all set. 


### More Challenges: 

- I had bit of an issue deplyoing the project and serving it through custom domain, bit back and forth and I got this sorted, deployed through gh-pages to my personal domain (hookabook.borispov.com)
- Modal. Mentioned Above.
- RWD: Responsive Web Design. I thought I solved it quickly, but launching the app from my smartphone I realized some mistakes. To this moment: there may me some issues related to the mobile UI which aren't solved yet. Also, I did implemented a pretty bad bookshelf (design wise). 

- I'm sure there are way to optimize my app's prefromance. Something maybe regarding the images loadtime. imlement my loader in more events. In the code, There are ways to tweak and make the code more efficient, however, I wanted the bring the best/fastest MVP I could with the time I had in this period.
-

*Overall I really I enjoyed this individual project. *
