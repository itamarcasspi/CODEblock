#  CODEblock

##  Features
  * Student mentor role allocation for writing privileges (first person logged will be the mentor and assigned read-only privileges).
  * Real time socket communication to update the room code for the mentor.
  * DB communication using proper routing for saving and fetching code. All code written by student will be saved in mongodb for further usage and fetched upon entering a room.
  * Clear code and reusable components for further development.

##  Deployment


The application is deployed using render.com, where inactive deployments will spin down causing communication delay until they spin up again due to usage of a free plan
Initial logging may be delayed by around a minute or more, so please be patient,
[CODEblock](https://codeblock-0vyg.onrender.com)

##  Demo
![lobby](https://github.com/itamarcasspi/CODEblock/assets/74679553/8186b248-80f3-4612-8a81-7051285b9f1d)

In above picture you can see the application lobby, with a simple and clear UI.
Every room is created dynamically with the reusable CodeRoom component.

![coderoom](https://github.com/itamarcasspi/CODEblock/assets/74679553/2b7f9ed6-af6d-4983-aa2c-53c54319e595)

In the above picture you can see the code editor component, with javascript highlighting.
The user is logged as mentor and able to display the student's code changes in real time.
All code changes are saved in the database for furure sessions.


