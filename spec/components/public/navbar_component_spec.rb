# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Public::NavbarComponent, type: :component do
  subject(:component) { described_class.new }

  it 'renders the project name' do
    render_inline(component)

    expect(rendered_content).to include('Esquadrão da Vida')
  end

  it 'renders the home link' do
    render_inline(component)

    expect(rendered_content).to include(%(href="#{root_path}"))
    expect(rendered_content).to include('Início')
  end

  it 'renders the about link' do
    render_inline(component)

    expect(rendered_content).to include(%(href="#{about_path}"))
    expect(rendered_content).to include('Sobre')
  end

  it 'renders the how it works link' do
    render_inline(component)

    expect(rendered_content).to include(%(href="#{how_it_works_path}"))
    expect(rendered_content).to include('Como Funciona')
  end

  it 'renders the contact link' do
    render_inline(component)

    expect(rendered_content).to include(%(href="#{contact_path}"))
    expect(rendered_content).to include('Contato')
  end

  it 'renders the help request link' do
    render_inline(component)

    expect(rendered_content).to include(%(href="#{new_help_request_path}"))
    expect(rendered_content).to include('Preciso de Ajuda')
  end
end
