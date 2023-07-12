
# MoviPrism

MoviPrism is a Movie Recommendation WebApp which recommends movie based on Content Similarity to the user.

## Feature
- Single Page Application via React JS which inhances the User Experience
- Content based Movie Recommendation
- Live Real Time Search bar to search movies
- User can add their favourite movie in their Wishlist
- Login using Real Time Firebase API
- Detailed Information about movie





## Demo
<table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/76676066/170882165-051b68ce-707f-4d05-8642-186441f809ba.PNG" width=425 ></td>
    <td><img src="https://user-images.githubusercontent.com/76676066/170882174-0cf90db9-0a78-45f5-99a9-d5d2608cc269.PNG" width=425 ></td>

  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/76676066/170882415-084fccf7-6f7e-4b36-8bb7-d4b737508c74.PNG" width=425 ></td>
    <td><img src="https://user-images.githubusercontent.com/76676066/170882450-25e76497-6d96-44c0-8870-7cfdfc9422e5.PNG" width=425 ></td>

  </tr>
  
  
 </table>



## Deployment

To deploy this project run

Clone the repository
```bash
  git clone https://github.com/Illusion0-0/MoviPrism.git
  cd MoviPrism/
```
Install required NPM packages
```bash
npm i
```
Note: If you face ERR while installing any react dependency, try `npm i --force`

Install Requirements for backend
```bash
cd backend/
pip install -r requirements.txt
```
Create env file in backend directory
```bash
touch .env
```
Add following lines to .env file
```bash
export API_KEY=<YOUR_TMDB_API_KEY>
```


Run Backend
```bash
flask run
```

Open a new terminal
Create .env.local file in root directory
```bash
touch .env.local
```
Add following lines to .env.local file
```bash
REACT_APP_TMDB_API_KEY=<YOUR_TMDB_API_KEY>
```

Run Frontend
```bash
npm start
```
That's It! You are good to go.

## Artitecture

<img width="554" alt="Capture" src="https://user-images.githubusercontent.com/76676066/170882707-2784ec68-1dce-4dcb-a3e1-8883b22d0b32.PNG">

## Tech Stack
<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/react.svg" alt="React Js" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg" alt="Javascript" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/firebase.svg" alt="Firebase" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/html-5.svg" alt="HTML" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/css-3.svg" alt="CSS" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/python.svg" alt="Python" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/numpy-icon.svg" alt="NumPy" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/pandas-icon.svg" alt="Pandas" width="21px" height="21px"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/flask.svg" alt="Flask" width="21px" height="21px">
