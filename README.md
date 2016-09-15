# Currency-converter

In order to start using the application it is necessary to perform the following actions:

1. Download and unzip the project on your computer
2. Go to the root folder of the project and used to install all the packages, command "npm install"
3. In the root directory to run the command "npm start"

# Using application:

1.In order for the application to work properly, it is necessary to perform all the steps it has consistently

2.To calculate all the parameters required to first download the data for each course currencies .json files (First step)

3.Important! When you download each currency is required at once to consider options on step 2 (parameters in step 2 are     considered for the currently selected currencies)

4.The correlation is calculated only when all parameters are counted in Step 2, for all currencies. In order to find a      correlation still required to determine which currency pair we use

# Using "Save Data"

1. Before using this function it is required:

    - to uncomment the two lines in the file "App.js":
    "import {saveData} from './SaveData'"  and  "saveData();"
    - In file "LoadJson.js" 
    Correct the two lines, which enter from which date (until today) we'll be downloading.
    Important! It should take a maximum of 5 years, if more then why not preserve such a size
    
    "const dates = Math.floor((new Date() - new Date(2010, 0, 1)) / 1000 / 3600 / 24);"  and
    "let dateStart = new Date(2010, 0, 1);"
    
    "Date(2010, 0, 1)" - where we start
    - in file "server.js", in line "fs.writeFile('*.json', JSON.stringify(abc), function (err) {"
    select which file will keep download data
    
2. Open a new terminal window and run in the root directory.
    Next, it is necessary to perform command "corsproxy", to load http: // localhost: 1337 /
3. Next, the data begins to be downloaded from site NBU, it can be see in a terminal window.
4. When the data in the terminal all loaded, click "Save Data"
