import { useState, useEffect } from "react";
import axios from "axios";

const FyersAuth = () => {
  const [appId, setAppId] = useState("");
  const [appSecret, setAppSecret] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check URL for auth_code parameter when redirected back
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("auth_code");

    if (code) {
      setAuthCode(code);
      // Clean up the URL without refreshing the page
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Check for saved token
    const savedToken = localStorage.getItem("fyersAccessToken");
    if (savedToken) {
      setAccessToken(savedToken);
      setIsConnected(true);
    }
  }, []);

  const initiateLogin = () => {
    if (!appId) {
      setError("Please enter your App ID");
      return;
    }

    setIsLoading(true);
    setError("");

    // Generate a random state parameter for security
    const state = "fyers" + Math.floor(Math.random() * 1000000);
    localStorage.setItem("fyersAuthState", state);

    // Use the redirect URL that matches your backend callback route
    const redirectUri = encodeURIComponent(
      "http://localhost:5000/api/callback"
    );

    // Redirect to Fyers authentication page
    const authUrl = `https://api-t1.fyers.in/api/v3/generate-authcode?client_id=${appId}&redirect_uri=${redirectUri}&response_type=code&state=${state}`;

    window.location.href = authUrl;
  };

  const exchangeToken = async () => {
    if (!appId || !appSecret || !authCode) {
      setError("App ID, App Secret, and Auth Code are all required");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Call your backend API to exchange the auth code for a token
      const response = await axios.post("/api/getToken", {
        appId,
        appSecret,
        auth_code: authCode,
      });

      // Handle the token response
      if (response.data && response.data.access_token) {
        setAccessToken(response.data.access_token);
        localStorage.setItem("fyersAccessToken", response.data.access_token);
        setIsConnected(true);
      } else {
        setError("Failed to obtain access token");
      }
    } catch (error) {
      const err = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      setError(
        "Token exchange failed: " +
          (err.response?.data?.message || err.message || "Unknown error")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectAccount = () => {
    localStorage.removeItem("fyersAccessToken");
    setAccessToken("");
    setIsConnected(false);
    setAuthCode("");
    setAppSecret("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Fyers Authentication
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
          {error}
        </div>
      )}

      {!isConnected ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              App ID:
            </label>
            <input
              type="text"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              placeholder="Your Fyers App ID"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {authCode ? (
            <>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  App Secret:
                </label>
                <input
                  type="password"
                  value={appSecret}
                  onChange={(e) => setAppSecret(e.target.value)}
                  placeholder="Your Fyers App Secret"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Auth Code:
                </label>
                <input
                  type="text"
                  value={authCode}
                  readOnly
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              <button
                className="w-full bg-green-500 text-white p-3 rounded font-bold hover:bg-green-600 disabled:bg-green-300"
                onClick={exchangeToken}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Get Access Token"}
              </button>
            </>
          ) : (
            <button
              className="w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-600 disabled:bg-blue-300"
              onClick={initiateLogin}
              disabled={isLoading}
            >
              {isLoading ? "Redirecting..." : "Connect to Fyers"}
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center text-green-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Connected to Fyers
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Access Token:
            </label>
            <div className="p-3 bg-gray-100 rounded font-mono text-sm overflow-hidden">
              {accessToken.substring(0, 10)}...
              {accessToken.substring(accessToken.length - 10)}
            </div>
          </div>

          <button
            className="w-full bg-red-500 text-white p-3 rounded font-bold hover:bg-red-600"
            onClick={disconnectAccount}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default FyersAuth;
