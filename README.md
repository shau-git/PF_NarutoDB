# PF_NarutoDB 
This NarutoDB app provides a comprehensive database of the characters from Naruto (and Boruto), organized into in sections: Characters, Tailed Beasts, Team Akatsuki & Team Kara. It is defenitely a great resource for all Naruto's fans. With this app, you can easily access detailed information about each character including their name, appearance, personality, jutsus and Ninja tools. 

Each sections offer every character's profile , the ability to seacrh by name , a mini game where you can draw a card, and a small quiz. Furthermore, to make this app even more enjoyable, sound effects and images are also included. User can click to explore surprises!. Hope you enjoy using this app.

## Design Process
My intention for the design of this app was to make it look like anime style and game. To achieve this, I searched the design ideas from youtube and google which eventually led to the creation of this design.


## Features
In this section will dive dip in all the details of each page and sections.

### First page title: Naruto DB
1. __NARUTO DB__ :
   - There are 4 audio files embedded in the **_'NARUTO DB'_** text. Each click will change the audio. After fourth click, the audio will loop back to the first audio.
2. __CHANGE IMAGE__ :
   - User can change the center image by clicking the **_'CHANGE IMAGE'_** button. After seventh image, the images will loop back to the first one
3. __CENTER IMAGE__ :
   - User can toogle between light mode and dark mode background by clicking the center image.
4. __GET STARTED__ :
   - Clicking this will take user to the next page (Main Page).


### Second page title: Main Page
1. __NARUTO WORLD__ :
   - There is a **_'NARUTO WORLD'_** for you to change the display in the center part(images , audio or quote).
2. __BACK__:
   - **_'BACK'_** button takes you back to the previous page
3. __CENTER PART__:
   - Different display (images , audio or quote) will be appear here after clicking **_'NARUTO WORLD'_**. Each clicking will show different image, audio button and quote (if available). The last display is **'KAKASHI'S TEAM 7'**,after clicking it will loop back to the first one.
4. __CHARCTERS, TAILED BEAST, AKASTUKI, KARA__:
    - These are the sections where all the informations is located. access each section, you'll find __'NARUTO WORLD'__ (which takes you back to the main page, i.e., the second page) and __'BACK'__ (which takes you back to the previous page). Additional features will be explained below.


### CHARCTERS, TAILED BEAST, AKASTUKI, KARA

1. __GET ALL PROFILE__:
    - Display the profiles and information for all characters.Note that some charcters's images are not available in the API or online.
    - When click and hold in each character's profile will rotate 360 degrees.
    - __'MUSIC-X'__ button offers different audio tracks to make it not boring(only available in CHARACTERS section).  __'STOP'__ button to stop the audio.
2. __SEACRH BY NAME__ :
    - **NOTICE** : TAILED BEAST section does not have this..
    - This sections allows user to seacrh characters by name. User must input the exact name (upper/lower case does not matter) that appears in  **_'GET ALL PROFILE'_**, else the browser will trigger alert "No character found! Try inputing the exact name." .
    - All the seacrching name have to match those appear in their __'GET ALL PROFILE'__ . For example: Itachi Uchiha is an AKATSUKI member, so he will not appear in KARA & TAILED BEAST profiles. Seacrhing Itachi Uchiha in either of those will trigger alert "No character found! Try inputing the exact name." , unless searching  it in CHARACTERS section.
    - After entering the character's name, user can either press "Enter" or click the search logo at the left of the search bar to initiate the seacrh.
    - The menu button is available to display a sidebar with available name in in  alphabetical order, if no name is found under a particular letter, "NA" will be displayed.
    - To close the sidebar, click the left arrow at the top left corner in the sidebar.
4. __DRAW A CARD__:
    - Clicking the **_DRAW_** button will randomly display a charater's image , id & name. Click again to draw another one.
5. __QUIZ__:
    - Some simple quizzes.
    - Besides the **_'BACK'_** button have some theme music button.
  


## Technologies Used
This project is constructed by using HTML, CSS & Javascript, no frameworks.
The Naruto fonts is from [ninja-naruto](https://fonts.cdnfonts.com/css/ninja-naruto)



## Credits

### Content
- quote from Pain was copied from [Pain's quote](https://www.sportskeeda.com/anime/naruto-10-best-quotes-pain-ranked-influence)
- quote from Obito/Kakashi was copied from [Obito&Kakashi](https://www.goodreads.com/quotes/625043-n-the-world-those-who-break-the-rules-are-scum)

### Media and audio
  - All the photos used in this project are from Google and Pinterest , audio are from Zedge
    
### Acknowledgements
The API source for this project [narutodb.xyz](https://narutodb.xyz/)








