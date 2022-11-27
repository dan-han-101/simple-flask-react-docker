
## How to run this code

In one terminal window, start the UI. Note, updates to files will refresh the app automatically.
```
cd ui && yarn start
```

In another service, start the API service.
```
cd api
source venv/bin/activate
flask run --no-debugger
```

## How this was created

### UI code

Create react application code with the following code.

```
npx create-react-app ui
cd ui
npm install react-router-dom
npm start
```

After these commands are done, you should be able to view your application in the browser at http://localhost:3000/

### API code
Go back to the base directory and create the flask app.

```
mkdir api
cd api
python3 -m venv venv
source venv/bin/activate
pip install flask python-dotenv
```

After these commands are done, you should be able to test your api with in your browser with http://localhost:5000/time
