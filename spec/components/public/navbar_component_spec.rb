# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Public::NavbarComponent, type: :component do
  subject(:component) { described_class.new }

  NAV_LINKS = {
    'Início' => :root_path,
    'Sobre' => :about_path,
    'Como Funciona' => :how_it_works_path,
    'Contato' => :contact_path,
    'Preciso de Ajuda' => :new_help_request_path
  }.freeze

  it 'renders the project name' do
    render_inline(component)

    expect(rendered_content).to include('Esquadrão da Vida')
  end

  NAV_LINKS.each do |label, path_helper|
    it "renders the #{label.downcase} link" do
      render_inline(component)

      expect(rendered_content).to include(%(href="#{send(path_helper)}"))
      expect(rendered_content).to include(label)
    end
  end
end
