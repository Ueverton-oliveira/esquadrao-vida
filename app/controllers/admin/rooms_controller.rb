module Admin
  class RoomsController < AdminController
    def index
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
