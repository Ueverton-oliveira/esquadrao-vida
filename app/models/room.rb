# frozen_string_literal: true

class Room < ApplicationRecord
  GOOGLE_MEET_URL = %r{\Ahttps://meet\.google\.com/[a-z0-9-]+\z}i

  validates :name, presence: true
  validates :meeting_url, presence: true
  validate :meeting_url_must_be_google_meet

  private

  def meeting_url_must_be_google_meet
    return if meeting_url.blank?
    return if meeting_url.match?(GOOGLE_MEET_URL)

    errors.add(:meeting_url, 'must be a Google Meet URL')
  end
end
