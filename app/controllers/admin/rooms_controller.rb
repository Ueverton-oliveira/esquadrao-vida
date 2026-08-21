module Admin
  class RoomsController < AdminController
    def index
      @rooms = Room.order(created_at: :desc)
    end

    def new
      @room = Room.new
    end

    def create
      @room = Room.new(room_params)

      if @room.save
        redirect_to admin_rooms_path,
                    notice: "Sala criada com sucesso."
      else
        render :new, status: :unprocessable_entity
      end
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private

    def room_params
      params.require(:room)
            .permit(:name, :meeting_url)
    end
  end
end
