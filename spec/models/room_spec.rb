# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Room, type: :model do
  describe 'validations' do
    subject(:room) { build(:room) }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:meeting_url) }
  end

  describe 'defaults' do
    it 'is active by default' do
      room = described_class.new

      expect(room.active).to be(true)
    end

    it 'allows an inactive room' do
      room = described_class.new(active: false)

      expect(room.active).to be(false)
    end
  end

  describe 'meeting_url' do
    it 'accepts a Google Meet URL' do
      room = build(
        :room,
        meeting_url: 'https://meet.google.com/abc-defg-hij'
      )

      expect(room).to be_valid
    end

    it 'rejects a non Google Meet URL' do
      room = build(
        :room,
        meeting_url: 'https://example.com/room'
      )

      expect(room).not_to be_valid
      expect(room.errors[:meeting_url]).to include(
        'must be a Google Meet URL'
      )
    end
  end
end
