require "rails_helper"

RSpec.describe "Public::Contact", type: :request do
  describe "GET /contato" do
    it "returns http success" do
      get contact_path

      expect(response).to have_http_status(:success)
    end

    it "renders the contact page" do
      get contact_path

      expect(response.body).to include("Contato")
    end

    it "provides a way to seek help" do
      get contact_path

      expect(response.body).to include("Preciso de Ajuda")
    end
  end
end
