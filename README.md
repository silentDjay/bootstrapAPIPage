# bootstrapAPIPage
This repo houses my project incorporating the Bootstrap framework and calls to two different APIs

Some thoughts on where to take this project:

Things to improve about the existing design:

- impove the specificity of the address - depending on the length of the returned value, simply use the first option or the first and second options, for example: (Durham, NC, USA would only return Durham) AND figure out how to get better, more consistent results from google based on what level of specificity I declare (results[4] vs. results[5], por ejemple. 

- put the list of songs/artists on the modal, so that it goes away on the same click that gets rid of the modal. 

- allow the user to play 30 second snippets of each song (nightmare mode)
- collect a list of click histories

---- when you're read to move on to that, make the game into on that gives you a country or city or state/province/county (randomly selected from a google places library) to try and click on on the satellite map (only the natural topography and satellite images give the context). When the user attempts to click on that place...

1. put a marker where they clicked.
2. switch the map to the 'standard' view to give them a reference
3. tell them how far off they were (not sure where one area begins and another ends)
4. Give it a zippy, punny name ... like ...Mapstery...
5. Give the user another option when they're done with that one; refresh the zoom and sattelite map
