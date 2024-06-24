#CODEblock

##Features
  * Student mentor role allocation for writing privileges (first person logged will be the mentor and assigned read-only privileges).
  * Real time socket communication to update the room code for the mentor.
  * DB communication using proper routing for saving and fetching code. All code written by student will be saved in mongodb for further usage and fetched upon entering a room.
  * Clear code and reusable components for further development.

##Deployment
The application is deployed using render.com, where inactive deployments will spin down causing communication delay until they spin up again due to usage of a free plan
Initial logging may be delayed by around a minute or more, so please be patient,
(CODEblock)[https://codeblock-0vyg.onrender.com]
