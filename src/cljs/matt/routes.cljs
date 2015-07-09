(ns matt.routes
  (:require [goog.events]
            [matt.components :as c]
            [reagent.core :as r]
            [matt.state :refer [state]]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :refer-macros [defroute]]
            [pushy.core :as pushy])
  (:import goog.History))

(def layout (r/cursor state [:layout]))

(defroute "/" [] (reset! layout c/home))
(defroute "/a/" [] (reset! layout c/a))
(defroute "/b/" [] (reset! layout c/b))
(defroute "/c/" [] (reset! layout c/c))

(defn get-path [] (let [hash (-> js/window .-location .-hash)] (if (empty? hash) nil (.substr hash 1))))

(defn init []
  (secretary/set-config! :prefix "/")

  (def history (pushy/pushy secretary/dispatch! (fn [x] (when (secretary/locate-route x) x))))
  (if-let [hash (get-path)] (pushy/set-token! history hash))

  (pushy/start! history))


(defonce _ (init))

