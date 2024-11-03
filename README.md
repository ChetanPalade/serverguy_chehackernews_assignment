# Algolia Hacker News Search Clone
This project is a React-based clone of the Algolia Hacker News search interface. It allows users to search for stories, comments, or polls from Hacker News, filter results by popularity or date, and narrow down searches based on time ranges. Users can navigate through paginated results and view individual story details.

# Features
Search Functionality: Allows users to search for stories, comments, or polls by title, URL, or author.
# Filtering:
-> Story Type: Filter by stories, comments, or polls.
-> Sort Order: Sort results by popularity or date.
-> Time Range: Filter results by time ranges such as "Last 24 hours," "Past week," "Past month," and "Past year."
-> Pagination: Navigate through multiple pages of search results.
-> Responsive Design: Adapts to different screen sizes for a seamless experience on both desktop and mobile devices.

# Key Components
=> Header: Displays the title and a placeholder login link.
=> SearchBar: Provides filters and a search input field for querying stories.
=> ResultItem: Displays individual search results.
=> Pagination: Allows users to move between pages of search results.

# Setup

Prerequisites
Node.js: Make sure Node.js is installed on your machine.
npm or yarn: This project uses npm by default, but you can use yarn as well.

# Installation
Clone the repository:
 -> git clone [https://github.com/ChetanPalade/serverguy_chehackernews_assignment.git]

 -> cd hackernews_clone
 
#  Install dependencies:

 ---- npm install

# Start the development server:
 ---- npm start

=> Open the app in your browser: Navigate to http://localhost:3000.

# Usage

Use the search input and filters to find specific stories, comments, or polls.
Navigate through paginated results using the "Previous" and "Next" buttons at the bottom of the page.

# Integration with Algolia Hacker News API
Currently, this project uses mock data for demonstration. To integrate it with the actual Algolia Hacker News API, replace the handleSearch function in Home.js with an API call as follows:

# javascript

import axios from 'axios';

const handleSearch = async (query, storyType, sortOrder, timeRange) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=${storyType}&numericFilters=${timeRange}&sortOrder=${sortOrder}`);
  setResults(response.data.hits);
};
Make sure to update the API parameters as needed.

# Folder Structure
src/components: Contains reusable components like Header, SearchBar, ResultItem, and Pagination.
src/pages: Contains the main Home page where all components are brought together.
src/App.js: Main application file that renders the Home component.
src/index.js: Entry point that renders the React app.

# Dependencies
React: UI library for building the interface.
Axios (optional): For making API calls to the Algolia Hacker News API (if integrated).

# Screenshots
Include screenshots here showing the search page, filters, and pagination.
![Screenshot (1)](https://github.com/user-attachments/assets/9c9544e5-1c5e-408f-84ca-23279edbe1a0)
![Screenshot (2)](https://github.com/user-attachments/assets/4053e19b-3d32-43ed-9365-534210e1b399)![Screenshot (8)](https://github.com/user-attachments/assets/86d37a77-0721-43aa-9331-d909e0805c75)
![Screenshot (3)](https://github.com/user-attachments/assets/e0e5dfb1-efe6-4c56-9170-137165de7a0b)

![Screenshot (4)](https://github.com/user-attachments/assets/0481fbf0-27c2-473c-a3cc-f1d084530b06)

![Screenshot (5)](https://github.com/user-attachments/assets/884b3836-73a2-4798-93f9-7362dafeccd4)
![Screenshot (7)](https://github.com/user-attachments/assets/6da6748a-059c-4a98-b95a-509a7c82d6e3)
![Screenshot (6)](https://github.com/user-attachments/assets/82cc07e5-3804-4e5a-bd24-a8b90cd40675)
![Screenshot (10)](https://github.com/user-attachments/assets/a451c4bf-1428-4fd3-80df-42c0edea9c0e)
![Screenshot (9)](https://github.com/user-attachments/assets/0a3bbc10-bfe3-483c-9005-b3790d121982)

# Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.
