# frozen_string_literal: true

Rails.application.routes.draw do
  root 'public/home#index'

  scope module: :public do
    get 'sobre', to: 'about#show', as: :about
    get 'como-funciona', to: 'how_it_works#show', as: :how_it_works
    get 'contato', to: 'contact#show', as: :contact
  end
end
