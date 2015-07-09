(ns matt.auth-bare
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [put! chan <! >! buffer]]
            [matt.state :refer [state]]))

#_(aset js/AWS.config "region" "us-east-1")

; user-id will be useful later
#_(def user-id (r/cursor state [:user-id]))

#_(defn set-user-id []
  (let [c (chan)]
    (.get js/AWS.config.credentials #(go
                                      (let [id (or (-> js/AWS .-config .-credentials .-identityId) false)]
                                        (>! c (reset! user-id id)))))
    c))

#_(defn init-google-api []
  (let [c (chan)]
    (.load js/gapi "auth2" #(go (>! c true)))
    c))

#_(def cog (AWS.CognitoIdentity. (clj->js {"params" {"IdentityPoolId" "us-east-1:354453dd-4512-4d6a-92ea-c23c963cbfee"}})))

#_(defn get-id
  [google-token]
  (if google-token (prn "has google token" google-token))
  (let [c (chan)]
    (.getId cog #(go
                  (let [id (:IdentityId (js->clj %2 :keywordize-keys true))]
                    (reset! user-id id)
                    (>! c id))))
    c))

#_(defn get-token [identity-id]
  (let [c (chan)]
    (.getOpenIdToken cog (clj->js {"IdentityId" identity-id}) #(go (>! c (aget %2 "Token"))))
    c))

#_(defn web-identity [token]
  (let [sts (AWS.STS.)
        ]))

#_(defn auth-flow
  [& args]
  (go
    (let [id (<! (get-id (first args)))
          token (<! (get-token id))
          ]
      #_(prn "token" token))))

#_(go
  (auth-flow)

  (<! (init-google-api))
  (def google-auth
    (.init js/gapi.auth2
           (clj->js {"client_id" "496634047757-mi6fvvd7lajtf6qb02o1du9qa4omcqdo.apps.googleusercontent.com"
                     "scope"     "profile"})))
  (.listen (.-currentUser google-auth)
           #(auth-flow (-> google-auth .-currentUser .get .getAuthResponse .-id_token))))