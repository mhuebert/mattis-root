(ns matt.auth
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [matt.state :refer [state]]
            [cljs.core.async :refer [put! chan <! >! buffer]]))

(enable-console-print!)

(defn init-google-api
  []
  (let [c (chan)]
    (.load js/gapi "auth2" #(go (>! c true)))
    c))

(def user-id (r/atom nil))

(defn update-credentials
  ([] (update-credentials nil))
  ([token]
   (if token (aset js/AWS.config.credentials.params.Logins "accounts.google.com" token)
             (do
               (aset js/AWS.config "identityId" (clj->js nil))
               (aset js/AWS.config.credentials.params "Logins" (clj->js {}))
               ))
   (aset js/AWS.config.credentials "expired" (clj->js true))))

(defn update-user-id []
  (let [c (chan)]
    (.get js/AWS.config.credentials #(go
                                      (let [id (or (-> js/AWS .-config .-credentials .-identityId) false)]
                                        (if-not id (do (update-credentials)
                                                       (update-user-id)))
                                        (>! c (reset! user-id id)))))
    c))

(defn google-auth []
  (.getAuthInstance js/gapi.auth2))

(defn get-google-token []
  (-> (google-auth) .-currentUser .get .getAuthResponse .-id_token))

(defn on-user-change
  [u]
  (let [signed-in? (.isSignedIn u)
        token (get-google-token)
        profile (.getBasicProfile u)
        name (if (and profile signed-in?) (.getName profile) nil)
        image-url (if (and profile signed-in?) (.getImageUrl profile) nil)]
    (.log js/console profile)
    (swap! state assoc-in [:user :name] name)
    (swap! state assoc-in [:user :image-url] image-url)
    (update-credentials token)
    (update-user-id)))


(defonce _
         (go
           (aset js/AWS.config "region" "us-east-1")
           (aset js/AWS.config "credentials" (js/AWS.CognitoIdentityCredentials. (clj->js {"IdentityPoolId" "us-east-1:354453dd-4512-4d6a-92ea-c23c963cbfee"})))
           (update-user-id)
           (update-credentials)
           (<! (init-google-api))
           (.init js/gapi.auth2
                  (clj->js {"client_id" "496634047757-mi6fvvd7lajtf6qb02o1du9qa4omcqdo.apps.googleusercontent.com"
                            "scope"     "profile"}))
           (js/googleSignInListen on-user-change)))

; https://console.developers.google.com
; https://console.aws.amazon.com/cognito
; https://developers.google.com/identity/sign-in/web/reference#gapiauth2googleauth














