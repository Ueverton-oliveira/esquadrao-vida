# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Public::HowItWorks', type: :request do
  describe 'GET /como-funciona' do
    it 'returns http success' do
      get how_it_works_path

      expect(response).to have_http_status(:ok)
    end

    it 'explains how the project works' do
      get how_it_works_path

      expect(response.body).to include('Como Funciona')
    end

    it 'explains that the person can seek help' do
      get how_it_works_path

      expect(response.body).to include('ajuda')
    end
  end
end
