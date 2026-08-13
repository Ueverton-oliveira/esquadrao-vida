# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Public::About', type: :request do
  describe 'GET /sobre' do
    it 'returns http success' do
      get about_path

      expect(response).to have_http_status(:success)
    end

    it 'renders the project name' do
      get about_path

      expect(response.body).to include('Esquadrão da Vida')
    end

    it 'renders the project purpose' do
      get about_path

      expect(response.body).to include('esperança')
    end
  end
end
