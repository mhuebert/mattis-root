(ns matt.core
    (:require
      [matt.routes]
      [matt.components :as c]
      [reagent.core :as r]))

(enable-console-print!)
(r/render [c/layout] (.getElementById js/document "app"))
