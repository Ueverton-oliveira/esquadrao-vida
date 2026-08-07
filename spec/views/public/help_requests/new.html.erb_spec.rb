# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'public/help_requests/new', type: :view do
  before do
    render template: 'public/help_requests/new'
  end

  it 'displays the page title' do
    expect(rendered).to include('<h1>Preciso de Ajuda</h1>')
  end

  it 'displays the intro message' do
    expect(rendered).to include('Você não precisa enfrentar esse momento sozinho.')
  end

  it 'displays the support message' do
    expect(rendered).to include('O Esquadrão da Vida está aqui para acolher, ouvir e orientar.')
  end
end
