require "rails_helper"

RSpec.describe "Admin::Rooms", type: :request do
  describe "GET /admin/rooms" do
    context "when unauthenticated" do
      it "redirects to the login page" do
        get admin_rooms_path

        expect(response).to redirect_to(new_admin_user_session_path)
      end
    end

    context "when authenticated" do
      let!(:admin_user) { create(:admin_user) }

      before do
        sign_in admin_user
      end

      it "returns http success" do
        get admin_rooms_path

        expect(response).to have_http_status(:ok)
      end

      it "lists the rooms" do
        room = create(
          :room,
          name: "Sala de Acolhimento"
        )

        get admin_rooms_path

        expect(response.body).to include(room.name)
      end

      it "shows an empty state when there are no rooms" do
        get admin_rooms_path
      
        expect(response.body).to include("Nenhuma sala cadastrada.")
      end

      it "shows active rooms as active" do
        room = create(:room, active: true)
      
        get admin_rooms_path
      
        expect(response.body).to include("Ativa")
        expect(response.body).to include(room.name)
      end
      
      it "shows inactive rooms as inactive" do
        room = create(:room, active: false)
      
        get admin_rooms_path
      
        expect(response.body).to include("Inativa")
        expect(response.body).to include(room.name)
      end

      it "shows the Google Meet link" do
        room = create(
          :room,
          meeting_url: "https://meet.google.com/abc-defg-hij"
        )
      
        get admin_rooms_path
      
        expect(response.body).to include(room.meeting_url)
      end
    end
  end
end
