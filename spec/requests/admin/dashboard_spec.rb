require "rails_helper"

RSpec.describe "Admin::Dashboard", type: :request do
  describe "GET /admin" do
    it "requires authentication" do
      get admin_root_path

      expect(response).to redirect_to(
        new_admin_user_session_path
      )
    end
  end
end
