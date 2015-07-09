(ns matt.state
  (:require [reagent.core :as r]))

(def state (r/atom {:user-id ""
                    :user {:name "" :image-url ""}}))