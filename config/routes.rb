# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users
  root 'public/home#index'

  namespace :admin do
    root "dashboard#show"
  end

  scope module: :public do
    get 'sobre', to: 'about#show', as: :about
    get 'como-funciona', to: 'how_it_works#show', as: :how_it_works
    get 'contato', to: 'contact#show', as: :contact
    get 'preciso-de-ajuda', to: 'help_requests#new', as: :new_help_request
  end
end
