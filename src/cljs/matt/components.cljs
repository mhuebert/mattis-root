(ns matt.components
  (:require [reagent.core :as r]
            #_[matt.auth]
            [matt.state :refer [state]]))

(def u-name (r/cursor state [:user :name]))
(def u-image-url (r/cursor state [:user :image-url]))

(defn nav []
  [:div
   [:p
    (if @u-name [:strong @u-name])
    (if @u-image-url [:img {:src @u-image-url}])
    ]
   [:p [:a {:href "/"} "home"]
    " "
    [:a {:href "/a/"} "a"]
    " "
    [:a {:href "/b/"} "b"]
    " "
    [:a {:href "/c/"} "c"]]
   [:br]  [:br]
   [:a {:on-click js/signIn} "Sign in with Google"]
   [:br]
   [:a {:on-click js/signOut} "Sign Out"]])



;gapi.auth2.getAuthInstance()
;https://developers.google.com/identity/sign-in/web/sign-in#get_profile_information
#_(defn aws []
  (fn []
    [:div
     [:div "Unique User ID:" (:user-id @state)]
     [nav]
     [:a {:on-click #(.signIn matt.auth/google-auth)} "Sign in with Google"]
     [:a {:on-click #(.signOut matt.auth/google-auth)} "Sign Out"]]))

(defn home []
  (fn []
    [:div
     [:h2 "home"]
     [nav]]))

(defn a []
  (fn []
    [:div
     [:h2 "a"]
     [nav]]))

(defn b []
  [:div
   [:h2 "b"]
   [nav]])

(defn c []
  [:div
   [:h2 "c"]
   [nav]])

(defn layout []
  [(or (:layout @state) home)])