package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

type BookingsController struct {
	DB *pgxpool.Pool
}

func NewBookingsController(db *pgxpool.Pool) *BookingsController {
	return &BookingsController{DB: db}
}

func (ctrl *BookingsController) BookSingleSeat(c *gin.Context) {

}

func (ctrl *BookingsController) BookFullTable(c *gin.Context) {
}
