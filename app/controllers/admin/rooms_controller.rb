module Admin
  class RoomsController < AdminController
    def index
      @rooms = Room.order(created_at: :desc)
    end

    def new
    end

    def show
      @rooms_count = Room.count
      @active_rooms_count = Room.where(active: true).count
      @inactive_rooms_count = Room.where(active: false).count
    end

    def create
    end

    def edit
    end

    def update
    end

    def destroy
    end
  end
end
