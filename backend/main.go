package main

import (
	"backend/config"
	"backend/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	config.ConnectDB()
	defer config.DisconnectDB()

	r := gin.Default()

	routes.BookingsRouter(r)

	r.Run(":8080")
}
