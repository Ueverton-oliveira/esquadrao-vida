require "rails_helper"

RSpec.describe "Admin::Dashboard", type: :request do
  describe "GET /admin" do
    it "requires authentication" do
      get admin_root_path

      expect(response).to redirect_to(
        new_admin_user_session_path
      )
    end

    context "when authenticated" do
      let!(:admin_user) { create(:admin_user) }

      before do
        sign_in admin_user
      end

      it "returns http success" do
        get admin_root_path

        expect(response).to have_http_status(:ok)
      end

      it "renders the dashboard title" do
        get admin_root_path

        expect(response.body).to include("Painel Administrativo")
      end

      it "renders the rooms section" do
        get admin_root_path

        expect(response.body).to include("Salas")
      end

      it "shows the total number of rooms" do
        create_list(:room, 3)
      
        get admin_root_path
      
        expect(response.body).to include("3")
      end

      it "shows the number of active rooms" do
        create_list(:room, 2, active: true)
        create(:room, active: false)
      
        get admin_root_path
      
        expect(response.body).to include("2")
      end
    end
  end
end
