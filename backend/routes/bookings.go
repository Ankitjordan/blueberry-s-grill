package routes

import (
	"backend/config"
	"backend/controllers"
	"github.com/gin-gonic/gin"
)

func BookingsRouter(r *gin.Engine) {
	ctrl := controllers.NewBookingsController(config.DB)
	bookings := r.Group("/bookings")
	{
		bookings.POST("/single-seat", ctrl.BookSingleSeat)
		bookings.POST("/full-table", ctrl.BookFullTable)
	}
}
