import "gapi-script";
import GoogleLogin from "react-google-login";

const clientId =
  "982357118495-2s0vbkajdt2m462q6k9aott6vjp24op6.apps.googleusercontent.com";

const GoogleLoginComponent = () => {
  return (
    <div style={{ marginTop: 50, display: "flex", justifyContent: "center" }}>
      <GoogleLogin
        clientId={clientId}
        onSuccess={(response) => {
          fetch(
            "https://www.googleapis.com/calendar/v3/calendars/amir.hemmati@apsaaz.com/events",
            {
              headers: {
                authorization: `Bearer ${
                  response.accessToken || response.code
                }`,
              },
            }
          )
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        onFailure={(error) => {
          console.log(error);
        }}
        cookiePolicy={"single_host_origin"}
        isSignedIn
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <GoogleLoginComponent />
    </div>
  );
};

export default App;
