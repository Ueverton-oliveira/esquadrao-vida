# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Public::HelpRequestsHelper, type: :helper do
  describe '#help_request_page_title' do
    it 'returns the page title' do
      expect(helper.help_request_page_title).to eq('Preciso de Ajuda')
    end
  end
end
