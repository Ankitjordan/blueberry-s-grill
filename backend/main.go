package main

import (
	"backend/config"
	"backend/routes"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Initialize database
	godotenv.Load()
	config.ConnectDB()
	defer config.DisconnectDB()

	r := gin.Default()

	// CORS configuration for frontend
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("FRONTEND_URL"), "http://localhost:3000"}, // Include localhost as fallback for dev
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	routes.BookingsRouter(r)
	routes.AgentCallRouter(r)

	r.Run(":8080")
}
