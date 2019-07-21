# streaming_overlays

A web application to host our streaming overlays and schedule

## Next time

Build the rest of the database seeds

## What we are building

-   [ ] schedule page
    -   [ ] basic default template
    -   [ ] cancel stream with reason
    -   [ ] choose template to show for schedule page
-   [ ] admin page
    -   [ ] set streaming schedule
    -   [ ] choose what visualizations to use
-   [ ] overlay pages
    -   [ ] starting soon
    -   [ ] break
    -   [ ] ending
    -   [ ] main overlay
    -   [ ] connect to chat
        -   [ ] twitch
        -   [ ] youtube
        -   [ ] when someone follows/subscribes
        -   [ ] when bits are spent/superchat
        -   [ ] visualization for goals
        -   [ ] visualization for bits spent
        -   [ ] visulatization for subscribes
-   [ ] dashboard page for streamer
    -   [ ] list of bits/superchats spent and who sent them
    -   [ ] list of subscribers
-   [ ] landing page
    -   [ ] List of streamers (ordered by who is online)
    -   [ ] link to their schedule pages
-   [ ] 404 page

https://www.streaming-schedule.com - landing page that has a signup / login link
https://www.streaming-schedule.com/brookzerker

## Database Schema

Users

---

|- id - BigInteger \*
| name - string (unique)
| email - string
| email_verified_at - timestamp
| title - string
| password - string
| created_at - timestamp
| updated_at - timestamp

Links

---

id - BigInteger \*
event_id - BigInteger (nullable)
user_id - BigInteger
text - string
to - string

Events

---

id - BigInteger \*
user_id - BigInteger
title - String
description - string

StreamTimes

---

id - BigInteger \*
event_id - BigInteger
start_time - timestamp
end_time - timestamp
