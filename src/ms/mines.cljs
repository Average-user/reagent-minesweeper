(ns ms.mines)


;; Rows indicators.
(def alphabet ["A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M"
               "N" "O" "P" "Q" "R" "S" "T" "U" "V" "W" "X" "Y" "Z"])

;; For the classic game.
(def mines-op [[-1 -1] [-1 0] [1 -1] [1  0]
               [1   1] [0  1] [-1 1] [0 -1]])

;; For the Knightsweeper variation.
(def knights-op [[1  2] [ 1 -2] [-1  2] [-1 -2]
                 [2  1] [ 2 -1] [-2  1] [-2 -1]])

;; If your Terminal dont suport Utf-8, can be change for other character.
(def mine-s "💣")
(def flag-s "⚑")

(defn create-board
  "Creates a Vector of n Vectors with n times nil.
  Ex: (create-board 2) => [[nil nil] [nil nil]]."
  [n]
  (vec (take n (repeat (vec (take n (repeat nil)))))))

(defn put-in-board
  "Gets a board type (vectors of vectors), and it insertes the element e
  on the [x y] coordinates.
  Ex: (put-in-board [[0] [1]] [0 1] 'X') => [[0] ['X']]."
  [board [x y] e]
  (assoc-in board [y x] e))

(defn get-pos
  "Returns the [x y] coordinates of a Vector of Vectors.
  Ex: (get-pos [[0 1] [2 3]] [1  0]) => 1."
  [board [x y]]
  (get-in board [y x]))

(defn put-mines
  "Puts a certain amount of mines in a random way into the board
  Ex: (put-mines [[nil nil] [nil nil]] 2) => [['X' 'X'] [nil nil]]
      (put-mines [[nil nil] [nil nil]] 2) => [['X' nil] ['X' nil]]."
  [board mines]
  (let [size (range (count board))]
    (loop [b board m mines]
      (if (zero? m)
        b
        (let [pos [(rand-nth size) (rand-nth size)]]
          (if (not (get-pos b pos))
            (recur (put-in-board b pos mine-s) (dec m))
            (recur b m)))))))


(defn numbers-of
  "Indicates the numbers of mines adjacent in a [x y] position of a board"
  [board [x y] op]
  (count
    (for [[v h] op
          :let  [p [(+ x h) (+ v y)]]
          :when (= mine-s (get-pos board p))]
      p)))

(defn put-numbers
  "Count the number of mines that are around every not mine position
  of the board"
  [board op]
  (let [size (count board)]
    (mapv (fn [y] (mapv (fn [x] (if (not (get-pos board [x y]))
                                 (str (numbers-of board [x y] op))
                                 (get-pos board [x y])))
                        (range size)))
          (range size))))

(defn create-model
  "This Function create a board where it is all revealed, the mines
  and all the squares have their propper number. It is used as a model
  to de actually board where the game happens"
  [n m op]
  (put-numbers (put-mines (create-board n) m) op))

(declare reveal) ;; Declares The not yet defined reveal function

(defn reveal-if-0
  "Reveal the current coordinate, and the 8 adjacent squares"
  [b m [x y] op]
  (let [n (for [[v h] op
                :let  [p [(+ x h) (+ v y)]]
                :when (and (get-pos m p) (not (get-pos b p)))]
             p)]
    (loop [b (put-in-board b [x y] " ") n n]
      (if (empty? n)
        b
        (recur (reveal b m (first n) op) (rest n))))))

(defn reveal-all-x [board model pos]
  (mapv (fn [l y] (mapv (fn [e x] (if (and (not (= [x y] pos))
                                           (= (get-pos model [x y]) mine-s))
                                    mine-s
                                    e))
                        l (range (count l))))
        board (range (count board))))

(defn reveal
  "Gets what it's on the 'pos' coordinate of the model, it paste it
  on the board."
  [board model pos op]
  (let [in-pos (get-pos model pos)]
   (cond (= mine-s in-pos) (reveal-all-x (put-in-board board pos "x") model pos)
         (= "0" in-pos)    (reveal-if-0 board model pos op)
         :else             (put-in-board board pos in-pos))))

(defn end?
  "Checks if the player has lost or win. If not, returns false"
  [board mines]
  (let [b (flatten board)]
    (cond (not (empty? (filter #(= % mine-s) b)))  [true false]

          (= mines (count (filter #(or (= nil %) (= % flag-s)) b)))
          [true true]

          :esle                                    [false false])))
