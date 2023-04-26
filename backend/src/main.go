package main

import (
	"log"
	"net/http"
)

func setSuccessHeader(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}

func handler(w http.ResponseWriter, r *http.Request) {
	setSuccessHeader(w)
	http.Error(w, "{}", http.StatusOK)
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
