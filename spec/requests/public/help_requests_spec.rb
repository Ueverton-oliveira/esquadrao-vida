# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Public::HelpRequests', type: :request do
  describe 'GET /preciso-de-ajuda' do
    it 'returns http success' do
      get new_help_request_path
      expect(response).to have_http_status(:success)
    end

    it 'renders the help page' do
      get new_help_request_path

      expect(response.body).to include('Preciso de Ajuda')
    end
  end
end
