(ns ms.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ms.mines :as mines]))

(def board (atom (mines/create-board 16)))
(def model (atom (mines/create-model 16 40 mines/mines-op)))
(def end-a (atom [false nil]))

(defn on-click [end pos]
  (when-not (first end)
    (swap! board #(mines/reveal % @model pos mines/mines-op))))

(defn r-click [end pos]
  (when-not (first end)
    (let [in-pos (mines/get-pos @board pos)]
      (if (= in-pos mines/flag-s)
        (swap! board #(mines/put-in-board % pos nil))
        (swap! board #(mines/put-in-board % pos mines/flag-s))))))

(def color-t [[nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil "💣" nil "💣" "💣" nil "💣" "💣" "💣" nil nil "💣" "💣" "💣" nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil "💣" nil nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil "💣" "💣" "💣" nil nil nil nil nil nil "💣" "💣" "💣" nil nil nil]
              [nil "💣" nil "💣"  nil nil nil nil nil nil "💣" nil "💣" nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil "💣" nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil "💣" "💣" "💣" nil nil nil "💣" "💣" "💣" nil nil nil nil nil nil]
              [nil "💣" nil "💣" nil nil nil "💣" nil "💣" nil nil nil nil nil nil]
              [nil "💣" nil "💣" nil nil nil "💣" "💣" "💣" nil nil nil nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]
              [nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil nil]])
;(def board (atom (mines/put-numbers best mines/mines-op)))
;this is just to test the color of any number


(defn decide-style [e]
  (case e
    "1"          [:td.cell {:style {:color "blue"}} e]
    "2"          [:td.cell {:style {:color "green"}} e]
    "3"          [:td.cell {:style {:color "red"}} e]
    "4"          [:td.cell {:style {:color "DarkBlue"}} e]
    "5"          [:td.cell {:style {:color "DarkRed"}} e]
    "6"          [:td.cell {:style {:color "Teal"}} e]
    "7"          [:td.cell {:style {:color "black"}} e]
    "8"          [:td.cell {:style {:color "OrangeRed"}} e]
                 [:td.cellB {:style {:color "red"}} e]))



(defn render-board [x y]
  (let [end (mines/end? @board 40)
        cells (for [y1 (range y)]
                (into [:tr]
                      (for [x1 (range x)
                            :let [in-pos (mines/get-pos @board [x1 y1])]]
                         (cond (or (= in-pos nil))
                               [:td.cellE {:on-click #(on-click end [x1 y1])
                                           :onContextMenu
                                           (fn [e]
                                             (.preventDefault e)
                                             (when (= 2 (.-button e))
                                               (r-click end [x1 y1])))}]

                               (or (= in-pos "0") (= in-pos " "))
                               [:td.cell0 {:on-click #(on-click end [x1 y1])
                                           :onContextMenu
                                           (fn [e]
                                             (.preventDefault e)
                                             (when (= 2 (.-button e))
                                               (r-click end [x1 y1])))}]

                               (= in-pos mines/flag-s)
                               [:td.cell {:onContextMenu
                                          (fn [e]
                                            (.preventDefault e)
                                            (when (= 2 (.-button e))
                                              (r-click end [x1 y1])))
                                          :style {:color "white"}}
                                in-pos]

                               :else (decide-style in-pos)))))]

    (when (first end)
      (reset! end-a end))
    (into [:table.stage
           {:style {:height 510 :width 510 :table-layout "fixed"}}] cells)))

(defn game []
  [:div
    [render-board 16 16]
    (when (first @end-a)
      [:div.overlay
       [:div.play {:on-click
                   #(do (reset! end-a [false nil])
                        (reset! board (mines/create-board 16))
                        (reset! model (mines/create-model 16 40
                                                          mines/mines-op)))}
        (if (second @end-a)
          [:div [:h2 "You win"] [:h1 "↺"]]
          [:div [:h2 "You Lose"] [:h1 "↺"]])]])])



(defn run []
  (reagent/render [game]
                  (js/document.getElementById "app")))

(run)
