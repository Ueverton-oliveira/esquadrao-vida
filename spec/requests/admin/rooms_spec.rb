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
        room = create(:room, name: "Sala de Acolhimento")

        get admin_rooms_path

        expect(response.body).to include(room.name)
      end

      it "shows an empty state when there are no rooms" do
        get admin_rooms_path

        expect(response.body).to include("Nenhuma sala cadastrada.")
      end
    end
  end

  describe "GET /admin/rooms/new" do
    context "when authenticated" do
      let!(:admin_user) { create(:admin_user) }

      before do
        sign_in admin_user
      end

      it "returns success" do
        get new_admin_room_path

        expect(response).to have_http_status(:ok)
      end

      it "renders the form" do
        get new_admin_room_path

        expect(response.body).to include("Nova Sala")
        expect(response.body).to include("Nome")
        expect(response.body).to include("Link Google Meet")
      end
    end
  end

  describe "POST /admin/rooms" do
    let!(:admin_user) { create(:admin_user) }

    before do
      sign_in admin_user
    end

    context "with valid params" do
      let(:params) do
        {
          room: {
            name: "Sala Esperança",
            meeting_url: "https://meet.google.com/abc-defg-hij"
          }
        }
      end

      it "creates a room" do
        expect do
          post admin_rooms_path, params: params
        end.to change(Room, :count).by(1)
      end

      it "redirects to rooms index" do
        post admin_rooms_path, params: params

        expect(response).to redirect_to(admin_rooms_path)
      end
    end

    context "with invalid params" do
      let(:params) do
        {
          room: {
            name: "",
            meeting_url: ""
          }
        }
      end

      it "does not create a room" do
        expect do
          post admin_rooms_path, params: params
        end.not_to change(Room, :count)
      end

      it "returns unprocessable entity" do
        post admin_rooms_path, params: params

        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "renders the new room form" do
        post admin_rooms_path, params: params

        expect(response.body).to include("Nova Sala")
      end

      it "shows the validation errors" do
        post admin_rooms_path, params: params
      
        expect(response.body).to include("Erros encontrados:")
        expect(response.body).to include("Name")
        expect(response.body).to include("Meeting url")
      end
    end
  end
end
