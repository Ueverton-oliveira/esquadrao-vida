# frozen_string_literal: true

FactoryBot.define do
  factory :room do
    name { 'Sala de Acolhimento' }
    meeting_url { 'https://meet.google.com/abc-defg-hij' }
    active { true }
  end
end
