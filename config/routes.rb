# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :public do
    root "home#index"
  end

  root "public/home#index"
end
