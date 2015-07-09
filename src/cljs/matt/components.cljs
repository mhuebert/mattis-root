(ns matt.components
  (:require [reagent.core :as r]
            #_[matt.auth]
            [matt.state :refer [state]]))

(def u-name (r/cursor state [:user :name]))
(def u-image-url (r/cursor state [:user :image-url]))

(defn nav []
  [:div

   [:p [:a {:href "/" :style {:font-size 100}} "/"]
    " "
    [:a {:href "/abracadabra/" :style {:font-size 60}} "a"]
    " "
    [:a {:href "/bravado/" :style {:font-size 40}} "b"]
    " "
    [:a {:href "/calypso/crash/candy/" :style {:font-size 80}} "c"]]
   [:br]  [:br]
   [:a {:on-click js/signIn} "Sign in with Google"]
   [:br]
   [:a {:on-click js/signOut} "Sign Out"]
   [:div
    (if @u-name [:p [:strong @u-name]])
    (if @u-image-url [:img {:src @u-image-url}])]])



;gapi.auth2.getAuthInstance()
;https://developers.google.com/identity/sign-in/web/sign-in#get_profile_information


(defn home []
  (fn []
    [:div
     [:h2 "you are home."]
     [nav]]))

(defn a []
  (fn []
    [:div
     [:h2 "acrobat"]
     [nav]]))

(defn b []
  [:div
   [:h2 "bulldog"]
   [nav]])

(defn c []
  [:div
   [:h2 "crash"]
   [nav]])

(defn layout []
  [(or (:layout @state) home)])